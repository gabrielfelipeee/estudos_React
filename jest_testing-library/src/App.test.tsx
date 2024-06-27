import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const sum = (x: number, y: number): number => {
    return x + y;
};
describe("App Component", () => { // Describe cria um grupo de testes relacionado ao App
    it("Should sum correctly", () => {
        expect(sum(4, 4)).toBe(8); // Espera que o retorno da função seja 8
    })

    it("Should render App with message Hello World", () => {
        render(<App />); // Renderiza o Componente App...
        screen.getByText("Hello World"); // ...e procura o texto "Hello World"
    });

    it("Should change message on button click", () => {
        render(<App />);

        screen.getByText("O vasco da gama é Gigante");

        const buttonElement = screen.getByText("Change message");
        fireEvent.click(buttonElement); // Adiciona um evento de click ao elementButton

        screen.getByText("Message changed!"); // Verifica se esse texto foi renderizado após clicar no botão

    })
});