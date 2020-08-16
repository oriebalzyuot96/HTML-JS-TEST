
//2  player computer and player
//handle casses for win ,lose ,equal by compare 2 result 
//make reseet fubction to start again if i have time 
//i know design is important but it need more time 

const out = ['scissors', 'paper', 'rock'];

// Player & Computer Score Element

var playerScore   = document.getElementById('playerResult');
 var  computerScore = document.getElementById('computerResult');

// Player & Computer Score Element

var playerplay = document.getElementById('player-play');
  var  computerplay = document.getElementById('computer-play');

// game Element

var game = document.getElementsByClassName('start');

    for( var i=0; i < game.length; i++ ){
     
      document.getElementsByClassName('start')[i].addEventListener('click', function(){
        console.log(this.getAttribute('p2'));

     
        var player = this.getAttribute('p2');

        var comp = getcomp();

        if(player === comp){

          computerResultFunc(comp);
          playerResult(player);
          output();

        }else if(player ==='scissors'){
          if(comp === 'paper'){

            playerWin();
            computerResultFunc('paper');

          }else{

            computerWin();
            computerResultFunc('rock');
          }

          playerResult('scissors');

        }else if(player === 'paper'){
          if(comp === 'scissors'){

            computerWin();
            computerResultFunc('scissors');

          }else{

            playerWin();
            computerResultFunc('rock');

          }

          playerResult('paper');

        }else if (player === 'rock') {
          if(comp === 'scissors'){

            playerWin();
            computerResultFunc('scissors');

          }else{

            computerWin();
            computerResultFunc('paper');

          }

          playerResult('rock');

        }

      });
    }


// Get Computer play result to compare with player result 

function getcomp(){
return out[Math.floor( Math.random() * out.length )];
}

// show Player & Computer play

function playerResult(play){
  playerplay.innerHTML =  play;
}

function computerResultFunc(play){
  computerplay.innerHTML = play ;
}

// The winner

function playerWin(){
var newScore = parseInt(playerScore.textContent) + 1;
playerScore.innerText = newScore ;

output('win');
}

function computerWin(){
var newScore = parseInt(computerScore.textContent) + 1;
computerScore.innerText = newScore ;

output('lose');
}

// Masseage

function output(msg){
var messageDiv = document.createElement('div');
    messageDiv.setAttribute('id', 'message');
    messageDiv.setAttribute('class', 'message')

var message = document.getElementById('message');

if(message === null )
  document.getElementById('p1').appendChild(messageDiv);

if(msg === 'win'){
  document.getElementById('message').innerHTML = '<h2>You win</h2>';
  // document.getElementById('p1').appendChild(messageDiv);
}else if (msg === 'lose'){
  document.getElementById('message').innerHTML = '<h2>You lose</h2>';


}
//need time to refactor equal possible 
// else if (msg === 'equal'){
//   document.getElementById('message').innerHTML = '<h2>the same</h2>';


// }

}


