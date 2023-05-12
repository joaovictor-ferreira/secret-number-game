const answerBox = document.querySelector("#answer-box");

function generateNumber(){
    return Math.floor(Math.random()*1000+1);
}

let number = generateNumber()