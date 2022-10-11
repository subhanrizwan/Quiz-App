function join(){
  var main = document.getElementById("main-box")
  main.style.display="block"
  var main1 = document.getElementById("misbah")
  main1.style.display="none"
  }
  
  function javascript(){
  var ps = document.getElementById("quiz-app")
  ps.style.display="block"
  var js = document.getElementById("main-box")
  js.style.display="none"
  }

  var score = 0;

  function nextquest(){
    var ans_1 = document.getElementById('correct-ans1')
if(ans_1.checked){
  score++;
  console.log(score);
var seccard=document.getElementById('sec-card')
seccard.style.display="block"

var firstcard = document.getElementById('first-card')
firstcard.style.display="none"
}else if (ans_1 !== ans_1.checked){
  // score--;
  alert("yout score is" + " " + score )
var res=document.getElementById('sec-card')
   res.style.display="block"

   var firstcard = document.getElementById('first-card')
   firstcard.style.display="none"

}

  }

function nextquest2(){
  var ans_2 = document.getElementById('correct-ans2')

  if(ans_2.checked ){
    score++;
     console.log(score);

     var seccard=document.getElementById('third-card')
     seccard.style.display="block"

     var firstcard = document.getElementById('sec-card')
     firstcard.style.display="none"
  }else if (ans_2 !== ans_2.checked){
    // score--;
    alert("your score is" + " " + score )
  var res=document.getElementById('third-card')
     res.style.display="block"
 
     var firstcard = document.getElementById('sec-card')
     firstcard.style.display="none"

 }
} 

function nextquest3(){
  var ans_3 = document.getElementById('correct-ans3')
  if(ans_3.checked){
    score++;
    console.log(score);

     var seccard=document.getElementById('fourth-card')
     seccard.style.display="block"
 
     var firstcard = document.getElementById('third-card')
     firstcard.style.display="none"
 } else if (ans_3 !== ans_3.checked){
  // score--;
  alert("yout score is" + " " + score )
var res=document.getElementById('fourth-card')
   res.style.display="block"

   var firstcard = document.getElementById('third-card')
   firstcard.style.display="none"

}
  
} 

function submit(){
  var ans_4 = document.getElementById('correct-ans4')
  if(ans_4 === ans_4.checked){
    score++;
//     swal("Your Score is"+" " +score, {
//   buttons: ["Restart", "Ok"],
// }
alert("your score is" + score)
}else if(!ans_4.checked){
    alert("your score is" + score)
  }
}

    // alert("your score" + " " + score)
    // console.log(score);
    // var res=document.getElementById('result-box')
    // res.style.display="block"
    
    // var firstcard = document.getElementById('fourth-card')
    // firstcard.style.display="none"
  // }else if (ans_4 !== ans_4.checked){
  //   // score--;
  //   swal("Your Score is"+score, {
  //     buttons: ["Restart", "Ok"],
  //   });
  // var res=document.getElementById('result-box')
  //    res.style.display="block"
 
  //    var firstcard = document.getElementById('fourth-card')
  //    firstcard.style.display="none"

 
 


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