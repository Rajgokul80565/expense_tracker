import React, {useContext} from 'react';
import { GlobalContext } from '../contexts/GlobalState';


type TransactionProps = {
        transaction:{id: number, 
        text: string, 
        amount: number
        }
}

export const Transaction = (props:TransactionProps) => {
    console.log("trn", props);
    const sign = props.transaction.amount < 0 ? '-' : '+';
    const {deleteTrans} = useContext(GlobalContext);

    // const handleDelete = (event:React.MouseEvent<HTMLButtonElement>) => {

    // }


    return (
        <li className={props.transaction.amount < 0 ? "minus" : "plus"} key={props?.transaction.id}>
            Cash <span>{sign}${Math.abs(props.transaction.amount)}</span>
            <button onClick={() => deleteTrans(props?.transaction.id)} className="delete-btn">x</button>
        </li> 
    )
}
