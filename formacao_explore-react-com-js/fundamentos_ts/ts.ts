// Declaração de tipagem explícita, deixa claro o tipo
const showTicket = (user: string | null, ticket: number) => {
    return `olá ${user ?? "Usuário padrão"}. Seu bilhete é ${ticket}`;
}
showTicket("Gabriel", 255);


/* 
Inferência de tipos (Declaração Implícita):
O tipo de dado é inferido automaticamente pelo compilador com base no valor atribuído à variável,
*/
let nome = "Gabriel"; // string
let idade = 19; // number
let array = ["Liverpool", "Man United", 6, 3] // (string | number)[]


// Tipagem para arrays
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let names: string[] = ["Maria", "João"]
// outra forma de tipar arrays
let numbers2: Array<number> = [11, 12, 3, 5];


// Tipagem de funções
const showMessage = (message: string): string => { // retorna uma string
    return message;
};


// Operador union '|'
// O argumento pode ser de um tipo ou de outro
const printId = (id: number | string) => {
    return `O ID do usuário é ${id}`;
};
printId(100);
printId("145");


// Generics
function useState<T>() {
    let state: T;

    const get = () => {
        return state;
    };
    const set = (newValue: T) => {
        state = newValue;
    }

    return { get, set }
};
let newState = useState<string>(); // A partir desse momento o tipo será string
newState.get();
newState.set("teste");

let newState2 = useState<number>(); // Aqui é number
newState2.set(100);


// Caso o desenvolvedor não escolher um tipo o padrãpo será, uma string
function myFunction<T extends number | string = string>(){}
