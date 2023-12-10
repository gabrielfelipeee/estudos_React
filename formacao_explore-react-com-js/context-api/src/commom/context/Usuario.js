import { createContext, useState } from "react";



export const UsuarioContext = createContext();




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