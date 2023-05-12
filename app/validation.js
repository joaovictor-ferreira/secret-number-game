// const answerTipsContainer = document.querySelector("#answer-tips-container");

// const arrowUp = document.createElement("i")
// arrowUp.classList.add("fa-solid");
// arrowUp.classList.add("fa-arrow-up");

// const arrowDown = document.createElement("i")
// arrowUp.classList.add("fa-solid");
// arrowUp.classList.add("fa-arrow-down")

// validateNumber()
// /*verifica se o número digitado pelo usuário é menor, maior ou igual ao número randômico
// e também invoca a função de tips com o parâmetro adequado
// */

// // function askNumber () {
// // //     userAnswer = parseInt(prompt("Chute um número"));
// // //     validateNumber();
// // // }

// //userAnswer.addEventListener("submit", () => validateNumber)
// function validateNumber(){

//     if(number > userAnswer) {
//         tips("bigger");
      
//     }

//     else if (number < userAnswer) {
//         tips("smaller");

//     }

//     else
//         tips();
    
    
// }


// //cria dinamicamente as dicas que vão ajudar o usuário 
// function tips(x){

//     if(x === "bigger") {
//         answerTipsContainer.innerHTML = ""
//         answerBox.innerHTML = userAnswer;
//         const answerTips = document.createElement("p");
//         answerTips.innerHTML = "O número é maior ";
//         answerTips.classList.add("user-tips");
//         answerTips.appendChild(arrowUp);
//         answerTipsContainer.appendChild(answerTips);

//     }

//     else if(x === "smaller") {
//         answerTipsContainer.innerHTML = ""
//         const answerTips = document.createElement("p");
//         answerTips.innerHTML = "O número é menor ";
//         answerTips.classList.add("user-tips")
//         answerTips.appendChild(arrowDown);
//         answerTipsContainer.appendChild(answerTips);
//     }

//     else if (isNaN(userAnswer) ){
//         answerTipsContainer.innerHTML = ""
//         const answerTips = document.createElement("p");
//         answerTips.innerHTML = "Valor inválido, fale um número!";
//         answerTips.classList.add("user-tips");
//         answerTipsContainer.appendChild(answerTips); 

//     }
//     else {
//         const answerTips = document.createElement("p");
//         answerTips.innerHTML = "Parabéns, você acertou! Clique no botão para jogar novamente!";
//         answerTips.classList.add("user-tips")
//         const btn = document.createElement("button");
//         btn.classList.add("replay-btn");
//         answerTips.appendChild(btn);
//         answerTipsContainer.appendChild(answerTips);

//     }


// }
