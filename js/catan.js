var dicenumbers = [1,2,3,4,5,6];
var meaning = ['Barbarian', 'red', 'blue', 'green','Barbarian', 'Barbarian'];
var diceNumber;
var Roll = function(dieSize){
    return Math.ceil(Math.random(Date.now)* dieSize);
}

var twoDiceRoll = function(){
    var dice1 = 0;
    var dice2 = 0;
    diceNumber = 2;
    dice1 = Roll(6);
    dice2 = Roll(6);
    var firstDiceDiv = document.getElementById('firstDice');
    var secondDiceDiv = document.getElementById('secondDice');
    var thirdDiceDiv = document.getElementById('thirdDice');
    firstDiceDiv.style.visibility = "visible";
    secondDiceDiv.style.visibility = "visible";
    thirdDiceDiv.style.visibility = "visible";
    firstDiceDiv.style.display = "block";
    secondDiceDiv.style.display = "none";
    thirdDiceDiv.style.display = "block";
    firstDiceDiv.style.color = 'black';
    secondDiceDiv.style.color = 'black';
    thirdDiceDiv.style.color = 'black';
    firstDiceDiv.style.backgroundColor = 'white';
    secondDiceDiv.style.backgroundColor = 'white';
    thirdDiceDiv.style.backgroundColor = 'white';
    firstDiceDiv.innerText = dice1;
    thirdDiceDiv.innerText = dice2;
}

var citiesKnightsRoll = function(){
    var dice1 = 0;
    var dice2 = 0;
    var dice3Num = 0;
    var dice3Letter = "";

    dice1 = Roll(6);
    dice2 = Roll(6);
    dice3Num = Roll(6);
    var dicecolored = Roll(2);
    var firstDiceDiv = document.getElementById('firstDice');
    var secondDiceDiv = document.getElementById('secondDice');
    var thirdDiceDiv = document.getElementById('thirdDice');
    firstDiceDiv.style.visibility = "visible";
    secondDiceDiv.style.visibility = "visible";
    thirdDiceDiv.style.visibility = "visible";
    firstDiceDiv.style.display = "block";
    secondDiceDiv.style.display = "block";
    thirdDiceDiv.style.display = "block";
    firstDiceDiv.style.color = 'white';
    secondDiceDiv.style.color = 'white';
    thirdDiceDiv.style.color = 'white';
    switch(dice3Num){
        case 1: 
            dice3Letter = 'B';
            thirdDiceDiv.style.backgroundColor = 'black';
            break;
        case 2: 
            dice3Letter = 'G';
            thirdDiceDiv.style.backgroundColor = 'green';
            break; 
        case 3: 
            dice3Letter = 'BL';
            thirdDiceDiv.style.backgroundColor = 'blue';
            break;
        case 4: 
            dice3Letter = 'Y';
            thirdDiceDiv.style.backgroundColor = 'Yellow';
            thirdDiceDiv.style.color = 'black';
            break;
        case 5: 
            dice3Letter = 'B';
            thirdDiceDiv.style.backgroundColor = 'black';
            break;
        case 6: 
            dice3Letter = 'B';
            thirdDiceDiv.style.backgroundColor = 'black';
            break;   
    }

    

    if(dicecolored == 1){
        firstDiceDiv.style.backgroundColor = 'red';
        secondDiceDiv.style.backgroundColor = 'yellow';
        secondDiceDiv.style.color = 'black'
    }
    else {
        firstDiceDiv.style.backgroundColor = 'yellow';
        firstDiceDiv.style.color = 'black';
        secondDiceDiv.style.backgroundColor = 'red';
    }

    firstDiceDiv.innerText = dice1;
    secondDiceDiv.innerText = dice2;
    thirdDiceDiv.innerText = dice3Letter;
}

var changeColor = function(color){
    var img = document.getElementById('robber');
    switch(color){
        case "red": 
            robber.style.borderColor = 'red';
            break;
        case "blue": 
            robber.style.borderColor = 'blue';
            break; 
        case "white": 
            robber.style.borderColor = 'cornsilk';
            break;
        case "green": 
            robber.style.borderColor = 'green';
            break;
        case "orange": 
            robber.style.borderColor = 'orange';
            break;
        case "brown": 
            robber.style.borderColor = 'BurlyWood';
            break;   
    }
}