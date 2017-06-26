import { button } from './lib.js';
import { elements } from './lib.js';
import { highlightElement } from './lib.js';


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






