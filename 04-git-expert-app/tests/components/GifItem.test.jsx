import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Prueba en <GifItem/>', () => {
    const title = 'Saitama';
    const url = 'http://localhost/hola.jpg'

    test('Debe de hacer match con el snapshot', () => {

        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar la imagen con el URL  Y EL ALT  indicado', () => {

        render(<GifItem title={title} url={url} />);
        //screen.debug();
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe de mostra el titulo en el component', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
})