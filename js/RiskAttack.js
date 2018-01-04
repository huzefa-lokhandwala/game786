var resultdiv = document.getElementById("riskResults");
var attack = function(numberAttackers, numberDefenders) 
{
var getRoll = function(dieSize){
    resultdiv.innerHTML += dieSize + "-sided Die is rolling....<br>"
    return Math.ceil(Math.random(Date.now)* dieSize);
}

var attacker = new Array(numberAttackers);

var defender = new Array(numberDefenders);

for(var i = 0; i<numberAttackers;i++){
    attacker[i] = getRoll(6);
}
for(var i = 0; i<numberDefenders;i++){
    defender[i] = getRoll(6);
}
var difference = attacker.length - defender.length;
for(var i =0;i<difference;i++){
    defender.push(0);
}
attacker.sort();
defender.sort();

resultdiv.innerHTML += "<strong>Attack rolls: " + attacker + "</strong><br>";
resultdiv.innerHTML += "<strong>Defense rolls: " + defender + "</strong><br>";

//result = new Array(3);

var attackerdead = 0;
var defenderdead = 0;
for(var i = 2; i>=1;i--)
{
    if(defender[i] == 0)
    {
       break; 
    }
    var index = 0;
    if(attacker[i] > defender[i])
    {
        //result[index] = "attacker won";
        defenderdead++;
        index++
    }
    else
    {
        attackerdead++;
        //result[index] = "defender won";
    }
    
}

resultdiv.innerHTML += "Attacker killed " + defenderdead + " defenders<br>";
resultdiv.innerHTML += "Defender killed " + attackerdead + " attackers<br>";
    var deaths = new Array(2);

    deaths[0] = attackerdead;
    deaths[1] = defenderdead;
    return deaths;
}
var goOn = function(attackStrength, defenseStrength)
{
   var answer =  confirm("AttackStrength is " + attackStrength + "\nDefense Strength is " + defenseStrength + "\nWould you like to continue attacking?");
   return answer;
}
var attackSequence = function(){
resultdiv.innerHTML = "";
var attackArmy = parseInt(document.getElementById("attack").value);
var defendArmy = parseInt(document.getElementById("defend").value);
var interval = parseInt(document.getElementById("promptInterval").value);
var cont = true;
var result;
var index = 0;
while(attackArmy > 2 && defendArmy > 0 && cont == true)
{
    
    if(attackArmy > 2 && defendArmy > 1)
    {
        result = attack(3, 2);
        
    }
    else if(attackArmy > 2 && defendArmy == 1)
    {
        result = attack(3,1);
    }
    else if (attackArmy > 1 && defendArmy > 1)
    {
        result = attack(1,1);
    }
    
    else if(attackArmy > 1 && defendArmy == 1)
    {
        result = attack(1,1);
    }
        attackArmy = attackArmy - result[0];
        defendArmy = defendArmy - result[1];
        if(attackArmy < 3){
            attackArmy += result[0];
        }
        if(defendArmy < 1){
            defendArmy = 0;
        }
        resultdiv.innerHTML += "Attacking Army strength is : " + attackArmy + "<br>";
        resultdiv.innerHTML += "Defending Army strength is " + defendArmy + "<br>";
        index++;
        if(index%interval == 0)
        {
            cont = goOn(attackArmy,defendArmy);
        }
        
}
if(!cont){
    resultdiv.innerHTML += "Attacker chooses to stop attack! <br>";
    resultdiv.innerHTML += "Attacking army remaining strength is : " + attackArmy + "<br>";
    resultdiv.innerHTML += "Defending army remaining strength is : " + defendArmy + "<br>";
}
if(attackArmy == 1)
{
    resultdiv.innerHTML += "Attacking Army forced to retreat <br>"
    resultdiv.innerHTML += "Defending army remaining strength is : " + defendArmy + "<br>";
}
if(attackArmy == 0)
{
    resultdiv.innerHTML += "Attacking Army forced to retreat <br>"
    resultdiv.innerHTML += "Defending army remaining strength is : " + (defendArmy+1) + "<br>";
}
if(defendArmy == 0)
{
    resultdiv.innerHTML += "Defending army was defeated and attacking army conquers the terrritory<br>";
    resultdiv.innerHTML += "Attacking army remaining strength is : " + attackArmy + "<br>";
    if(attackArmy > 3){
        resultdiv.innerHTML += "Attacking army must send 3 troops to new territory<br>"
    }
    else if(attackArmy > 2){
        resultdiv.innerHTML += "Attacking army must send 2 troops to new territory <br>";
    }
}

resultdiv.innerHTML += "<button type='button' class='btn btn-warning' onclick='reset()'>Reset</button>";
}

var reset= function()
{
    resultdiv.innerHTML = "";
}
// attack(process.argv[2], process.argv[3])