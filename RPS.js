let youscore=document.getElementById("youscore");
let compscore=document.getElementById("compscore");
let choices=document.querySelectorAll(".choies");
let msg=document.getElementById("msg");

let yous_core=0;
let comp_core=0;

function playgame(userchoice){
    console.log("choice was clicks",userchoice);
    let comchoice=compchoice();
    console.log("comp was clicks",comchoice);
    if(userchoice==comchoice){
        draw();
    }
    else{
        let userwin=true;
        if(userchoice=="Rock"){
            userwin=comchoice=="Paper"?false:true;
        }
        else if(userchoice=="Paper"){
            userwin=comchoice=="Rock"?true:false;
        }
        else{
            userwin=comchoice=="Rock"?false:true;
        }
        showWin(userwin);
    }
    
}

function compchoice(){
    let arr=["Rock","Paper","Scissors"];
    let r=Math.floor(Math.random()*3);
    return arr[r];
}

choices.forEach(function(choies){
    choies.addEventListener("click",function(){
        let userchoice=choies.getAttribute("id");
        playgame(userchoice);
     });
});

function draw(){
    //console.log("game was draw");
    msg.innerHTML="Game was draw";
    msg.style.backgroundColor="blue";
}
function showWin(userwin){
    if(userwin){
    //console.log("user winnner");
    msg.innerHTML="You winner";
    msg.style.backgroundColor="green";
    yous_core++;
    youscore.innerText=yous_core;
    }
    else{
        //console.log("you lose");
        msg.innerHTML="you lose";
        msg.style.backgroundColor="red";
        comp_core++;
        compscore.innerText=comp_core;
    }
}
