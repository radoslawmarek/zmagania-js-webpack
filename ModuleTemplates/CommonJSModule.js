var words = [ 'Ala','jest', 'scrum', 'masterem'];

module.exports = function() {
        var result = '';
        for(var i = 0; i < words.length; i++) {
            result += words[i] + ' ';
        }

        return result;
};