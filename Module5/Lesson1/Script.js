function myfunction(){
    var greeting;
    var time = new Date().getHours();
     if (time < 10){
        greeting = "Goodmorning";
     }
     else if (time<20){
        greeting = "Good day"
     }
     else {
        greeting = "Good evening"
     }
     document.getElementById("time").innerHTML = "The current time is"+ time
     document.getElementById("greet").innerHTML = greeting;
}