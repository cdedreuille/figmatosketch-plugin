// REMOVE THIS FILE

const express = require('express');
const request = require('request');
const async = require('async');
const fs = require('fs');
const Archiver = require('archiver');
const router = express.Router();
const generic = require('./generic');
const transformer = require('./transformer');

router.get('/download-sketch/:fileId', function(req, res) {
  const fileId = req.params.fileId;
  const token = req.cookies['token'];
  const figmaFile = {
    url: `https://api.figma.com/v1/files/${fileId}?geometry=paths`,
    headers: { 'Authorization': `Bearer ${token}` }
  };
  const figmaImages = {
    url: `https://api.figma.com/v1/files/${fileId}/images`,
    headers: { 'Authorization': `Bearer ${token}` }
  };

  async.series([
    function(callback) {
      request(figmaFile, function(error, response, body) {
        if (!error && response.statusCode == 200) {
          return callback(null, body);
        }
        return callback(error || new Error('Response non-200'));
      });
    },
    function(callback) {
      request(figmaImages, function(error, response, body) {
        if (!error && response.statusCode == 200) {
          return callback(null, body);
        }
        return callback(error || new Error('Response non-200'));
      });
    }
  ],
  function(err, results) {
    if (err) {
      throw err;
    }
    // results is now array of responses
    const figmaFile = JSON.parse(results[0]);
    const figmaImages = JSON.parse(results[1]);
    const figmaLvl0 = figmaFile.document.children;

    res.attachment(`${figmaFile.name}.sketch`);

    archive = new Archiver('zip', {
      zlib: { level: 9 }
    });

    // good practice to catch warnings (ie stat failures and other non-blocking errors)
    archive.on('warning', function(error) {
      if (error.code === 'ENOENT') {
        // log warning
      } else {
        // throw error
        throw error;
      }
    });

    archive.on('error', function(error) {
      throw error;
    });

    // pipe archive data to client
    archive.pipe(res);

    // Create the document.json
    const docJson = generic.docFile(figmaLvl0);
    archive.append(JSON.stringify(docJson, null, 2), { name: 'document.json' });

    // Create the meta.json
    const metaJson = generic.metaFile(figmaLvl0);
    archive.append(JSON.stringify(metaJson, null, 2), { name: 'meta.json' });

    // Create user.json
    const userJson = generic.userFile(figmaLvl0);
    archive.append(JSON.stringify(userJson, null, 2), { name: 'user.json' });

    // Create Pages
    for (let i = 0; i < figmaLvl0.length; i++) {
      const pageJson = transformer(figmaLvl0[i]);
      archive.append(JSON.stringify(pageJson, null, 2), { name: `pages/${figmaLvl0[i].id}.json` });
    }

    // Get the images
    const images = Object.entries(figmaImages.meta.images);
    for (let i = 0; i < images.length; i++) {
      archive.append(request(images[i][1]), { name: `images/${images[i][0]}.png` } );
    }

    archive.finalize();
  });
});

module.exports = router;
