var container=document.createElement('div');
container.classList.add('stuffs','container');

var header=document.createElement('h1');
header.setAttribute('class','header');
header.innerText="HIGH SCORE";

var highScore=document.createElement('div');
highScore.setAttribute('id','highscore');
var hs=localStorage.getItem('hs');
var hsName=localStorage.getItem('hsName');
highScore.innerText=`${hsName}- ${hs}`;


var button=document.createElement('div');
button.setAttribute('id','goHome');
button.innerText="Go Home";


document.body.append(container);
container.append(header);
container.append(highScore);
container.append(button);


button.addEventListener("click",function(){
   window.location.href="../index.html";
});