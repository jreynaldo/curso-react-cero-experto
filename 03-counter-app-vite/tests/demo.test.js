describe('Pruebas de demo componen', ()=> {
    test('Esta prueba no debe fallar', ()=>{
        //
        const message1 = 'Hola';
     
        const message2 = message1.trim();
     
        expect(message1).toBe(message2);
        expect(message1).toEqual(message2);
        
     });
})