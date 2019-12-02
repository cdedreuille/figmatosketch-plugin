import transformer from './converter/transformer';

figma.showUI(__html__);

figma.ui.onmessage = msg => {
  switch (msg.type) {
    case 'convert':
      const pages = figma.root.children;
      const pagesJson = pages.map(page => transformer(page));

      figma.ui.postMessage(pagesJson);
      break;
    case 'download':
      figma.closePlugin();
      break;
    // Is this needed?
    default:
      break;
  }
};
