var questions = [
    {
        question: "Всесвітній день ліні",
        answers: {
            1: '20 серпня',
            2: '1 січня',
            3: '23 липня',
            4: '1 вересня',
        },
        rightAnswer: '1'
    },
    {
        question: "Яка картина не відноситься до імпресіонізму",
        answers: {
            1: 'Враження. Схід сонця',
            2: 'Зоряна ніч',
            3: 'Жінка з парасолькою',
            4: 'Блакитні танцівниці',
        },
        rightAnswer: '2'
    },
    {
        question: "Кількість незалежних країн у світі",
        answers: {
            1: '252',
            2: '195',
            3: '194 + болото',
            4: '236',
        },
        rightAnswer: '3'
    },
    {
        question: "Яка тригонометрична функція приймає найменше значення, якщо x = π + 2πn, nєz",
        answers: {
            1: 'y=sinx',
            2: 'y=cosx',
            3: 'y=tgx',
            4: 'y=ctgx',
        },
        rightAnswer: '2'
    },
    {
        question: "Напій яким зловживали (були звинувачені в зловживанні) художники XIX століття",
        answers: {
            1: 'Лікер',
            2: 'Ром',
            3: 'Абсент',
            4: 'Віскі',
        },
        rightAnswer: '3'
    },
    {
        question: "Яка з наведених значень тригонометричних функцій найменша",
        answers: {
            1: 'cos1',
            2: 'sin2',
            3: 'cos4',
            4: 'sin3',
        },
        rightAnswer: '3'
    },
    {
        question: "Кількість фільмів у кіновсесвіті Марвел (база)",
        answers: {
            1: '30',
            2: '28',
            3: '33',
            4: '25',
        },
        rightAnswer: '1'
    },
    {
        question: "Художник - вбивця",
        answers: {
            1: 'Леонардо да Вінчі',
            2: 'Мікеланджело да Караваджо',
            3: 'Ежен Делакруа',
            4: 'Вінсент ван Гог',
        },
        rightAnswer: '2'
    },
    {
        question: "Яке з тверджень не належить до основних положень МКТ(молекуляно-кінетична теорія)",
        answers: {
            1: 'Усі речовини складаються з частинок(атомівб молекулб йонів)',
            2: 'Розміри і маса молекул речовини дуже малі',
            3: 'Частинки речовини перебувають у невпинному безладному русі',
            4: 'Частинки взаємодіють одна з одною',
        },
        rightAnswer: '2'
    },
    {
        question: "Найкраща піца (із представлених)",
        answers: {
            1: 'Маргарита',
            2: 'Пепероні',
            3: 'Гавайська',
            4: 'Неаполітанська',
        },
        rightAnswer: '3'
    },

];


var testContainer = document.getElementById('test');
var resultButton = document.getElementById("resultButton");
var resultsConteiner = document.getElementById("results");

generateTest(questions, testContainer, resultButton, resultsConteiner);

function generateTest(questions, testContainer, resultButton, resultsConteiner){
    
    function showQuestions(questions, testContainer){
        var out = [];
        var answer;

        for(var i=0; i<questions.length;i++){
            answers = [];
            for(var ans_text in questions[i].answers){
                answers.push(
                    '<label><br><input type ="radio" name="question'+i+'" value="'+ans_text+'">'+ans_text+') '+questions[i].answers[ans_text]+'</label>'
                );
            }
            out.push(
                '<div class="question">'+questions[i].question+'</div>'+'<div class="answers">'+answers.join('')+'</div>'
            );
        }
        testContainer.innerHTML = out.join('');
    }


    function showResults(questions, testContainer, resultsConteiner) {
        var answerConteiners = testContainer.querySelectorAll('.answers');
    
        var userAnswer = '';
        var rightAnswerNum = 0;
    
        for (var i = 0; i < questions.length; i++) {
          userAnswer = (answerConteiners[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
    
          if (userAnswer == questions[i].rightAnswer) {
            answerConteiners[i].style.color = 'green';
            rightAnswerNum++;
          } else {
            answerConteiners[i].style.color = 'red';
          }
        }
        var resultsString

        if(rightAnswerNum<5){
            resultsString = "fail";
        }else if (rightAnswerNum>=5 && rightAnswerNum<8){
            resultsString = "might be better";
        }else if (rightAnswerNum>=8 && rightAnswerNum<10){
            resultsString = "good";
        }else if (rightAnswerNum == 10){
            resultsString = "perfect";
        }

        resultsConteiner.innerHTML = resultsString;
    }


    showQuestions(questions, testContainer);
    
    resultButton.onclick = function() {
        showResults(questions, testContainer, resultsConteiner);
    }
    
}
