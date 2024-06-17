let gameseq=[];
let userseq=[];
let btns =["red","yellow","blue","green"];

let started = false;
let  level = 0;
let h2= document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started == false){
        console.log("started ");
        started=true;

        levelup();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText=`Level ${level}`;
    let rand = Math.floor(Math.random ()* 3);
    let randcolor = btns[rand];
    let randbtn= document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}

function checkans(index){
    if (userseq[index]==gameseq[index]){
        if (userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML = `GAME OVER ! <b>YOUR SCORE: ${level}</b><br>Press any key to start again.` ;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },90);
        reset();
    }
}
function btnpress(){
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    gameseq= [];
    userseq = [];
    level = 0;
}