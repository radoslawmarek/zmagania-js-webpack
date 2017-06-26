var button = document.getElementById("button");
var elements = new Array();
elements.push(document.getElementById("firstElement"));
elements.push(document.getElementById("secondElement"));
elements.push(document.getElementById("thirdElement"));

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
