SystemJS.config({
    map: {
        "ts": "node_modules/plugin-typescript/lib",
        "typescript": "node_modules/typescript",
        "loader-plugin": "loader-plugin.js"
    },
    meta: {
        // "*.js": {
        //     loader: 'loader-plugin.js'
        // }
    },
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
    transpiler: 'ts'
});