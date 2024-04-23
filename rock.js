let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");                
const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");

const genCompChoice= ()=> {
    const options=["rock","paper","scissor"];
    randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
};

const drawGame=()=> {

    msg.innerText="Game was Draw! Play Again";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin) {
        userScore++;
        userscorePara.innerText=userScore;

        msg.innerText=`You Win ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else {
        compScore++;
        compscorePara.innerText=compScore;
      
        msg.innerText=`You Lost ${compChoice} Beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=> {

    //generate comp choice
    const compChoice=genCompChoice();


    if(userChoice===compChoice) {
        drawGame();
    }
    else {
        let userWin=true;
        if(userWin==="rock") {
            //scissor,paper
            userWin=compChoice==="paper" ? false : true;
        }
        else if(userWin==="paper") {
            //rock,scissor
            userWin=compChoice==="scissor" ? false: true;
        }
        else {
            //rock, paper
            userWin=compChoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=> {
        const userChoice=choice.getAttribute("id");

        playGame(userChoice);
    });
});