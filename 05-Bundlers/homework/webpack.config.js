module.exports = {

    entry: './browser/app.js',  // El punto de arranque de mi aplicación
    output: {
        path: __dirname + '/Browser', // Dónde se va a ubicar este archivo
        filename: 'bundle.js', // El nombre del archivo final generado
    },
}