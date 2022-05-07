let userScore = 0;
let computerScore = 0;
const userScore_span = document.querySelector('#user-score');
const computerScore_span = document.querySelector('#computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.querySelector('#r');
const paper_div = document.querySelector('#p');
const scissors_div = document.querySelector('#s');

function getComputerChoice() {
    const choices = ["r", "p", "s"]
    const randomNumber = Math.floor(Math.random() * choices.length)
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock"
    if (letter === "p") return "Paper"
    if (letter === "s") return "Scissors"
}

function win(user, computer) {
    const userSup = "user".fontsize(3).sup();
    const compSup = "comp".fontsize(3).sup();
    const useChoice_div = document.getElementById(user)
    userScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = `${convertToWord(user)}${userSup} beats ${convertToWord(computer)}${compSup}. You Win!`;
    useChoice_div.classList.add('green-glow');
    setTimeout(() => useChoice_div.classList.remove('green-glow'), 1000)
}

function lose(user, computer) {
    const userSup = "user".fontsize(3).sup();
    const compSup = "comp".fontsize(3).sup();
    const useChoice_div = document.getElementById(user)
    computerScore++;
    computerScore_span.innerHTML = computerScore
    userScore_span.innerHTML = userScore
    result_p.innerHTML = `${convertToWord(user)}${userSup} loses to ${convertToWord(computer)}${compSup}. You Lost...`;
    useChoice_div.classList.add('red-glow');
    setTimeout(() => useChoice_div.classList.remove('red-glow'), 1000)
}

function draw(user, computer) {
    const userSup = "user".fontsize(3).sup();
    const compSup = "comp".fontsize(3).sup();
    const useChoice_div = document.getElementById(user)
    result_p.innerHTML = `${convertToWord(user)}${userSup} equals ${convertToWord(computer)}${compSup}. Its a Draw!`;
    useChoice_div.classList.add('grey-glow');
    setTimeout(() => useChoice_div.classList.remove('grey-glow'), 1000)
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();