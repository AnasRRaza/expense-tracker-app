import React, { useContext } from 'react'
import { TransactionContext } from '../Context/ContextProvider';


const Balance = () => {

  const { transactions } = useContext(TransactionContext);

  const totalAmount = () => {
    let total = 0;
    for (let i = 0; i < transactions.length; i++) {
      total += transactions[i].amount;
    }
    return total;
  }

  return (
    <>
      <h4 className="inline balance">Your Balance </h4>
      <br />
      <h2 className="inline"> ${totalAmount().toFixed(2)}</h2>
    </>
  )
}

export { Balance };
