import React, {useContext} from "react";
import {GlobalContext} from "../contexts/GlobalState";
import { Transaction } from "./Transaction";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  console.log("trans", transactions);
  return (
    <>
      <h3>History</h3>
      <ul  className="list">
        {transactions.map(trans => <Transaction  transaction={trans}/>)}
      </ul>
    </>

  )
}

export default TransactionList;
