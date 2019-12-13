import { CONVERT_PAGES, PAGES_CONVERTED } from './constants';
import generic from './converter/generic';

import './ui.css';

declare function JSZip(): void;

window.onload = () => {
  parent.postMessage({ pluginMessage: { type: CONVERT_PAGES } }, '*');
};

onmessage = async event => {
  const message = event.data.pluginMessage;

  switch (message.type) {
    case PAGES_CONVERTED:
      const {
        sketchPages,
        figmaPages,
        imageBytes,
        imageNames,
      } = message.payload;

      const zip = new JSZip();
      const docJson = generic.docFile(figmaPages);
      const metaJson = generic.metaFile(figmaPages);
      const userJson = generic.userFile(figmaPages);

      zip.file('document.json', JSON.stringify(docJson, null, 2));
      zip.file('meta.json', JSON.stringify(metaJson, null, 2));
      zip.file('user.json', JSON.stringify(userJson, null, 2));

      figmaPages.forEach((page, i) =>
        zip.file(
          `pages/${page.id}.json`,
          JSON.stringify(sketchPages[i], null, 2),
        ),
      );

      imageBytes.forEach((image, i) => {
        zip.file(`images/${imageNames[i]}.png`, image);
      });

      const content = await zip.generateAsync({
        type: 'base64',
        compressionOptions: {
          level: 9,
        },
      });

      const downloadLink = <HTMLAnchorElement>(
        document.getElementById('download')
      );

      downloadLink.download = 'file_name.sketch';
      downloadLink.href = 'data:application/zip;base64,' + content;
  }
};
