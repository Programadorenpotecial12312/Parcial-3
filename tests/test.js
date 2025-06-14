const fs = require('fs');
const assert = require('assert');

describe('Página Hola Mundo', () => {
    it('El archivo index.html debe contener el título correcto', () => {
        const contenido = fs.readFileSync('./index.html', 'utf-8');
        assert.ok(contenido.includes('<h1>¡Hola Mundo!</h1>'), 'El título no está presente');
    });
});
