var questions =[
  {
    question: "Пповне ім'я Луффі",
    answers:{
      1 : 'Monkey D. Luffy',
      2 : 'Просто Luffy',
      3 : 'Monkey D. luffi',
      4 : 'Luffy Monkey'
    },
    rightAnswer: '1'
  },

  {
    question: "Скільки людей у ​​команді мугівар",
    answers:{
      1 : '7',
      2 : '27',
      3 : '10',
      4 : '5'
    },
    rightAnswer: '3'
  },

  {
    question: "Який фрукт з'їв Луффі",
    answers:{
      1 : 'Mera Mera no mi',
      2 : 'Zoro Zoro no mi',
      3 : 'Hito Hito no mi',
      4 : 'Gomu Gomu no mi'
    },
    rightAnswer: '4'
  },

  {
    question: "Хто був королем піратів",
    answers:{
      1 : 'Portgas D Ace',
      2 : 'Gold D. Roger',
      3 : 'Monkey D. Dragon',
      4 : 'Edward Newgate'
    },
    rightAnswer: '2'
  },

  {
    question: "Хто першим приєднався до команди мугівар",
    answers:{
      1 : 'Nami',
      2 : 'Roronoa Zoro',
      3 : 'Tony Tony chopper',
      4 : 'Niko Robin'
    },
    rightAnswer: '2'
  },
  {
    question: "Ким є луффі в команді мугівар",
    answers:{
      1 : 'Капітаном',
      2 : 'Навігатором',
      3 : 'Коком(поваром)',
      4 : 'Ніким просто член команди'
    },
    rightAnswer: '1'
  },
  {
    question: "Назва першого корабля команди мугівар",
    answers:{
      1 : 'Zevs',
      2 : 'Nvidia',
      3 : 'Going Merry',
      4 : 'Thousand Sunny'
    },
    rightAnswer: '3'
  },
  {
    question: "Хто віддав капелюх Луффі",
    answers:{
      1 : 'Brook',
      2 : 'Shanks',
      3 : 'Shachiburi',
      4 : 'Medvedev Andrey'
    },
    rightAnswer: '2'
  },
  {
    question: "Хто був першим противником Луффі",
    answers:{
      1 : 'Alvida',
      2 : 'Usopp',
      3 : 'Ken Kaneki',
      4 : 'Naruto'
    },
    rightAnswer: '1'
  },
  {
    question: "Яка мета Луффі",
    answers:{
      1 : 'Найти Ол-Блю',
      2 : 'Стати величайшим Фіхтовальшиком',
      3 : 'Стати королем піратів ї знайти сокровище ВАН ПИС',
      4 : 'Перемогти Shanks'
    },
    rightAnswer: '3'
  },
  {
    question: "Хто найкращий друг Луффі",
    answers:{
      1 : 'Roronoa Zoro',
      2 : 'Usopp',
      3 : 'Shanks',
      4 : 'Naruto'
    },
    rightAnswer: '1'
  },
  {
    question: "Хто батько Луффі",
    answers:{
      1 : 'Monkey D. Garpa',
      2 : 'Portgas D. Ace',
      3 : 'Monkey D. Dragon',
      4 : 'Linus Torvalds'
    },
    rightAnswer: '3'
  },
  {
    question: "Кого із шичібукай Луффі виграв першим",
    answers:{
      1 : 'Dracula Mihawk',
      2 : 'Crocodile',
      3 : 'Луффі не перемагав Шичибукайв',
      4 : 'Donquixote Doflamingo'
    },
    rightAnswer: '2'
  },
  {
    question: "Скільки Луффі на даний момен відкрив гиров",
    answers:{
      1 : '12',
      2 : '7',
      3 : '3',
      4 : '5'
    },
    rightAnswer: '4'
  },
  {
    question: "Яке було максимальна кількість шичібукаї",
    answers:{
      1 : '50',
      2 : '11',
      3 : '7',
      4 : '14'
    },
    rightAnswer: '2'
  },
  
];

var testContainer = document.getElementById('test');
var resultButton = document.getElementById('resultButton');
var resultContainer= document.getElementById('results');
  generateTest(questions, testContainer, resultButton, resultContainer);

function generateTest(questions, testContainer, resultButton, resultContainer){
function showQuestions(questions, testContainer) {
      var out = [];
      var answers;
      for (var i = 0; i < questions.length; i++){               
       answers = [];
       for (var ans_text in questions[i].answers){
           answers.push('<label><br><input type="radio" name="question' + i + '" value="' + ans_text + '">' + ans_text + ')' + questions[i].answers[ans_text] + '</label>');
        }
         out.push('<div class = "question">' + questions[i].question + '</div>' + '<div class = "answers"' + answers.join('') + '</div>');
      }
    testContainer.innerHTML = out.join(' ');
    }


   function showResult(questions, testContainer, resultContainer){ 
    var answerContainers = testContainer.querySelectorAll('.answers');

    var userAnswer ='';
    var rightAnswerNum = 0;

    for(var i=0; i<questions.length; i++){
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

      if(userAnswer == questions[i].rightAnswer){
           answerContainers[i].style.color ='green';
           rightAnswerNum++;          
      }else{
        answerContainers[i].style.color ='red';
      }
    }


  var resultStr;
  if(rightAnswerNum <= 5){
   resultStr ="незадовільно";
    }else if(rightAnswerNum >5&&rightAnswerNum <=8){
     resultStr ="треба повторити";
    }else if(rightAnswerNum >8&&rightAnswerNum <=11 ){
      resultStr ="це вже не погано";
    }else if(rightAnswerNum >=12&&rightAnswerNum <15){
       resultStr ="МОЛОДЕЦЬ(Відмінно)";
  }else if(rightAnswerNum ==15){
    resultStr ="Ви досягли між галактичного рівня";
  }
  resultContainer.innerHTML = resultStr;
  }
  showQuestions(questions, testContainer);
   
  resultButton.onclick = function(){
    showResult(questions, testContainer, resultContainer);
    clearInterval(MyVar);
  }
  
}

//timer

min = 0;
hour = 0;

function timer() {
  sec = 0;
  MyVar = setInterval(tick, 1000);
}

function tick() {
  sec++;
    if (sec >= 60) { 
      min++;
      sec = sec - 60;
    }
    if (min >= 60) {
       hour++;
       min = min - 60;
    }
if (sec < 10) { 
  if (min < 10) {
    if (hour < 10) {
      document.getElementById('showtimer').innerHTML ='0' + hour + ':0' + min + ':0' + sec;
    }else{
      document.getElementById('showtimer').innerHTML = hour + ':0' + min + ':0' + sec;
     }
  }else{
    if (hour < 10) {
      document.getElementById('showtimer').innerHTML = '0' + hour + ':' + min + ':0' + sec;
    }else{
       document.getElementById('showtimer').innerHTML = hour + ':' + min + ':0' + sec;
    }
  }  
} else {
    if (min < 10) {
      if (hour < 10) {
        document.getElementById('showtimer').innerHTML = '0' + hour + ':0' + min + ':' + sec;
      } else {
        document.getElementById('showtimer').innerHTML = hour + ':0' + min + ':' + sec;
      }
    }else {
        if (hour < 10) {
          document.getElementById('showtimer').innerHTML = '0' + hour + ':' + min + ':' + sec;
        }else {
            document.getElementById('showtimer').innerHTML = hour + ':' + min + ':' + sec;
          }
      }
  }
}

