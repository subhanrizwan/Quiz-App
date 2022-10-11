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

}




