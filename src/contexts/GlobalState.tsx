import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";


type GlobalProps = {
    children:React.ReactNode;
}

// type InitailStateType = {
//     transaction:{}[],
// }

type transactionProps ={
    id: number, 
    text: string, 
    amount: number
}

const initialState = {
    transactions:[
  { id: 1, text: 'Flower', amount: -21 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
],
deleteTrans:(id:number) => {},
};

export const GlobalContext = createContext(initialState);

const GlobalProvider =({children}:GlobalProps) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    const deleteTransaction = (id:number) => {
            dispatch({
                type:"DELETE_TRANSACTION",
                payload:id,
            });
    }

    const addTransaction = (transaction:transactionProps) => {
            dispatch({
            type:"ADD_TRANSACTION", 
            payload: transaction,
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTrans:deleteTransaction,
        }}>
        {children}
        </GlobalContext.Provider>
    )

}


export default GlobalProvider;

