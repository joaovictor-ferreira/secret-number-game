const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();

//ativa o recognition assim que carrega página;
window.addEventListener("load", () => {
    recognition.start();
    recognition.lang = 'pt-Br'
    console.log("runfando")
}) 

recognition.onresult = (event) => {
    console.log(event.results[0][0].transcript)
    console.log("vasco");
    console.log("event")
}

recognition.addEventListener('end', () => recognition.start())