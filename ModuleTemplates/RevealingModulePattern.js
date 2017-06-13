var myModule = (function() {

    var words = [ 'Ala','jest', 'scrum', 'masterem'];

    function joinWords() {
        var result = '';
        for(var i = 0; i < words.length; i++) {
            result += words[i] + ' ';
        }

        return result;
    }

    return {
        joinWords: joinWords
    }

}());

console.log(myModule.joinWords());