define([], function() {
    var words = [ 'Ala','jest', 'scrum', 'masterem'];

    return {
        joinWords: function() {
            var result = '';
            for(var i = 0; i < words.length; i++) {
                result += words[i] + ' ';
            }

            return result;
        }
    };
});