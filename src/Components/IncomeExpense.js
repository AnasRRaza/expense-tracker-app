import React, { useContext } from 'react';
import { TransactionContext } from '../Context/ContextProvider';

const IncomeExpense = () => {

  const { transactions } = useContext(TransactionContext);

  const totalIncome = () => {
    let income = 0;
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) {
        income += transactions[i].amount;
      }
    }
    return income;
  }

  const totalExpense = () => {
    let expense = 0;
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) {
        expense += -transactions[i].amount;
      }
    }
    return expense;
  }

  return (
    <>
      <div className="expense-container">
        <h3>INCOME <br /><span className="income">{totalIncome().toFixed(2)}</span></h3>
        <h3>EXPENSE <br /><span className="expense">{totalExpense().toFixed(2)}</span></h3>
      </div>
    </>
  )
}

export { IncomeExpense };
