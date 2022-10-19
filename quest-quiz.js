function join() {
  var main = document.getElementById("main-box")
  main.style.display = "block"
  var main1 = document.getElementById("misbah")
  main1.style.display = "none"
}

function javascript() {
  var ps = document.getElementById("quiz-app")
  ps.style.display = "block"
  var js = document.getElementById("main-box")
  js.style.display = "none"
}

var score = 0;

function nextquest() {
  var ans_1 = document.getElementById('correct-ans1')
  if (ans_1.checked) {
    score++;
    console.log(score);
    var seccard = document.getElementById('sec-card')
    seccard.style.display = "block"

    var firstcard = document.getElementById('first-card')
    firstcard.style.display = "none"
  } else if (ans_1 !== ans_1.checked) {
    // score--;
    alert("yout score is" + " " + score)
    var res = document.getElementById('sec-card')
    res.style.display = "block"

    var firstcard = document.getElementById('first-card')
    firstcard.style.display = "none"

  }

}

function nextquest2() {
  var ans_2 = document.getElementById('correct-ans2')

  if (ans_2.checked) {
    score++;
    console.log(score);

    var seccard = document.getElementById('third-card')
    seccard.style.display = "block"

<<<<<<< HEAD
    var firstcard = document.getElementById('sec-card')
    firstcard.style.display = "none"
  } else if (ans_2 !== ans_2.checked) {
    // score--;
    alert("your score is" + " " + score)
    var res = document.getElementById('third-card')
    res.style.display = "block"

    var firstcard = document.getElementById('sec-card')
    firstcard.style.display = "none"

  }
}

function nextquest3() {
  var ans_3 = document.getElementById('correct-ans3')
  if (ans_3.checked) {
    score++;
    console.log(score);

    var seccard = document.getElementById('fourth-card')
    seccard.style.display = "block"

    var firstcard = document.getElementById('third-card')
    firstcard.style.display = "none"
  } else if (ans_3 !== ans_3.checked) {
    // score--;
    alert("yout score is" + " " + score)
    var firstcard = document.getElementById('third-card')
    firstcard.style.display = "none"


    var res = document.getElementById('fourth-card')
    res.style.display = "block"

   
  }

}
function last_quest() {
  var ans4 = document.getElementById('correct-ans4')
  if (ans4.checked) {
    score++;
    console.log(score);
    //     swal("Your Score is"+" " +score, {
    //   buttons: ["Restart", "Ok"],
    // }
    alert("yout score is" + " " + score)
    
  } else if (!ans4.checked) {
    alert("your score is" + score)
  }
=======
   var firstcard = document.getElementById('third-card')
   firstcard.style.display="none"

}
  
} 

function submit(){
  var ans4 = document.getElementById('correct-ans4')
  if( ans4.checked){
    score++;
    alert("Your Score is"+" " +score, {
  buttons: ["Restart",javascript(), "Ok"],
});

    // alert("your score" + " " + score)
    // console.log(score);
    // var res=document.getElementById('result-box')
    // res.style.display="block"
    
    // var firstcard = document.getElementById('fourth-card')
    // firstcard.style.display="none"
  } else if (! ans4.checked){
    // score--;
    alert("Your Score is"+score, {
      buttons: ["Restart", "Ok"],
    });
  // var res=document.getElementById('result-box')
  //    res.style.display="block"
 
  //    var firstcard = document.getElementById('fourth-card')
  //    firstcard.style.display="none"
>>>>>>> 21adda83433e63f908f4c4ae8386a7b72ce3ddc2

}




<<<<<<< HEAD
=======
// },
// {
//     question : "hel",
// answer :  "han",
// selects:[
//     "ahmed",
//     "subhan",
//     "ahmed",
//     "subham",
//   ]
// },
// {
//     question : "hello",
// answer :  "han",
// selects:[
//     "subham",
//     "subhan",
//     "ahmed",
//     "aaaaaa"
//   ]
// }
// ]

// function  showQues(e){
//     var quest = document.getElementById("showquestion");
//     quest.innerHTML = allquestions[e].question;

//     // show answer

//     var ans = document.getElementsByClassName("opt");
// for(var i=0; i < ans.length; i++){
// ans[i].innerHTML = allquestions[e].selects[i]
// }
// }

// var count = 0;

// function nextbtn(){
// count++;
// showQues(count);
// }
// const quizData = [
//   {
//       question: "Which language runs in a web browser?",
//       a: "Java",
//       b: "C",
//       c: "Python",
//       d: "javascript",
//       correct: "d",
//   },
//   {
//       question: "What does CSS stand for?",
//       a: "Central Style Sheets",
//       b: "Cascading Style Sheets",
//       c: "Cascading Simple Sheets",
//       d: "Cars SUVs Sailboats",
//       correct: "b",
//   },
//   {
//       question: "What does HTML stand for?",
//       a: "Hypertext Markup Language",
//       b: "Hypertext Markdown Language",
//       c: "Hyperloop Machine Language",
//       d: "Helicopters Terminals Motorboats Lamborginis",
//       correct: "a",
//   },
//   {
//       question: "What year was JavaScript launched?",
//       a: "1996",
//       b: "1995",
//       c: "1994",
//       d: "none of the above",
//       correct: "b",
//   },


// ];

// const quiz= document.getElementById('quiz-cont')
// const answerEls = document.querySelectorAll('.ans')
// const questionEl = document.getElementById('question')
// const a_text = document.getElementById('a_text')
// const b_text = document.getElementById('b_text')
// const c_text = document.getElementById('c_text')
// const d_text = document.getElementById('d_text')
// const submitBtn = document.getElementById('submit')


// let currentQuiz = 0
// let score = 0

// loadQuiz()

// function loadQuiz() {

//   deselectAnswers()

//   const currentQuizData = quizData[currentQuiz]

//   questionEl.innerText = currentQuizData.question
//   a_text.innerText = currentQuizData.a
//   b_text.innerText = currentQuizData.b
//   c_text.innerText = currentQuizData.c
//   d_text.innerText = currentQuizData.d
// }

// function deselectAnswers() {
//   answerEls.forEach(answerEl => answerEl.checked = false)
// }

// function getSelected() {
//   let answer
//   answerEls.forEach(answerEl => {
//       if(answerEl.checked) {
//           answer = answerEl.id
//       }
//   })
//   return answer
// }


// submitBtn.addEventListener('click', () => {
//   const answer = getSelected()
//   if(answer) {
//      if(answer === quizData[currentQuiz].correct) {
//          score++
//      }

//      currentQuiz++

//      if(currentQuiz < quizData.length) {
//          loadQuiz()
//      } else {
//          quiz.innerHTML = `
//          <h2>You answered ${score}/${quizData.length} questions correctly</h2>

//          <button onclick="location.reload()">Reload</button>
//          `
//      }
//   }
// })
>>>>>>> 21adda83433e63f908f4c4ae8386a7b72ce3ddc2
