var board;
document.getElementById("redClue").onkeypress = function(event){
    if (event.keyCode == 13 || event.which == 13){
        AddClue('red');
    }
};
document.getElementById("blueClue").onkeypress = function(event){
    if (event.keyCode == 13 || event.which == 13){
        AddClue('blue');
    }
};
document.getElementById("greenClue").onkeypress = function(event){
    if (event.keyCode == 13 || event.which == 13){
        AddClue('green');
    }
};
var getNumber = function(num)
{
    var ran = Math.ceil(Math.random(Date.now) * num) 
    return ran;
}
var fill = function(color, number, grid)
{
    var x;
    var y;
    while(number > 0)
    {
        x = getNumber(grid)-1;
        y = getNumber(grid)-1;
        if(board[x][y] == "")
        {
            board[x][y] = color;
            number--;
        }
    }
}
var printTable = function(red,blue,green, grid)
{
    var table = "<table border='2' style='text-align:center;align-self:center'>";
    for(var i = 0; i<grid;i++)
    {
        table += "<tr>"
        for(var j=0;j<grid;j++)
        {
            //table += "<td>" + board[i][j] + "</td>";
            if(board[i][j] == "B")
            {
                table += "<td style='background-color:blue;color:white;height:50px;width:50px'>" + board[i][j] + "</td>"
            }
            else if(board[i][j] == "R")
            {
                table += "<td style='background-color:red;color:white;height:50px;width:50px'>" + board[i][j] + "</td>"
            }
            else if(board[i][j] == "G")
            {
                table += "<td style='background-color:green;color:white;height:50px;width:50px'>" + board[i][j] + "</td>"
            }
            else if(board[i][j] == "D")
            {
                table += "<td style='background-color:black;color:white;height:50px;width:50px'>" + board[i][j] + "</td>"                
            }
            else
            {
                table += "<td style='height:50px;width:50px'>" + board[i][j] + "</td>"
            }
        }
        table += "</tr>";
    }
    table += "</table>";
    if(red != 0)
    {
        table += "<p style='color:red'>Red: " + red + "</p>"
    }
    if(blue != 0)
    {
        table +=  "<p style='color:blue'>Blue: " + blue + "</p>"
    }
    if(green != 0)
    {
    table += "<p style='color:green'>Green: " + green + "</p>"
    } 
 
    var result = document.getElementById("results");
    result.innerHTML = table;
}
var generate = function()
{
    board = [[],[],[],[],[],[]];
    var k=1;
    for(var i = 0; i<6;i++)
    {
        for(var j=0;j<6;j++)
        {
            board[i][j] = "";
            k++;
        }
    }
    var red = 7;
    var blue = 7;
    var green = 7;
    var deadNum = 2; 
    // 1 - red
    // 2 - blue
    // 3 - green
    var twoextra = getNumber(3);
    
    switch(twoextra){
        case 1: 
        red = 9
        break;
        case 2:
        blue = 9;
        break;
        case 3:
        green = 9; 
    }
    var oneextra = getNumber(3);
    while(oneextra == twoextra){
        oneextra = getNumber(3);
    }
    switch(oneextra){
        case 1: 
        red = 8
        break;
        case 2:
        blue = 8;
        break;
        case 3:
        green = 8; 
    }
    
    //fill blue
    fill("B", blue, 6);
    //fill red
    fill("R", red, 6);
    //fill green
    fill("G", green, 6);
    //fill death
    fill("D", deadNum, 6);

    printTable(red,blue,green, 6);

}
var twoTeamGenerate = function()
{
    board = [[],[],[],[],[]];
    var k=1;
    for(var i = 0; i<5;i++)
    {
        for(var j=0;j<5;j++)
        {
            board[i][j] = "";
            k++;
        }
    }
     var red = 8;
     var blue = 8;
     var deadNum = 1;
     var oneextra = getNumber(2);
      switch(oneextra){
        case 1: 
        red = 9
        break;
        case 2:
        blue = 9;
        break;
    }
    fill("B", blue, 5);
    //fill red
    fill("R", red, 5);
    //fill death
    fill("D", deadNum, 5);
    printTable(red,blue,0,5);
}
var randomGenerate = function()
{
    generate();
    generate();
    generate();
}
var hideInputs = function(){
    var inputs = document.getElementById("wordInputs");
    var resultDiv = document.getElementById("resultDiv");
    
    inputs.style.display = 'none';
    resultDiv.style.display = 'block';
}
var showInputs = function(){
    var inputs = document.getElementById("wordInputs");
    var resultDiv = document.getElementById("resultDiv");
    inputs.style.display = 'block';

    resultDiv.style.display = 'none'
}
var crossout = function(el){
    el.style.textDecoration = "line-through";
}
var words = function(){
    var redsubmitted = document.getElementById("red");
    var bluesubmitted = document.getElementById("blue");
    var greensubmitted = document.getElementById("green");

    redwords = redsubmitted.value.split(",");
    bluewords = bluesubmitted.value.split(",");
    greenwords = greensubmitted.value.split(",");

   
    var string = "<table class='table table-striped'><tr><td>Red words</td><td>Blue words</td><td>Green words</td></tr>";
    var redcount = 0;
    var bluecount = 0;
    var greencount = 0;
    for(v=0;v<=9/3;v++)
    {
        string += "<tr>"
        if(redwords[redcount] != null){
            string += "<td><span onclick='crossout(this)' style='cursor:pointer'>" + redwords[redcount] + "</span></td>"
        }
        else {
            string += "<td></td>"
        }
        if(bluewords[bluecount] != null){
            string += "<td> <span onclick='crossout(this)' style='cursor:pointer'>" + bluewords[bluecount] + "</span></td>"
        }
        else {
            string += "<td></td>"
        }
        if(greenwords[greencount] != null){
            string += "<td><span onclick='crossout(this)' style='cursor:pointer'>" + greenwords[greencount] + "</span></td>"
        }
        else {
            string += "<td></td>"
        }

        string += "</tr>"
        redcount++;
        bluecount++;
        greencount++;
    }

    
    string += "</table><br><button class='btn btn-primary' onclick='showInputs()'>Input new words</button>";

    var resultDiv = document.getElementById("resultDiv");
    redsubmitted.style.visibility = false;
    greensubmitted.style.visibility = false;
    bluesubmitted.style.visibility = false;
     hideInputs();
    resultDiv.innerHTML = string;
}
var increment = function(id){
    var element = document.getElementById(myId);
    var num = parseInt(element.value);
}

var AddClue = function(team){
    var element;
    var input;
    if(team == 'red'){
        element = document.getElementById('redClues');
        input = document.getElementById('redClue');
    }
    else if(team =='blue'){
        element = document.getElementById('blueClues')
        input = document.getElementById('blueClue');
    }
    else {
        element = document.getElementById('greenClues')
        input = document.getElementById('greenClue');
    }
    var parts = input.value.split(" ");
    input.value = "";
    element.innerHTML += "<li class='list-group-item d-flex justify-content-between align-items-center'>"  + parts[0] + "<span class='badge badge-primary badge-pill' onclick='decrement(this)' style='cursor:pointer'>" + parts[1] + "</span></li>";  
}

var decrement = function(el)
{
    var number =  parseInt(el.innerHTML);
    number--;
    if(number == 0){
        el.parentNode.remove();
    }
    el.innerHTML = number;
}

var clearClues = function(){
    var listelement = "<li class='list-group-item d-flex justify-content-between align-items-center'>Word<span class='badge badge-primary badge-pill'>Number</span></li>";
    var element;
    element = document.getElementById('redClues');
    element.innerHTML = listelement;
    element = document.getElementById('blueClues');
    element.innerHTML = listelement;
    element = document.getElementById('greenClues');
    element.innerHTML = listelement;

}