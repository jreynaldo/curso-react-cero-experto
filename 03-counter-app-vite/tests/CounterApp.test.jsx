import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Prueba en el <CounterApp>', () => {
    const initialValue  =10;
    test(' demostrar  le valor inicial de 100 <CounterApp value={100}/>', () => {
        render( <CounterApp value={100} />);
        expect(screen.getByText(100)).toBeTruthy()
    });

    test(' Debe de incrementar con el boton +1/>', () => {
        render( <CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
    });

    test(' Debe de decrementar con el boton -1/>', () => {
        render( <CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();
    });

    test(' Debe de hacer click en el boton Reset/>', () => {
        render( <CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByText('Reset'));
        screen.debug();
        
        expect(screen.getByText(initialValue)).toBeTruthy();
    });

})