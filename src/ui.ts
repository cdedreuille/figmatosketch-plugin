declare function JSZip(): void;

document.getElementById('convert').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'convert' } }, '*')
}

onmessage = async (event) => {
    // only do all of this stuff if the event is of type "transformed or something"
    console.log("Need to save this as a sketch file", event.data.pluginMessage);
    console.log(event);
    const pageJson = event.data.pluginMessage;
    const zip = new JSZip();

    for (let i = 0; i < 5; i++) {
        const txt = 'hello';
        zip.file("file" + i + ".txt", txt);
    }
    const content = await zip.generateAsync({
        type: "base64"
    });

    window.location.href = "data:application/zip;base64," + content;

   // parent.postMessage({ pluginMessage: { type: 'download' } }, '*');
}