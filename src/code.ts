import transformer from './converter/transformer.js';

figma.showUI(__html__);

figma.ui.onmessage = msg => {
    switch (msg.type) {
        case 'convert':
                console.log(figma.currentPage);
                figma.ui.postMessage(transformer(figma.currentPage))
            break;
        case 'download':
                figma.closePlugin();
                break;
        // Is this needed?        
        default:
            break;
        
    }    
};