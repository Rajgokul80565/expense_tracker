// import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import GlobalProvider from './contexts/GlobalState';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <GlobalProvider>
      <Header />
      <div className="container">
          <Balance />
          <IncomeExpense/>
          <TransactionList/>
          <AddTransaction/>
      </div>

    </GlobalProvider>
   
 
  )
}

export default App
