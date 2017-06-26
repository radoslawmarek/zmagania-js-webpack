//import { joinWords } from './lib.js';

//console.log(joinWords());
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






