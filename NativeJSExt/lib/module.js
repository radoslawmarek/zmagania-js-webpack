export class MyModule {
    joinWords() {
        var words = [ 'Ala','jest', 'scrum', 'masterem'];

        var result = '';
        for(var i = 0; i < words.length; i++) {
            result += words[i] + ' ';
        }

        return result;
    }
} 
