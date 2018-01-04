var endDates = [
    ["Countdown to NFL Season",new Date(2017,8,7,19,30)], 
    ["Colts @ Rams countdown",new Date(2017,8,10,15,5)], 
    ["Cardinals @Colts countdown", new Date(2017,8,17,12,0)], 
    ["Browns @ Colts countdown",new Date(2017,8,24,12,0)], 
    ["Colts @ Seahawks countdown",new Date(2017,9,1,19,30)], 
    ["49ers @ Colts countdown",new Date(2017,9,8,12,0)], 
    ["Colts @ Titans countdown",new Date(2017,9,16,19,30)], 
    ["Jaguars @ Colts countdown",new Date(2017,9,22,12,0)], 
    ["Colts @ Bengals countdown",new Date(2017,8,29,12,0)], 
    ["Colts @ Texans countdown",new Date(2017,10,5,12,0)], 
    ["Steelers @ Colts countdown",new Date(2017,10,12,12,0)], 
    ["Titans @ Colts countdown",new Date(2017,10,26,12,0)], 
    ["Colts @ Jaguars countdown",new Date(2017,11,3,12,0)], 
    ["Colts @ Bills countdown",new Date(2017,11,10,12,0)], 
    ["Broncos @ Colts countdown",new Date(2017,11,14,12,0)], 
    ["Colts @ Ravens countdown",new Date(2017,11,23,15,30)], 
    ["Texans @ Colts countdown",new Date(2017,11,31,12,0)] 
    ];

var current;
setInterval(function(){
current = new Date();
var endDate = null;
var index = 0;
var prospectiveDate = null;
var descDiv = document.getElementById("title");
while(endDate == null)
{
    prospectiveDate = endDates[index][1];   
    if((prospectiveDate.getTime()-current.getTime()) > 0)
    {
        descDiv.innerHTML = endDates[index][0];
        endDate = endDates[index][1];
        
    }
    index++;
}
var numMill = endDate.getTime() - current.getTime();
var numSeconds = Math.floor(numMill/1000);
var numMinutes = 0;
var numHours = 0;
var numDays  = 0;
while(numSeconds > 60)
{
    numSeconds -= 60;
    numMinutes++;
}
while(numMinutes > 60)
{
    numMinutes -= 60;
    numHours++;
}
while(numHours > 24){
    numHours -= 24;
    numDays++;
}
var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

days.innerHTML = numDays + "<br>Days" ;
hours.innerHTML = numHours + "<br>Hours" ;
minutes.innerHTML = numMinutes + "<br>Min";
seconds.innerHTML = numSeconds + "<br>Sec";
},1000);

var test = function(){
    
}

test()