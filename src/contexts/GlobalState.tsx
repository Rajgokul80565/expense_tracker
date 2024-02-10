import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";


type GlobalProps = {
    children:React.ReactNode;
}
//check below
type InitailStateType = {
    transaction:{}[],
}

const initialState:InitailStateType = {
    transaction:[
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
]};

export const GlobalContext = createContext(initialState);

const GlobalProvider =({children}:GlobalProps) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{
            transaction:state.transaction
        }}>
        {children}
        </GlobalContext.Provider>
    )

}


export default GlobalProvider;

