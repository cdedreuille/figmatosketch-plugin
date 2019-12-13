import { CONVERT_PAGES, PAGES_CONVERTED } from './constants';
import { transform, images } from './converter/transformer';

figma.showUI(__html__);

figma.ui.onmessage = async message => {
  switch (message.type) {
    case CONVERT_PAGES:
      const figmaPages = figma.root.children;
      const sketchPages = figmaPages.map(page => transform(page));

      const imageBytes = await Promise.all(
        images.map(image => image.file.getBytesAsync()),
      );

      const imageNames = images.map(image => image.name);

      figma.ui.postMessage({
        type: PAGES_CONVERTED,
        payload: { figmaPages, sketchPages, imageBytes, imageNames },
      });

      break;
    default:
      break;
  }
};
