

function run() {
    let HTML = document.getElementById('html').value;
    let CSS = "<style>" + document.getElementById('css').value + "</style>";
    let JS = document.getElementById('js').value;
    let OUTPUT = document.getElementById('output');
    OUTPUT.contentDocument.body.innerHTML = HTML + CSS;

    try {
        OUTPUT.contentWindow.eval(JS);
    } catch (error) {
        console.error("Error in JavaScript:", error);
    }
}

document.getElementById('html').addEventListener('keyup', run);
document.getElementById('css').addEventListener('keyup', run);
document.getElementById('js').addEventListener('keyup', run);
