import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";


type GlobalProps = {
    children:React.ReactNode;
}


interface TransactionProps {
    id: number, 
    text: string, 
    amount: number
}

interface InitialState {
    transactions:TransactionProps[],
    deleteTrans:(id:number) => void,
    addTrans:(transaction:TransactionProps) => void,
}

const initialState:InitialState = {
    transactions:[],
    deleteTrans:(id:number) => {},
    addTrans:(transaction:TransactionProps) => {},
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

    const addTransaction = (transaction:TransactionProps) => {
            dispatch({
            type:"ADD_TRANSACTION", 
            payload: transaction,
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTrans:deleteTransaction,
            addTrans:addTransaction,
        }}>
        {children}
        </GlobalContext.Provider>
    )

}


export default GlobalProvider;

