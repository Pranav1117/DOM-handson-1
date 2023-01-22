let ranNum=document.getElementById('random');
ranNum=parseInt(Math.random()*100+1);
console.log(ranNum);
let value=document.getElementById('guessid');
value=parseInt(guessid.value);
let chkbtn =document.getElementById('btn');
let bgcolor=document.getElementById('bgcolor');
let chances=100;
let highscore=document.getElementById('highscore');
let chance=document.getElementById('chances')


let hint=document.getElementById('sc');



function maincheck(){ 
let value=parseInt(guessid.value); 
//let score=100;

if(value===ranNum){
bgcolor.style.backgroundColor='green';
sc.innerText="Hurray You Won";
highscore.innerText=chances;
chkbtn.style.display='none';

}
else
{
    if(value>ranNum){
        sc.innerText="Your is High"; 
        chances--;
        chance.innerText=chances;
        highscore.innerText=chances;  
    }
    else
    {
        sc.innerText="Your is Low"; 
        chances--;
        chance.innerText=chances;
        highscore.innerText=chances;
    }
}

}
function reloadgame(){
    location.reload();
}
