var systemJS = require('systemjs');

systemJS.translate = function(loader) {
    console.log('Olaboga!!!');
}


SystemJS.config({
    packages: {
        "ts": {
            "main": "plugin.js"
        },
        "typescript": {
            "main": "lib/typescript.js",
            "meta": {
                "lib/typescript.js": {
                "exports": "ts"
                }
            }
        }
    },
    map: {
        "ts": "node_modules/plugin-typescript/lib",
        "typescript": "node_modules/typescript"
    },
    transpiler: 'ts'
});

systemJS.import('./app.js').then(function(m) {
    //console.log(m);
});
