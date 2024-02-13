import {useState, useContext} from "react";
import { GlobalContext } from "../contexts/GlobalState";
import { v4 as uuidv4 } from 'uuid';

function AddTransaction() {
  const {addTrans} = useContext(GlobalContext);
  const [formText, setText] = useState("");
  const [formAmount, setAmount] = useState("");

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        const newTransaction = {
          id: Math.floor(Math.random() * 100000000),
          text: formText, 
          amount: parseFloat(formAmount),
        }
        addTrans(newTransaction);
        setText("");
        setAmount("");
  }
  return (
    <>
    <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="transactiontext">Text</label>
          <input type="text"value={formText} onChange={(e) => setText(e.target.value)}  placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={formAmount} onChange={(e) => setAmount(e.target.value)}  placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction;