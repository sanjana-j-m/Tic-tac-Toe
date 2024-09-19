let boxes =document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let turno =true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turno){
            box.innerText="o";
            turno=false;
        }else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let post1Val=boxes[pattern[0]].innerText;
        let post2Val=boxes[pattern[1]].innerText;
        let post3Val=boxes[pattern[2]].innerText;

        if(post1Val!= "" &&  post2Val!="" && post3Val!=""){
            if(post1Val===post2Val&& post2Val===post3Val){
                console.log("Winner",post1Val);
            showWinner(post1Val);

            }  
        }
    } 
}

const btnDisable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const btnEnable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    btnDisable();
};
const resetGame=()=>{
    turno=true;
    btnEnable();
    msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);