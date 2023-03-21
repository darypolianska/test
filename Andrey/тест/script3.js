var questions =[
    {
      question: "Що таке int",
      answers:{
        1 : 'тип данних',
        2 : 'массив',
        3 : 'язик програмирования',
        4 : 'незнаю'
      },
      rightAnswer: '1'
    },
  
    {
      question: "Укажіть оператор равно",
      answers:{
        1 : '>',
        2 : '=',
        3 : '==',
        4 : '<'
      },
      rightAnswer: '3'
    },
  
    {
      question: "Що таке JVM ",
      answers:{
        1 : 'Java Runtime Environment',
        2 : 'Java Development Kit',
        3 : 'Незнаю',
        4 : 'Java Virtual Machine'
      },
      rightAnswer: '4'
    },
  
    {
      question: "Хто створив Java",
      answers:{
        1 : 'Линус Торвальдс',
        2 : 'Джеймс Гослинг',
        3 : 'Дональд Мастард',
        4 : 'Бьёрн Страуструп'
      },
      rightAnswer: '2'
    },
  
    {
      question: "Що таке массив",
      answers:{
        1 : 'це сукупність команд, що дозволяє виконати деяку операцію у програмі',
        2 : 'це структура даних, яка зберігає набір пронумерованих значень одного типу',
        3 : 'це контейнер, в якому може зберігатися деяке значення даних для подальшого використання у програмі',
        4 : 'одна з найпопулярніших і широко використовуваних мов програмування'
      },
      rightAnswer: '2'
    },
    {
      question: "Що таке обьект",
      answers:{
        1 : "це область пам'яті, яка містить змінні, оголошені у класі",
        2 : 'це змінна, опис якої створює програміст під час створення класу',
        3 : 'це приховування реалізації класу та відокремлення його внутрішнього уявлення від зовнішнього інтерфейсу',
        4 : "це спеціальний метод, який використовується для ініціалізації об'єктів"
      },
      rightAnswer: '1'
    },
    {
      question: "Що таке конструктор",
      answers:{
        1 : 'це кодове слово, яке використовується для успадкування властивостей класу',
        2 : "використовуватись усередині будь-якого методу для посилання на поточний об'єкт",
        3 : "це спеціальний метод, який використовується для ініціалізації об'єктів",
        4 : 'перенавантаження методу'
      },
      rightAnswer: '3'
    },
    {
      question: "Що таке Наследование",
      answers:{
        1 : 'суперклас, тобто клас, похідним від якого є поточний клас',
        2 : 'це механізм, який дозволяє створювати класи на основі інших класів',
        3 : 'незнаю',
        4 : 'це сукупність команд, що дозволяє виконати деяку операцію у програмі'
      },
      rightAnswer: '2'
    },
    {
      question: "Який діапазон int",
      answers:{
        1 : '-214748364 до 2147483647',
        2 : '-128 до 127',
        3 : '-9223372036854775808 до +9223372036854775807',
        4 : '0 до 65536'
      },
      rightAnswer: '1'
    },
    {
      question: "Оператор &&",
      answers:{
        1 : 'оператор множення',
        2 : 'логічний або Повертає істину, якщо одне із тверджень вірне',
        3 : 'повертає true, якщо ліворуч і праворуч від нього стоять значення true, а інакше — false',
        4 : 'оператор Розподіл по модулю'
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