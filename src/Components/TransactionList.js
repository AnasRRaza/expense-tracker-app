import React, { useContext } from 'react'
import { TransactionContext } from '../Context/ContextProvider';
import { Transaction } from './Transaction';

const TransactionList = () => {

  const { transactions } = useContext(TransactionContext);

  return (
    <>
      <h3>History</h3>
      <hr />
      <ul className="expense-list">
        {
          transactions.map((transactionValue) => {
            return (
              <Transaction key={transactionValue.id} transaction={transactionValue} />
            )
          })
        }
      </ul>
    </>
  )
}

export { TransactionList };
