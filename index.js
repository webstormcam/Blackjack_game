
let cards=[]//array-ordered list of items
let sum = 0
let hasBlackJack=false
let isAlive=false
let message=''
let messageEl=document.getElementById('message-el')
let sumEl=document.querySelector('#sum-el')
let cardsEL=document.querySelector('#cards-el')



function getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13)+1
    if (randomNumber===1){
        return 11
    } else if (randomNumber===11){
        return 10
    } else if(randomNumber===12){
        return 10
    } else if(randomNumber===13){
       return 10
    } else{
        return randomNumber
    }
}

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
    cardsEL.textContent='Cards: '
    for (let count=0; count<cards.length;count++){
        cardsEL.textContent+=' '+cards[count]
    }
}


function startGame(){
    isAlive=true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum=firstCard+secondCard
   cards.push(firstCard)
   cards.push(secondCard)

    renderGame()
}


function newCard(){
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    renderGame()
}


