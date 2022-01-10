window.onload = function(){
    main();
}

function main(){
    todayIs();
    perDay();
    domQueries();
    document.getElementById("hover").onmouseenter = function() {mouseEnter()};
    document.getElementById("hover").onmouseleave = function() {mouseLeave()};
}


//DOM Queries
function domQueries(){

    //border for main context
    var p = document.querySelector(".border");
    p.style.border = "5px solid gray";
    p.style.borderRadius = "8px";
    p.style.padding = "10px 10px 10px 10px";
    
}


//DOM Events


function mouseEnter() {
  document.getElementById("hover").style.color = "white";
}

function mouseLeave() {
  document.getElementById("hover").style.color = "black";
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode"); 
}


//different Color per day
function perDay(){
    var day = new Date().getUTCDay();
    var x = null;
    var color = null;
    x = document.querySelectorAll(".color");

    if(day == 0) {

        color = "#ffcd44";
        document.getElementById("color").style.backgroundColor = "#ffcd44";
        document.getElementById("footer").style.color = "#ffcd44";
        
    } else if(day == 1){

        color = "#cc9966";
        document.getElementById("color").style.backgroundColor = "#cc9966";
        document.getElementById("footer").style.color = "#cc9966";

    } else if (day == 2){

        color = "#c65353";
        document.getElementById("color").style.backgroundColor = "#c65353";
        document.getElementById("footer").style.color = "#c65353";
        
    } else if (day == 3){

        color = "lightblue";
        document.getElementById("color").style.backgroundColor = "lightblue";
        document.getElementById("footer").style.color = "lightblue";

    } else if (day == 4) {
       
        color = "#ff8080";
        document.getElementById("color").style.backgroundColor = "#ff8080";
        document.getElementById("footer").style.color = "#ff8080";
        
    } else if (day == 5){

        color = "#ccffcc";
        document.getElementById("color").style.backgroundColor = "#ccffcc";
        document.getElementById("footer").style.color = "#ccffcc";
        
    } else {

        color = "#80ffdb";
        document.getElementById("color").style.backgroundColor = "#80ffdb";
        document.getElementById("footer").style.color = "#80ffdb";
        
    }

    changeColor(color,x);
}

function changeColor(col,x){
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = col;
    }
}

function todayIs(){
    var currentDate = new Date();
    var day = currentDate.getUTCDay();
    day = getTheDay(day);
    var date = currentDate.getUTCDate();
    var month = currentDate.getUTCMonth() + 1;
    var year = currentDate.getUTCFullYear();
    var fullDate = day + " " + date + "/" + month + "/" + year;
    document.getElementById("date").innerHTML = fullDate;
}

function getTheDay(theDay){
    switch (theDay) {
        case 0:
            return 'Sunday';
            break;
        case 1:
            return 'Monday';
            break;
        case 2:
            return 'Tuesday';
            break;
        case 3:
            return 'Wednesday';
            break;
        case 4:
            return 'Thursday';
            break;
        case 5:
            return 'Friday';
            break;
        case 6:
            return 'Saturday';
            break;
        default:
            document.write("-.-");
    }

}

/* -------------- Exercise8 ------------------ */

function checkPassword(form) {
    password1 = form.password1.value;
    password2 = form.password2.value;

    const loginPass = document.querySelector('#password');
    const loginCheckPass = document.querySelector('#checkPassword');
  
     // If password not entered
    if (password1 == ''){
        loginPass.classList.add('error');
    }        
    // If confirm password not entered
    else if (password2 == ''){
        loginCheckPass.classList.add('error');
    }       
    // If Not same return False.    
    else if (password1 != password2) {
        loginPass.classList.add('error');
        loginCheckPass.classList.add('error');
        return false;
    }
  
    // If same return True.
    else{
        alert("Password Match")
        return true;
    }
}



function validateAge() {
    var txt = "";

    var date = document.getElementById("birthday").value;
    var input = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

    if (input.test(dateString)) {
        var parts = date.split("/");
        var dt = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
        var dtCurrent = new Date();
        
        if (dtCurrent.getFullYear() - dt.getFullYear() < 18) {
            date.setCustomValidity("false");
            txt = "Απαιτείται ηλικία >18";
            document.getElementById("alert1").innerHTML = txt;
        }

        if (dtCurrent.getFullYear() - dt.getFullYear() >= 18) {
            date.setCustomValidity("");
           
        }
        
    }
}


function tooSmall() {
    var txt = "";
    if (document.getElementById("password").validity.rangeUnderflow) {
      txt = "Μη ασφαλής κωδικός";
    }
    document.getElementById("alert2").innerHTML = txt;
}




/* -------------- Exercise8 ------------------ */