var normalize = System.normalize;

exports.normalize = function(name, parentName, parentAdress) {

    console.log('Normalize: ' + name);

    return normalize.call(this, name, parentName, parentAdress);
}

// exports.translate = function(load) {
//     console.log('Translate: ' + load.name);
// }

// exports.fetch = function(load) {
//     console.log('Fetch: ' + load.name);
//     fetch(load.address);
// }