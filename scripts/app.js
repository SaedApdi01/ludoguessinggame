window.onload = function() {
    //alert('Hello! You will play this game with Oday Cabdul. If you want to beat him, you need to guess the number he has in mind. If you can\'t guess it, he wins and will get a higher score 🧾');
    
    const audioElement = document.getElementById('myAudio');
    audioElement.volume = 0.05; // Set volume to 50%
    
    // Example: Start playing audio on a button click
    document.getElementById('playButton').addEventListener('click', function() {
        audioElement.play();
    });
};


const closeBTN =  document.querySelector('.close-btn'); 

closeBTN.addEventListener('click', function(){
 document.querySelector('.popup').style.display = 'none'
})