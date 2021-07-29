import React, { useContext } from 'react';
import { TransactionContext } from '../Context/ContextProvider';


const Transaction = ({ transaction }) => {

  const { deleteTransaction } = useContext(TransactionContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "red" : "green"}>
      <span> {transaction.desc}</span >
      <span>{sign}${Math.abs(transaction.amount)}</span>
      <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li >
  )
}

export { Transaction };