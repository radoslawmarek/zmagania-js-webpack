define(['AmdFirstModule'], function(firstModule) {
    return {
        logMessage: function() {
            console.log(firstModule.joinWords());
        }
    };
});