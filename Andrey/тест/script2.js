var questions =[
    {
      question: "Що таке фортнайт",
      answers:{
        1 : "комп'ютерна онлайн-гра, розроблена американською компанією Epic Games спільно з People Can Fly та випущена в ранній доступ у 2017 році",
        2 : 'шутер',
        3 : 'просто игра',
        4 : 'незнаю'
      },
      rightAnswer: '1'
    },
  
    {
      question: "Укажіть дату виходу 12 сезона",
      answers:{
        1 : '07.07.2020',
        2 : '22.10.2008',
        3 : '20.02.2020',
        4 : '15.02.2020'
      },
      rightAnswer: '3'
    },
  
    {
      question: "что такое 'крякнул' ",
      answers:{
        1 : 'так говорят когда убил другого игрока',
        2 : 'так говорят когда танцуют эмоцию',
        3 : 'так говорят когда убтлт с кирки',
        4 : 'так говорят когда снёc всю броню игроку'
      },
      rightAnswer: '4'
    },
  
    {
      question: "який секретный скин боевого пропуска был в 12 сезоне ",
      answers:{
        1 : 'Мидас',
        2 : 'Дед пул',
        3 : 'Мистер Мявускул',
        4 : 'Грёза'
      },
      rightAnswer: '2'
    },
  
    {
      question: "як называеться режим без стройки",
      answers:{
        1 : 'Королевская битва',
        2 : 'Нулевая высота',
        3 : 'Режим без стройки',
        4 : 'Паблик'
      },
      rightAnswer: '2'
    },
    {
      question: "як делаються 90 е ",
      answers:{
        1 : 'Стенка Стенка Лестница',
        2 : 'Стенка Стенка Пол',
        3 : 'Пол Стена Лестница',
        4 : 'Конус Пол Стена'
      },
      rightAnswer: '1'
    },
    {
      question: "який урон постройкам дает тяжелая снайперская винтовка ",
      answers:{
        1 : '100/400',
        2 : '760/765',
        3 : '1050/1100',
        4 : '387/567'
      },
      rightAnswer: '3'
    },
    {
      question: "як называют тяжелую снайперскую винтовку",
      answers:{
        1 : 'Снапа',
        2 : 'Баря',
        3 : 'Калаш',
        4 : 'Помпа'
      },
      rightAnswer: '2'
    },
    {
      question: "що таке палка",
      answers:{
        1 : 'Боевое Ружьё',
        2 : 'Тактический дробовик',
        3 : 'Обычно длинный, прямой кусок дерева, чаще всего ветка без листьев.',
        4 : 'Пистолет'
      },
      rightAnswer: '1'
    },
    {
      question: "На яком язике програмирования написан фортнайт",
      answers:{
        1 : 'Python',
        2 : 'Java',
        3 : 'C++',
        4 : 'C#'
      },
      rightAnswer: '3'
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
    if(rightAnswerNum <= 3){
     resultStr ="незадовільно";
      }else if(rightAnswerNum >3&&rightAnswerNum <=5){
       resultStr ="треба повторити";
      }else if(rightAnswerNum >5&&rightAnswerNum <=7 ){
        resultStr ="це вже не погано";
      }else if(rightAnswerNum >=8&&rightAnswerNum <10){
         resultStr ="МОЛОДЕЦЬ(Відмінно)";
    }else if(rightAnswerNum ==10){
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