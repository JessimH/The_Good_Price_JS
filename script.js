'use strict';

const secretNbr = Math.trunc(Math.random() * 20) + 1
const toHight = '📈 Trop Haut'
const toLow = '📉 Trop bas'
const loose = 'Vous avez Perdu 😭'
let score = 20
let hightScore = 0

const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)
    
    if(!guess){
        displayMessage('🚫 Rentrez un Nombre!')
    } 
    else if(guess === secretNbr){
        displayMessage('🏆 Bravo c\'est le bon Prix!')

        document.querySelector('.number').textContent = secretNbr + '€'

        document.querySelector('body').style.backgroundColor = '#60b347'

        document.querySelector('.number').style.width = '30rem'

        if(score > hightScore){
            hightScore = score
            document.querySelector('.highscore').textContent = hightScore
        }
    }
    else if(guess !== secretNbr){
        if(score > 1){
            displayMessage(guess > secretNbr ? toHight : toLow)
            score --
            document.querySelector('.score').textContent = score 
        }else{
            displayMessage(loose)
        }   
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20
    const secretNbr = Math.trunc(Math.random() * 20) + 1

    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.score').textContent = score 
    displayMessage('Start guessing...')
    document.querySelector('.number').textContent = '?€'
    document.querySelector('.guess').value = ''

})

