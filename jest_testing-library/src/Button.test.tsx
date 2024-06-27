import { fireEvent, render, screen } from "@testing-library/react"
import Button from "./Button"



describe("Button Component", () => {
    //Teste de estilos do botão
    it("Should render with red background if desabled", () => {
        render(<Button disabled onClick={() => { }}>Click me</Button>);
        const buttonElement = screen.getByRole("button", { name: "Click me" }); // Outra forma de pegar um elemento
        expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
    });

    // Testar a função onClick
    it("Should call onClick prop oc click", () => {
        const onClickFn = jest.fn(); // Cria uma simulação de função
        render(
            <Button
                disabled
                onClick={onClickFn}
            >
                Click me
            </Button>);

        const buttonElement = screen.getByText("Click me");

        fireEvent.click(buttonElement);
        expect(onClickFn).toHaveBeenCalled(); // Espera que o funçaõ seja chamado

        /*
        Verificar se a função foi chamada com um parâmetro
        expect(onClickFn).toHaveBeenCalledWith(10) 
        */
    })
})