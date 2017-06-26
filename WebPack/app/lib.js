export var button = document.getElementById("button");
export var elements = new Array();

elements.push(document.getElementById("firstElement"));
elements.push(document.getElementById("secondElement"));
elements.push(document.getElementById("thirdElement"));

export var highlightElement = function (elementIndex) {
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
