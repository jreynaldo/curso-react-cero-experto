
import { render } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe(' Prueba en <FirstApp/>', () => {
    test('debe hacer match con el snapshot', () => {
        const title = 'Reynaldo';
        const {container} = render(<FirstApp title={title}/>);
   
    });
    test('Debe de mostrar el titulo en H1', () => {
        const title = 'Reynaldo';
        const {container, getByText} = render(<FirstApp title={title}/>);
        expect(getByText(title)).toBeTruthy();

    });
})