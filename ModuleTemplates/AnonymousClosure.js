(function() {

    var words = [ 'Ala','jest', 'scrum', 'masterem'];

    var joinWords = function() {
        var result = '';
        for(var i = 0; i < words.length; i++) {
            result += words[i] + ' ';
        }

        return result;
    }

    console.log(joinWords());

}());