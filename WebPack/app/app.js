//import { joinWords } from './lib.js';

//console.log(joinWords());

var button = document.getElementById("button");
var message = document.getElementById("message");

button.innerText = "Pokaż komunikat";

button.onclick = function () {
    if (button.innerText === "Pokaż komunikat".toUpperCase()) {
        message.innerText = "Ala ma kota!";
        button.innerText = "Ukryj komunikat";
    }
    else {
        message.innerText = "";
        button.innerText = "Pokaż komunikat";
    }
    
    

}



