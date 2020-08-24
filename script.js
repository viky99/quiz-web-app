localStorage.setItem('count',1);
localStorage.setItem('score',0);

var containment=document.createElement('div');
containment.setAttribute('class','container containerDesign');

var header=document.createElement('h2');
header.setAttribute('class','heading');
header.innerText="Quick Quiz";

var button1=document.createElement('button');
button1.classList.add('btn','btn-primary','but1');
button1.setAttribute('id','play');
button1.innerHTML="Play";

var breaker=document.createElement('br');

var button2=document.createElement('button');
button2.classList.add('btn','btn-primary','but2');
button2.setAttribute('id','hishScores');
button2.innerText="High Score";

document.body.append(containment);
containment.append(header);
containment.append(button1);
containment.append(breaker);
containment.append(button2);

document.getElementById('play').addEventListener("click",function(){
   window.location.href="game/game.html";
});

button2.addEventListener('click',function(){
  window.location.href="highscore/highscores.html";
});

