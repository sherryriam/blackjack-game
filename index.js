
let cards=[]
let sum = 0
let message= " "
let hasBlackJack = false
let isAlive = false
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard, secondCard]
    sum = firstCard + secondCard
renderGame()
}

function getRandomCard(){
let randomNumber= Math.floor(Math.random()* 13) + 1
if (randomNumber > 10) {
    return 10
} else if (randomNumber === 1) {
    return 11
} else {
    return randomNumber
} 
}


function renderGame(){
    document.getElementById("cards-el").textContent ="Cards: "

    for (let i= 0; i < cards.length; i++){
        
document.getElementById("cards-el").textContent += cards[i] + " "
    
    }
    

document.getElementById("sum-el").textContent ="Sum: " + sum
if (sum<=20){
message= "you want to draw a new card?"
}
else if(sum === 21){
message = "you've got Blackjack!"
hasBlackJack = true
}
else {
message = "you're out of the game!"
isAlive = false
}
document.getElementById("message-el"). textContent = message
}


function newGame(){
if (isAlive === true && hasBlackJack === false){ 
let card = getRandomCard()
sum += card
cards.push(card)
}
renderGame()
}
