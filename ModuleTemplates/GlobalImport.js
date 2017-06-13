var myModule = {};

(function(moduleVariable) {

    var words = [ 'Ala','jest', 'scrum', 'masterem'];

    moduleVariable.joinWords = function() {
        var result = '';
        for(var i = 0; i < words.length; i++) {
            result += words[i] + ' ';
        }

        return result;
    }

}(myModule));

console.log(myModule.joinWords());