import { CONVERT_PAGES, PAGES_CONVERTED } from './constants';
import transformer from './converter/transformer';

figma.showUI(__html__);

figma.ui.onmessage = message => {
  switch (message.type) {
    case CONVERT_PAGES:
      const figmaPages = figma.root.children;
      const sketchPages = figmaPages.map(page => transformer(page));

      figma.ui.postMessage({
        type: PAGES_CONVERTED,
        payload: { figmaPages, sketchPages },
      });

      break;
    default:
      break;
  }
};
