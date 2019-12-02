var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import generic from './converter/generic';
window.onload = () => {
    parent.postMessage({ pluginMessage: { type: 'convert' } }, '*');
};
onmessage = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const { sketchPages, figmaPages } = event.data.pluginMessage;
    const zip = new JSZip();
    const docJson = generic.docFile(figmaPages);
    const metaJson = generic.metaFile(figmaPages);
    const userJson = generic.userFile(figmaPages);
    zip.file('document.json', JSON.stringify(docJson, null, 2));
    zip.file('meta.json', JSON.stringify(metaJson, null, 2));
    zip.file('user.json', JSON.stringify(userJson, null, 2));
    figmaPages.forEach((page, i) => zip.file(`pages/${page.id}.json`, JSON.stringify(sketchPages[i], null, 2)));
    const content = yield zip.generateAsync({
        type: 'base64',
        compressionOptions: {
            level: 9,
        },
    });
    const downloadLink = document.getElementById('download');
    downloadLink.download = 'test.sketch';
    downloadLink.href = 'data:application/zip;base64,' + content;
    // parent.postMessage({ pluginMessage: { type: 'download' } }, '*');
});
