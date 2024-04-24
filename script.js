const inputTextArea = document.getElementById("inputText");
const outputTextArea = document.getElementById("outputText");

async function generateReframe() {
    const text = inputTextArea.value;
    const response = await fetch('https://api.openai.com/v1/engines/text-davinci-002/completions', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer sk-proj-DdFK6sKucNtf7XWzmqrTT3BlbkFJvXUfjEQmwU5759gElmZ8',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt: "Reframe this to be more positive: " + text,
            max_tokens: 150
        })
    });
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
