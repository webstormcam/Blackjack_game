let firstCard = 10
let secondCard = 4
let cards=[firstCard,secondCard]//array-ordered list of items
let sum = firstCard + secondCard 

let hasBlackJack=false
let isAlive=true
let message=''
let messageEl=document.getElementById('message-el')
let sumEl=document.querySelector('#sum-el')
let cardsEL=document.querySelector('#cards-el')

function renderGame(){
    if (sum<=20){
        message='Do you want to draw a new card?'
    } else if (sum===21){
        message="Woohoo! You've got Blackjack! "
        hasBlackJack=true
    } else {
        message="You're out of the game!"
        isAlive=false
    }
    
    messageEl.textContent=message
    sumEl.textContent='Sum: '+sum
    cardsEL.textContent='Cards: '+cards[0]+' '+cards[1]
}


function startGame(){
    renderGame()
}


function newCard(){
    let card=6
    sum+=card
    cards.push(card)
    renderGame()
}


