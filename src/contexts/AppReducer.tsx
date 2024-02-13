

type addActionProps = {
    type:"ADD_TRANSACTION",
    payload:{
        id: number, 
        text: string,   
        amount: number
    },
}

type deleteActionProps = {
    type: "DELETE_TRANSACTION",
    payload: number,
}

type actionProps = addActionProps | deleteActionProps;

type stateProps = {
    transactions:{
        id: number, 
        text: string, 
        amount: number
    }[],
}

export default (state:stateProps, action:actionProps) => {
        switch(action.type){
            case "DELETE_TRANSACTION":
                return {
                    ...state,
                    transactions: state.transactions.filter(trans => trans.id !== action.payload)
                }
            case "ADD_TRANSACTION":
                return {
                    ...state,
                    transactions:[action?.payload,...state.transactions]
                }    
            default: return state;
        }
}