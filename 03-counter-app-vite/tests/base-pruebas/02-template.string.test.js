import { getSaludo } from "../../src/base-pruebas/02-template.string";

describe('Prueba de 02-template.string', () => {

    test('getSaludo debe de retornar "Hola Reynaldo"',() => {
        const name = 'Reynaldo';
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${ name }`);
    });

});