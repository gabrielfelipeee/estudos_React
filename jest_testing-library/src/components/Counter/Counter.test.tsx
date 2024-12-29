import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from ".";

describe("Counter Component", () => {
    it("Deve iniciar o título com 0", () => {
        render(<Counter />);
        expect(screen.getByTestId("counter_title")).toHaveTextContent("0");
    });

    it("O título deve conter a classe 'counter_title'", () => {
        render(<Counter />);
        expect(screen.getByTestId("counter_title")).toHaveClass("counter_title");
    });

    it("O título NÃO deve iniciar com as classes 'counter_title_increment' ou 'counter_title_decrement'", () => {
        render(<Counter />);

        const counterTitle = screen.getByTestId("counter_title");

        expect(counterTitle).not.toHaveClass("counter_title_increment");
        expect(counterTitle).not.toHaveClass("counter_title_decrement");
    });

    it("Deve conter 2 botões (ambos com a classe 'button'). O botão de increment deve ter a classe 'button_increment', e o de decrement deve ter a classe 'button_decremnt'", () => {
        render(<Counter />);

        const btnDecrement = screen.getByRole("button", { name: "Decrement" });
        const btnIncrement = screen.getByRole("button", { name: "Increment" });

        expect(btnDecrement).toBeInTheDocument();
        expect(btnIncrement).toBeInTheDocument();

        const allButtonsHaveButtonClass = screen
            .getAllByRole("button")
            .every(btn => btn.classList.contains("button"));
        expect(allButtonsHaveButtonClass).toBe(true);

        expect(btnDecrement).toHaveClass("button_decrement");
        expect(btnIncrement).toHaveClass("button_increment");
    });

    it("Deve incrementar 1 ao clicar no botão 'Increment', e decrementar 1 ao clicar no 'Decrement'", () => {
        render(<Counter />);

        const btnDecrement = screen.getByRole("button", { name: "Decrement" });
        const btnIncrement = screen.getByRole("button", { name: "Increment" });

        const counterTitle = screen.getByTestId("counter_title");

        fireEvent.click(btnIncrement);
        expect(counterTitle).toHaveTextContent("1");

        fireEvent.click(btnDecrement);
        expect(counterTitle).toHaveTextContent("0");
    });

    it("Deve adicionar a classe 'counter_title_increment' quando o título for positivo", () => {
        render(<Counter />);

        const btnIncrement = screen.getByRole("button", { name: "Increment" });
        const counterTitle = screen.getByTestId("counter_title");

        expect(counterTitle).toHaveTextContent("0");
        expect(counterTitle).not.toHaveClass("counter_title_increment");
        fireEvent.click(btnIncrement);
        expect(counterTitle).toHaveClass("counter_title_increment");
    });
    it("Deve adicionar a classe 'counter_title_decrement' quando o título for negativo", () => {
        render(<Counter />);

        const btnDecrement = screen.getByRole("button", { name: "Decrement" });
        const counterTitle = screen.getByTestId("counter_title");
        
        expect(counterTitle).toHaveTextContent("0");
        expect(counterTitle).not.toHaveClass("counter_title_decrement");
        fireEvent.click(btnDecrement);
        expect(counterTitle).toHaveClass("counter_title_decrement");
    });
});
