const inputTextArea = document.getElementById("inputText");
const outputTextArea = document.getElementById("outputText");

async function generateReframe() {
    const inputText = document.getElementById("inputText").value;
    const responseElement = document.getElementById("response");
    const data = await response.json();
    outputTextArea.value = data.choices[0].text.trim();
}

function copyText() {
    outputTextArea.select();
    document.execCommand("copy");
}

function tryAgain() {
    generateReframe();
}
