import { useEffect } from 'react';
import './App.css';
import { AddTransaction } from './Components/AddTransaction';
import { Balance } from './Components/Balance';
import { Header } from './Components/Header';
import { IncomeExpense } from './Components/IncomeExpense';
import { TransactionList } from './Components/TransactionList';
import { TransactionProvider } from './Context/ContextProvider';
import { initNoti } from './firebase';


function App() {
  
  useEffect(() => {
    initNoti();
  }, []);

  return (
    <TransactionProvider>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </TransactionProvider>
  );
}

export default App;
