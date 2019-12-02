import transformer from './converter/transformer';

figma.showUI(__html__);

figma.ui.onmessage = msg => {
  switch (msg.type) {
    case 'convert':
      const figmaPages = figma.root.children;
      const sketchPages = figmaPages.map(page => transformer(page));

      figma.ui.postMessage({ figmaPages, sketchPages });
      break;
    case 'download':
      figma.closePlugin();
      break;
    // Is this needed?
    default:
      break;
  }
};
