module.exports.docFile = function (figmaPages) {
  const json = {
    "_class": "document",
    "do_objectID": "221E306C-BEF9-413E-84A5-BFDAA6FC4303",
    "assets": {
      "_class": "assetCollection",
      "colorAssets": [],
      "gradientAssets": [],
      "imageCollection": {
        "_class": "imageCollection",
        "images": {}
      },
      "images": [],
      "colors": [],
      "gradients": []
    },
    "colorSpace": 0,
    "currentPageIndex": 1,
    "foreignLayerStyles": [],
    "foreignSymbols": [],
    "foreignTextStyles": [],
    "layerStyles": {
      "_class": "sharedStyleContainer",
      "objects": []
    },
  };

  json.pages =
    figmaPages.map(page => ({
        "_class": "MSJSONFileReference",
        "_ref_class": "MSImmutablePage",
        "_ref": `pages/${page.id}`
    }));

  return json;
};

module.exports.metaFile = function (figmaPages) {
  const json = {
    "commit": "1b735aa8f66d3e13f8900ae7c369f355f0eb2d3a",
    "version":112,
    "fonts":[],
    "compatibilityVersion":99,
    "app": "com.bohemiancoding.sketch3",
    "autosaved": 0,
    "variant": "NONAPPSTORE",
    "created": {
      "commit": "1b735aa8f66d3e13f8900ae7c369f355f0eb2d3a",
      "appVersion": "52.6",
      "build": 78136,
      "app": "com.bohemiancoding.sketch3",
      "compatibilityVersion": 99,
      "version": 118,
      "variant": "NONAPPSTORE"
    },
    "saveHistory": ["NONAPPSTORE.78136"],
    "appVersion": "52.6",
    "build": 78136
  };

  json.pagesAndArtboards =
    figmaPages.map(page => ({
      [`${page.id}`]: {
        "name": page.name,
        "artboards": {
          // TODO: Loop the artboards from Figma
        }
      }
    }));

  return json;
};

module.exports.userFile = function (figmaPages) {
  const json = {
    "document": { "pageListHeight": 85, "pageListCollapsed": 0 }
  }
  for (let i = 0; i < figmaPages.length; i++) {
    json[figmaPages[i].id] =
      {
        "scrollOrigin": "{0, 0}",
        "zoomValue": 1
      };
  }

  return json;
};
