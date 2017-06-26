//import { joinWords } from './lib.js';

//console.log(joinWords());

var button = document.getElementById("button");
var elements = new Array();
elements.push(document.getElementById("firstElement"));
elements.push(document.getElementById("secondElement"));
elements.push(document.getElementById("thirdElement"));

var selectedElement = 0;

button.innerText = "Naciśnij mnie!";
highlightElement(selectedElement);

button.onclick = function () {
    selectedElement++;
    if (selectedElement > 2) {
        selectedElement = 0;
    }
    highlightElement(selectedElement);
}

function highlightElement (elementIndex) {
    for(var i=0; i < elements.length; i++) {
        var element = elements[i];
        if (i === elementIndex) {
            element.style.backgroundColor = "red";                
        }
        else {
            element.style.backgroundColor = "white";  
        }
    }
}





