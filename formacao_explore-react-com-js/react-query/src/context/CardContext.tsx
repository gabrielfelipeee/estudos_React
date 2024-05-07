import { ReactNode, createContext } from "react";

interface ICardContext {

}

interface IcardProviderProps {
    children: ReactNode
}



const CardContext = createContext<ICardContext | null>(null);
CardContext.displayName = "Card";

const CardProvider = ({ children }: IcardProviderProps) => {
    return (
        <CardContext.Provider value={{

        }}
        >
            {children}
        </CardContext.Provider>
    )
}
export { CardContext, CardProvider };