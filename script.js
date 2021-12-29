console.log("you are now on the grid")

// all buttons need one click to toggle between flags. change all other functions to double click..

// have all bombs make you lose.

var modal = document.getElementById("myModal")
var openRules = document.getElementById("rules")
var closeRules = document.getElementById("closeModal")

openRules.onclick = function() {
    modal.style.display = "block";
}

closeRules.onclick = function() {
    modal.style.display = "none";
  }

//   OPEN USER MODAL

var sideModal = document.getElementById("rightModal")
var openSide = document.getElementById("userbutton")
var closeUser = document.getElementById("close-right-modal")

openSide.onclick = function() {
    sideModal.style.display = "block";
}

closeUser.onclick = function() {
    sideModal.style.display = "none";
  }



// window.onclick = function(event) {
//     if (event.target == modal) {
//     modal.style.display = "none";
//     }
//   }

//  YOU LOSE MODAL

var loseModal = document.getElementById("youLose")
var endGame = document.getElementsByClassName("bombButton")
for(var x=0;x<endGame.length;x++){
    endGame[x].ondblclick = function() {
        loseModal.style.display = "block";
    }
}

var plyAgn = document.getElementById("playAgain")

loseModal.onclick = function() {
    loseModal.style.display = "none";
}

// window.onclick = function(event) {
//     if (event.target == modal) {
//         loseModal.style.display = "none";
//     }
//   }


//   TIMER SCRIPT

document.getElementById('timer').innerHTML =
  05 + ":" + 30;
startTimer();


function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    return
  }
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
  
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

// FLAG FUNCTIONS FOR ALL SQUARES... use littlesquare class in loop


// works for one, but look into getting class from within id div.. or tag within id div like wordwindow id div and then just all buttons within that.

var addFlagAll = document.getElementsByClassName("littlesquare")

for(var x=0;x<addFlagAll.length;x++){
     addFlagAll[x].addEventListener('click', function(addFlagAll){
        //  console.log(addFlagAll)
        addFlagAll.target.classList.toggle("flag-on")
    })
}

// BOMB BUTTONS


const bombButton = document.getElementById("example-bomb")
bombButton.addEventListener("dblclick", function(mineBomb){
    document.getElementById("example-bomb").style.backgroundColor = "red";
     document.getElementById("example-bomb").innerHTML = '<img src="images/icons8-bomb-64.png"/>';
 })


const h1bomb = document.getElementById("h-1")
h1bomb.addEventListener("dblclick", function(mineBomb2){
    document.getElementById("h-1").style.backgroundColor = "red";
    document.getElementById("h-1").innerHTML = '<img src="images/icons8-bomb-64.png"/>';
})

const d2bomb = document.getElementById("d-2")
d2bomb.addEventListener("dblclick", function(mineBomb3)
{
    document.getElementById("d-2").style.backgroundColor = "red";
    document.getElementById("d-2").innerHTML = '<img src="images/icons8-bomb-64.png"/>';
})

const f2bomb = document.getElementById("f-2")
f2bomb.addEventListener("dblclick", function(mineBomb4){
    document.getElementById("f-2").style.backgroundColor = "red";
    document.getElementById("f-2").innerHTML = '<img src="images/icons8-bomb-64.png"/>';
})

const h2bomb = document.getElementById("h-2")
h2bomb.addEventListener("dblclick", function(mineBomb5){
    document.getElementById("h-2").style.backgroundColor = "red";
    document.getElementById("h-2").innerHTML = '<img src="images/icons8-bomb-64.png"/>';
})

const b3bomb = document.getElementById("b-3")
b3bomb.addEventListener("dblclick", function(mineBomb6){
    document.getElementById("b-3").style.backgroundColor = "red";
    document.getElementById("b-3").innerHTML = '<img src="images/icons8-bomb-64.png"/>';
})

const a4bomb = document.getElementById("a-4")
a4bomb.addEventListener("dblclick", function(mineBomb7){
    document.getElementById("a-4").style.backgroundColor = "red";
    document.getElementById("a-4").innerHTML = '<img src="images/icons8-bomb-64.png"/>';
})

const f4bomb = document.getElementById("f-4")
f4bomb.addEventListener("dblclick", function(mineBomb8){
    document.getElementById("f-4").style.backgroundColor = "red";
    document.getElementById("f-4").innerHTML = '<img src="images/icons8-bomb-64.png"/>';
})

const b6bomb = document.getElementById("b-6")
b6bomb.addEventListener("dblclick", function(mineBomb9){
    document.getElementById("b-6").style.backgroundColor = "red";
    document.getElementById("b-6").innerHTML = '<img src="images/icons8-bomb-64.png"/>';
})

const d6bomb = document.getElementById("d-6")
d6bomb.addEventListener("dblclick", function(mineBomb10){
    document.getElementById("d-6").style.backgroundColor = "red";
    document.getElementById("d-6").innerHTML = '<img src="images/icons8-bomb-64.png"/>';
})

const g7bomb = document.getElementById("g-7")
g7bomb.addEventListener("dblclick", function(mineBomb10){
    document.getElementById("g-7").style.backgroundColor = "red";
    document.getElementById("g-7").innerHTML = '<img src="images/icons8-bomb-64.png"/>';
})

const c8bomb = document.getElementById("c-8")
c8bomb.addEventListener("dblclick", function(mineBomb10){
    document.getElementById("c-8").style.backgroundColor = "red";
    document.getElementById("c-8").innerHTML = '<img src="images/icons8-bomb-64.png"/>';
})

const e8bomb = document.getElementById("e-8")
e8bomb.addEventListener("dblclick", function(mineBomb10){
    document.getElementById("e-8").style.backgroundColor = "red";
    document.getElementById("e-8").innerHTML = '<img src="images/icons8-bomb-64.png"/>';
})

// GRID NUMBERED BUTTONS BELOW



const b1 = document.getElementById("b-1")
b1.addEventListener("dblclick", function(flipover){
    document.getElementById("b-1").style.backgroundColor = "#707070";
    document.getElementById("b-1").innerHTML = "1";
    document.getElementById("b-1").style.color = "blue";
    document.getElementById("b-1").style.fontSize = "larger";
})

const c1 = document.getElementById("c-1")
c1.addEventListener("dblclick", function(flipover1){
    document.getElementById("c-1").style.backgroundColor = "#707070";
    document.getElementById("c-1").innerHTML = "1";
    document.getElementById("c-1").style.color = "blue";
    document.getElementById("c-1").style.fontSize = "larger";

})

const d1 = document.getElementById("d-1")

d1.addEventListener("dblclick", function(flipover2){
    document.getElementById("d-1").style.backgroundColor = "#707070";
    document.getElementById("d-1").innerHTML = "1";
    document.getElementById("d-1").style.color = "blue";
    document.getElementById("d-1").style.fontSize = "larger";

})

const e1 = document.getElementById("e-1")

e1.addEventListener("dblclick", function(flipover){
    document.getElementById("e-1").style.backgroundColor = "#707070";
    document.getElementById("e-1").innerHTML = "2";
    document.getElementById("e-1").style.color = "#29dd56";
    document.getElementById("e-1").style.fontSize = "larger";
})

const f1 = document.getElementById("f-1")
f1.addEventListener("dblclick", function(flipover){
    document.getElementById("f-1").style.backgroundColor = "#707070";
    document.getElementById("f-1").innerHTML = "1";
    document.getElementById("f-1").style.color = "blue";
    document.getElementById("f-1").style.fontSize = "larger";
})

const g1 = document.getElementById("g-1")
g1.addEventListener("dblclick", function(flipover){
    document.getElementById("g-1").style.backgroundColor = "#707070";
    document.getElementById("g-1").innerHTML = "3";
    document.getElementById("g-1").style.color = "red";
    document.getElementById("g-1").style.fontSize = "larger";
})

const a2 = document.getElementById("a-2")
a2.addEventListener("dblclick", function(flipover){
    document.getElementById("a-2").style.backgroundColor = "#707070";
    document.getElementById("a-2").innerHTML = "2";
    document.getElementById("a-2").style.color = "#29dd56";
    document.getElementById("a-2").style.fontSize = "larger";
})

const b2 = document.getElementById("b-2")
b2.addEventListener("dblclick", function(flipover){
    document.getElementById("b-2").style.backgroundColor = "#707070";
    document.getElementById("b-2").innerHTML = "2";
    document.getElementById("b-2").style.color = "#29dd56";
    document.getElementById("b-2").style.fontSize = "larger";
})

const c2 = document.getElementById("c-2")
c2.addEventListener("dblclick", function(flipover){
    document.getElementById("c-2").style.backgroundColor = "#707070";
    document.getElementById("c-2").innerHTML = "2";
    document.getElementById("c-2").style.color = "#29dd56";
    document.getElementById("c-2").style.fontSize = "larger";
})

const e2 = document.getElementById("e-2")
e2.addEventListener("dblclick", function(flipover){
    document.getElementById("e-2").style.backgroundColor = "#707070";
    document.getElementById("e-2").innerHTML = "2";
    document.getElementById("e-2").style.color = "#29dd56";
    document.getElementById("e-2").style.fontSize = "larger";
})

const g2 = document.getElementById("g-2")
g2.addEventListener("dblclick", function(flipover){
    document.getElementById("g-2").style.backgroundColor = "#707070";
    document.getElementById("g-2").innerHTML = "3";
    document.getElementById("g-2").style.color = "red";
    document.getElementById("g-2").style.fontSize = "larger";
})

// LINE 3

const a3 = document.getElementById("a-3")
a3.addEventListener("dblclick", function(flipover){
    document.getElementById("a-3").style.backgroundColor = "#707070";
    document.getElementById("a-3").innerHTML = "2";
    document.getElementById("a-3").style.color = "#29dd56";
    document.getElementById("a-3").style.fontSize = "larger";
})

const c3 = document.getElementById("c-3")
c3.addEventListener("dblclick", function(flipover){
    document.getElementById("c-3").style.backgroundColor = "#707070";
    document.getElementById("c-3").innerHTML = "2";
    document.getElementById("c-3").style.color = "#29dd56";
    document.getElementById("c-3").style.fontSize = "larger";
})

const d3 = document.getElementById("d-3")
d3.addEventListener("dblclick", function(flipover){
    document.getElementById("d-3").style.backgroundColor = "#707070";
    document.getElementById("d-3").innerHTML = "1";
    document.getElementById("d-3").style.color = "blue";
    document.getElementById("d-3").style.fontSize = "larger";
})

const e3 = document.getElementById("e-3")
e3.addEventListener("dblclick", function(flipover){
    document.getElementById("e-3").style.backgroundColor = "#707070";
    document.getElementById("e-3").innerHTML = "3";
    document.getElementById("e-3").style.color = "red";
    document.getElementById("e-3").style.fontSize = "larger";
})

const f3 = document.getElementById("f-3")
f3.addEventListener("dblclick", function(flipover){
    document.getElementById("f-3").style.backgroundColor = "#707070";
    document.getElementById("f-3").innerHTML = "2";
    document.getElementById("f-3").style.color = "#29dd56";
    document.getElementById("f-3").style.fontSize = "larger";
})

const g3 = document.getElementById("g-3")
g3.addEventListener("dblclick", function(flipover){
    document.getElementById("g-3").style.backgroundColor = "#707070";
    document.getElementById("g-3").innerHTML = "3";
    document.getElementById("g-3").style.color = "red";
    document.getElementById("g-3").style.fontSize = "larger";
})

const h3 = document.getElementById("h-3")
h3.addEventListener("dblclick", function(flipover){
    document.getElementById("h-3").style.backgroundColor = "#707070";
    document.getElementById("h-3").innerHTML = "1";
    document.getElementById("h-3").style.color = "blue";
    document.getElementById("h-3").style.fontSize = "larger";
})

// LINE 4

const b4 = document.getElementById("b-4")
b4.addEventListener("dblclick", function(flipover){
    document.getElementById("b-4").style.backgroundColor = "#707070";
    document.getElementById("b-4").innerHTML = "2";
    document.getElementById("b-4").style.color = "#29dd56";
    document.getElementById("b-4").style.fontSize = "larger";
})

const c4 = document.getElementById("c-4")
c4.addEventListener("dblclick", function(flipover){
    document.getElementById("c-4").style.backgroundColor = "#707070";
    document.getElementById("c-4").innerHTML = "1";
    document.getElementById("c-4").style.color = "blue";
    document.getElementById("c-4").style.fontSize = "larger";
})

// blank square will open with any surrounding button
const d4 = document.getElementById("d-4")
d4.addEventListener("dblclick", function(flipover){
    document.getElementById("d-4").style.backgroundColor = "#929292";
})

const e4 = document.getElementById("e-4")
e4.addEventListener("dblclick", function(flipover){
    document.getElementById("e-4").style.backgroundColor = "#707070";
    document.getElementById("e-4").innerHTML = "1";
    document.getElementById("e-4").style.color = "blue";
    document.getElementById("e-4").style.fontSize = "larger";
})

const g4 = document.getElementById("g-4")
g4.addEventListener("dblclick", function(flipover){
    document.getElementById("g-4").style.backgroundColor = "#707070";
    document.getElementById("g-4").innerHTML = "1";
    document.getElementById("g-4").style.color = "blue";
    document.getElementById("g-4").style.fontSize = "larger";
})

// blank square below
const h4 = document.getElementById("h-4")
h4.addEventListener("dblclick", function(flipover){
    document.getElementById("h-4").style.backgroundColor = "#929292";
})


// LINE 5 

const a5 = document.getElementById("a-5")
a5.addEventListener("dblclick", function(flipover){
    document.getElementById("a-5").style.backgroundColor = "#707070";
    document.getElementById("a-5").innerHTML = "2";
    document.getElementById("a-5").style.color = "#29dd56";
    document.getElementById("a-5").style.fontSize = "larger";
})

const b5 = document.getElementById("b-5")
b5.addEventListener("dblclick", function(flipover){
    document.getElementById("b-5").style.backgroundColor = "#707070";
    document.getElementById("b-5").innerHTML = "2";
    document.getElementById("b-5").style.color = "#29dd56";
    document.getElementById("b-5").style.fontSize = "larger";
})

const c5 = document.getElementById("c-5")
c5.addEventListener("dblclick", function(flipover){
    document.getElementById("c-5").style.backgroundColor = "#707070";
    document.getElementById("c-5").innerHTML = "2";
    document.getElementById("c-5").style.color = "#29dd56";
    document.getElementById("c-5").style.fontSize = "larger";
})

const d5 = document.getElementById("d-5")
d5.addEventListener("dblclick", function(flipover){
    document.getElementById("d-5").style.backgroundColor = "#707070";
    document.getElementById("d-5").innerHTML = "1";
    document.getElementById("d-5").style.color = "blue";
    document.getElementById("d-5").style.fontSize = "larger";
})

const e5 = document.getElementById("e-5")
e5.addEventListener("dblclick", function(flipover){
    document.getElementById("e-5").style.backgroundColor = "#707070";
    document.getElementById("e-5").innerHTML = "2";
    document.getElementById("e-5").style.color = "#29dd56";
    document.getElementById("e-5").style.fontSize = "larger";
})

const f5 = document.getElementById("f-5")
f5.addEventListener("dblclick", function(flipover){
    document.getElementById("f-5").style.backgroundColor = "#707070";
    document.getElementById("f-5").innerHTML = "1";
    document.getElementById("f-5").style.color = "blue";
    document.getElementById("f-5").style.fontSize = "larger";
})

const g5 = document.getElementById("g-5")
g5.addEventListener("dblclick", function(flipover){
    document.getElementById("g-5").style.backgroundColor = "#707070";
    document.getElementById("g-5").innerHTML = "1";
    document.getElementById("g-5").style.color = "blue";
    document.getElementById("g-5").style.fontSize = "larger";
})

// blank 
const h5 = document.getElementById("h-5")
h5.addEventListener("dblclick", function(flipover){
    document.getElementById("h-5").style.backgroundColor = "#929292";
})

// LINE 6

const a6 = document.getElementById("a-6")
a6.addEventListener("dblclick", function(flipover){
    document.getElementById("a-6").style.backgroundColor = "#707070";
    document.getElementById("a-6").innerHTML = "1";
    document.getElementById("a-6").style.color = "blue";
    document.getElementById("a-6").style.fontSize = "larger";
})

const c6 = document.getElementById("c-6")
c6.addEventListener("dblclick", function(flipover){
    document.getElementById("c-6").style.backgroundColor = "#707070";
    document.getElementById("c-6").innerHTML = "2";
    document.getElementById("c-6").style.color = "#29dd56";
    document.getElementById("c-6").style.fontSize = "larger";
})


const e6 = document.getElementById("e-6")
e6.addEventListener("dblclick", function(flipover){
    document.getElementById("e-6").style.backgroundColor = "#707070";
    document.getElementById("e-6").innerHTML = "1";
    document.getElementById("e-6").style.color = "blue";
    document.getElementById("e-6").style.fontSize = "larger";
})

const f6 = document.getElementById("f-6")
f6.addEventListener("dblclick", function(flipover){
    document.getElementById("f-6").style.backgroundColor = "#707070";
    document.getElementById("f-6").innerHTML = "1";
    document.getElementById("f-6").style.color = "blue";
    document.getElementById("f-6").style.fontSize = "larger";
})

const g6 = document.getElementById("g-6")
g6.addEventListener("dblclick", function(flipover){
    document.getElementById("g-6").style.backgroundColor = "#707070";
    document.getElementById("g-6").innerHTML = "1";
    document.getElementById("g-6").style.color = "blue";
    document.getElementById("g-6").style.fontSize = "larger";
})

const h6 = document.getElementById("h-6")
h6.addEventListener("dblclick", function(flipover){
    document.getElementById("h-6").style.backgroundColor = "#707070";
    document.getElementById("h-6").innerHTML = "1";
    document.getElementById("h-6").style.color = "blue";
    document.getElementById("h-6").style.fontSize = "larger";
})

//  LINE 7

const a7 = document.getElementById("a-7")
a7.addEventListener("dblclick", function(flipover){
    document.getElementById("a-7").style.backgroundColor = "#707070";
    document.getElementById("a-7").innerHTML = "1";
    document.getElementById("a-7").style.color = "blue";
    document.getElementById("a-7").style.fontSize = "larger";
})

const b7 = document.getElementById("b-7")
b7.addEventListener("dblclick", function(flipover){
    document.getElementById("b-7").style.backgroundColor = "#707070";
    document.getElementById("b-7").innerHTML = "2";
    document.getElementById("b-7").style.color = "#29dd56";
    document.getElementById("b-7").style.fontSize = "larger";
})

const c7 = document.getElementById("c-7")
c7.addEventListener("dblclick", function(flipover){
    document.getElementById("c-7").style.backgroundColor = "#707070";
    document.getElementById("c-7").innerHTML = "3";
    document.getElementById("c-7").style.color = "red";
    document.getElementById("c-7").style.fontSize = "larger";
})

const d7 = document.getElementById("d-7")
d7.addEventListener("dblclick", function(flipover){
    document.getElementById("d-7").style.backgroundColor = "#707070";
    document.getElementById("d-7").innerHTML = "3";
    document.getElementById("d-7").style.color = "red";
    document.getElementById("d-7").style.fontSize = "larger";
})

const e7 = document.getElementById("e-7")
e7.addEventListener("dblclick", function(flipover){
    document.getElementById("e-7").style.backgroundColor = "#707070";
    document.getElementById("e-7").innerHTML = "2";
    document.getElementById("e-7").style.color = "#29dd56";
    document.getElementById("e-7").style.fontSize = "larger";
})

const f7 = document.getElementById("f-7")
f7.addEventListener("dblclick", function(flipover){
    document.getElementById("f-7").style.backgroundColor = "#707070";
    document.getElementById("f-7").innerHTML = "2";
    document.getElementById("f-7").style.color = "#29dd56";
    document.getElementById("f-7").style.fontSize = "larger";
})

const h7 = document.getElementById("h-7")
h7.addEventListener("dblclick", function(flipover){
    document.getElementById("h-7").style.backgroundColor = "#707070";
    document.getElementById("h-7").innerHTML = "1";
    document.getElementById("h-7").style.color = "blue";
    document.getElementById("h-7").style.fontSize = "larger";
})

// LINE 8

// blank below a8

const a8 = document.getElementById("a-8")
a8.addEventListener("dblclick", function(flipover){
    document.getElementById("a-8").style.backgroundColor = "#929292";
})

const b8 = document.getElementById("b-8")
b8.addEventListener("dblclick", function(flipover){
    document.getElementById("b-8").style.backgroundColor = "#707070";
    document.getElementById("b-8").innerHTML = "1";
    document.getElementById("b-8").style.color = "blue";
    document.getElementById("b-8").style.fontSize = "larger";
})

const d8 = document.getElementById("d-8")
d8.addEventListener("dblclick", function(flipover){
    document.getElementById("d-8").style.backgroundColor = "#707070";
    document.getElementById("d-8").innerHTML = "2";
    document.getElementById("d-8").style.color = "#29dd56";
    document.getElementById("d-8").style.fontSize = "larger";
})


const f8 = document.getElementById("f-8")
f8.addEventListener("dblclick", function(flipover){
    document.getElementById("f-8").style.backgroundColor = "#707070";
    document.getElementById("f-8").innerHTML = "2";
    document.getElementById("f-8").style.color = "#29dd56";
    document.getElementById("f-8").style.fontSize = "larger";
})

const g8 = document.getElementById("g-8")
g8.addEventListener("dblclick", function(flipover){
    document.getElementById("g-8").style.backgroundColor = "#707070";
    document.getElementById("g-8").innerHTML = "1";
    document.getElementById("g-8").style.color = "blue";
    document.getElementById("g-8").style.fontSize = "larger";
})

// blank square

const h8 = document.getElementById("h-8")
h8.addEventListener("dblclick", function(flipover){
    document.getElementById("h-8").style.backgroundColor = "#929292";
})

// modal to end game that rests when presses any bombs, rules got it button to start timer .. model 

// 

var wnmodal = document.getElementById("youWon");
// var btn = document.getElementById("b-1");
var tyAgn = document.getElementById("tryAgain");

// btn.onclick = function() {
//     wnmodal.style.display = "block";

var score = 0;
var btn = document.getElementsByClassName("win-button");
for(var x=0;x<btn.length;x++) {
btn[x].ondblclick = function () {
    score +=1;  
    if (score === 3) {
        wnmodal.style.display = "block"
    } else {
        wnmodal.style.display = "none";
    }
}
}

tyAgn.onclick = function() {
    wnmodal.style.display = "none";
    window.location.reload()
}
