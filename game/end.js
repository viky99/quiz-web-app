var container=document.createElement('div');
container.classList.add('contPos','container');


var scoreDisplay=document.createElement('h1');
scoreDisplay.setAttribute('id','displayScore');
scoreDisplay.innerHTML=`YOUR SCORE<br> ${+localStorage.getItem('score')}`;


var nickname=document.createElement('input');
nickname.setAttribute('type','text');
nickname.setAttribute('id','username');
nickname.setAttribute('placeholder','name');

var save=document.createElement('div');
save.setAttribute('id','saveScoreBtn')
save.innerText="Save";

var playAgain=document.createElement('div');
playAgain.setAttribute('id','playAgain')
playAgain.innerText="Play Again";


var homeBtn=document.createElement('div');
homeBtn.setAttribute('id','goHome')
homeBtn.innerText="Go Home";

document.body.append(container);
container.append(scoreDisplay);
container.append(nickname);
container.append(save);
container.append(playAgain);
container.append(homeBtn);

save.addEventListener("click",function(e){
  var highScore=+localStorage.getItem('hs');
  var userScore=+localStorage.getItem('score');
  if(userScore>highScore){
      localStorage.setItem('hsName',nickname.value);
      localStorage.setItem('hs',userScore);
  }
  save.innerText="Saved!!";
  localStorage.setItem('score',0);
})

playAgain.addEventListener("click",function(){
  window.location.href="game.html"
});

homeBtn.addEventListener('click',function(){
    window.location.href="../index.html";
})