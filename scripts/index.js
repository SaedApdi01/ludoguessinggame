const playBTN = document.querySelector('.play-btn');
const youScore = document.querySelector('.scores'); 
const abdulscore = document.querySelector('.abdulscore'); 
const ludoIMG = document.querySelector('.ludo-img'); 
const diceSound = document.getElementById('diceAudio'); 
const gamesound = document.getElementById('myAudio'); 
const resultMessege = document.querySelector('.result'); 
const gameContainer = document.querySelector('.ludo-container'); 
const reset = document.querySelector('.reset')

let score =  JSON.parse(localStorage.getItem('score')) || 0 ; 
let odayabdulscore =  JSON.parse(localStorage.getItem('odayabdulscore')) || 0 ; 

function updateStorage(){
  localStorage.setItem('score' ,JSON.stringify(score)); 
  localStorage.setItem('odayabdulscore' , JSON.stringify(odayabdulscore))
}

function scoreMessege(){
  youScore.textContent = `${score}💯`;
  abdulscore.textContent =  `${odayabdulscore}💯` 
}
scoreMessege()

function guessLudo(){
    playBTN.addEventListener('click' , function(){
        diceSound.src = `music/dicerolling.mp3` ;
        const odayAbdulNumber = Math.trunc(Math.random() * 6) +1 ; 
        const randomLudo = Math.trunc(Math.random() * 6) +1 ; 
        ludoIMG.src = `ludos/dice-${randomLudo}.png`; 
        gamesound.src = 'music/ludomusic.mp3'; 
      
        if(randomLudo === odayAbdulNumber){
          score += 4;  
          youScore.textContent = `${score}💯`;
          resultMessege.textContent = "Congratulations! You guessed the number✅"
          resultMessege.style.color = 'yellowgreen'; 
        }else{
          odayabdulscore++; 
          abdulscore.textContent = `${odayabdulscore}💯`
          resultMessege.textContent = "Sorry, you did not guess the number.❌"; 
          resultMessege.style.color = 'red'; 
        }  
        updateStorage()
      
        if(score >= 100){
          gameContainer.innerHTML = `
                  <h6 class="result">You Win🎉🍾✅💯</h6>
                   <div class="ludo">
                    <img class="ludo-img" src="images/you.avif" alt="">
                   </div>
          `
        }else if(odayabdulscore >= 100){
            gameContainer.innerHTML = `
                    <h6 class="result">i Win What Else Do You Want😜🎉</h6>
                   <div class="ludo">
                    <img class="ludo-img" src="images/defaultPlayerIMG.avif" alt="">
                   </div>
          `
        }
      })
}

//reset
reset.addEventListener('click' , function(){
   score = 0 ; 
   odayabdulscore = 0 ; 
   resultMessege.textContent= ''; 
   ludoIMG.src = 'ludos/dice-1.png'; 
   updateStorage()
   scoreMessege()
   location.reload()
})

guessLudo()