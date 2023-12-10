import { createContext, useState } from "react";


// Criando um contexto
export const UsuarioContext = createContext(); 
 // Nome do contexto
UsuarioContext.displayName = "Usuario";


// States do contexto
const UsuarioProvider = (props) => {
    const [nome, setNome] = useState("");
    const [saldo, setSaldo] = useState(0);
    return (
        <UsuarioContext.Provider value={{ nome, setNome, saldo, setSaldo }}>
            {props.children}
        </UsuarioContext.Provider>
    )
};
export default UsuarioProvider;
