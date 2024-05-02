
import { render, screen } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe(' Prueba en <FirstApp/>', () => {
    const title = 'Reynaldo';
 
    test('Debe de mostrar el titulo en H1', () => {

        render( <FirstApp title={title}/>  );
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
       
    });
})