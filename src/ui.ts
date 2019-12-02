import generic from './converter/generic';

declare function JSZip(): void;

document.getElementById('convert').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'convert' } }, '*');
};

onmessage = async event => {
  const { sketchPages, figmaPages } = event.data.pluginMessage;
  const zip = new JSZip();
  const docJson = generic.docFile(figmaPages);
  const metaJson = generic.metaFile(figmaPages);
  const userJson = generic.userFile(figmaPages);

  zip.file('document.json', JSON.stringify(docJson, null, 2));
  zip.file('meta.json', JSON.stringify(metaJson, null, 2));
  zip.file('user.json', JSON.stringify(userJson, null, 2));

  figmaPages.forEach((page, i) =>
    zip.file(`pages/${page.id}.json`, JSON.stringify(sketchPages[i], null, 2)),
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
