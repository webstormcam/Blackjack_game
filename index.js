let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard +3

let hasBlackJack=false
let isAlive=true

if (sum<=20){
    console.log('Do you want to draw a new card?🙂')
} else if (sum===21){
    console.log("Woohoo! You've got Blackjack!🥳 ")
    hasBlackJack=true
} else {
    console.log("You're out of the game!😭")
    isAlive=false
}

console.log(isAlive)