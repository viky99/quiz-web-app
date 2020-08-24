var container=document.createElement('div');
container.setAttribute('class','container quizContainer');

var questionNumber=document.createElement('h5');
questionNumber.setAttribute('class','qno');
questionNumber.setAttribute('id','progressText');
questionNumber.innerHTML="Question 1/10";
var a=[];

var score=document.createElement('span');
score.setAttribute('id','score');
score.innerText=`Score: ${+localStorage.getItem('score')}`;

async function getApi(){
    var fetcher=await fetch(`https://opentdb.com/api.php?amount=1&type=multiple`);
    var jsonFetcher=await fetcher.json();
    var dataSet=jsonFetcher.results;
    dataSet.forEach(element => {
        var question=document.createElement('div');
        question.setAttribute('class','ques');
        question.innerHTML=`${element.question}`;
        container.append(question);
        var correctAnswer=element.correct_answer
        a.push(correctAnswer);
        var wrongAnswers=element.incorrect_answers;
        wrongAnswers.forEach(answer=>{
           a.push(answer);
        });
        function shuffle(o) {
            for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        };
        
        var random = shuffle(a);
        random.forEach(elements=>{
          var card=document.createElement('div');
          card.setAttribute('class','card');
          container.append(card);
          var cardText=document.createElement('p');
          cardText.setAttribute('class','options');
          cardText.addEventListener("click",function(){
              if(elements==correctAnswer){
                  console.log("Correct");
                  var scoring=+localStorage.getItem('score');
                  var newScore=scoring+10;
                  localStorage.setItem('score',newScore);
                  document.getElementById('score').innerText=`Score: ${+localStorage.getItem('score')}`; 
              } 
                event.preventDefault();
                window.location.href="game.html"
              var count=localStorage.getItem('count');
              count++;
              localStorage.setItem('count',count);
          });
          cardText.innerHTML=`${elements}`;
          card.append(cardText);  
        })
    });
}

document.body.append(container);
container.append(questionNumber);
container.append(score);
document.getElementById('progressText').innerHTML=`Question: ${localStorage.getItem('count')}/10`;
if(localStorage.getItem('count')<=10){
   getApi();
}
else{
    localStorage.setItem('count',0);
    window.location.href="end.html"
}