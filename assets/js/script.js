let card = document.querySelectorAll('.cell')
let front = document.querySelectorAll('.front')
let container = document.querySelector('.container')
let score = document.querySelector('.score span')
let modal = document.getElementById("winModal");
let playAgain = document.getElementById("play-again");

shuffleImage()
clicking()
// Function to shuffle cards into random order for each game
function shuffleImage(){
    card.forEach(c=>{
        const num = [...Array(card.length).keys()]
        const random = Math.floor(Math.random()*card.length)
        c.style.order = num[random]
    })
}

// Function to flip 2 cards over when clicked on
function clicking(){
    for(let i =0; i<card.length; i++){
        card[i].addEventListener('click' ,()=>{
            front[i].classList.add('flip')
           const flippedCard = document.querySelectorAll('.flip')

            if(flippedCard.length == 2){
                container.style.pointerEvents ='none'       
                setInterval(() => {                
                    container.style.pointerEvents ='all'
                }, 1000); 
                match(flippedCard[0] , flippedCard[1])
            }
        })
    }
}

// Function to decide if clicked cards are a match and increment score
function match(cardOne , cardTwo){
    if(cardOne.dataset.index == cardTwo.dataset.index){
        score.innerHTML = parseInt(score.innerHTML) + 1
       
        cardOne.classList.remove('flip') 
        cardTwo.classList.remove('flip') 

        cardOne.classList.add('match')
        cardTwo.classList.add('match')

    }else{
        setTimeout(() => {
            
        cardOne.classList.remove('flip') 
        cardTwo.classList.remove('flip') 
        }, 1000);
    }
}

function showWinModal() {
    let modal = document.getElementById("winModal");
    let closeButton = document.getElementsByClassName("closeButton")[0];
    modal.style.display = "block";
    closeButton.addEventListener("click", function() { document.getElementById("winModal").style.display = "none";});
}

function checkGameIsWon() {
    if (score === 6) {
        view.showWinModal();
 }
}