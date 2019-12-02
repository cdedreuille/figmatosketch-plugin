import generic from './converter/generic';

declare function JSZip(): void;

document.getElementById('convert').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'convert' } }, '*');
};

onmessage = async event => {
  const pagesJson = event.data.pluginMessage;
  const zip = new JSZip();
  const docJson = generic.docFile(pagesJson);
  const metaJson = generic.metaFile(pagesJson);
  const userJson = generic.userFile(pagesJson);

  zip.file('document.json', JSON.stringify(docJson, null, 2));
  zip.file('meta.json', JSON.stringify(metaJson, null, 2));
  zip.file('user.json', JSON.stringify(userJson, null, 2));

  pagesJson.forEach(page =>
    zip.file(`pages/${page.name}.json`, JSON.stringify(page, null, 2)),
  );

  const content = await zip.generateAsync({
    type: 'base64',
    compressionOptions: {
      level: 9,
    },
  });

  const downloadLink = <HTMLAnchorElement>document.getElementById('download');
  downloadLink.download = 'test.sketch';
  downloadLink.href = 'data:application/zip;base64,' + content;

  // parent.postMessage({ pluginMessage: { type: 'download' } }, '*');
};
