import React, { useContext, useState } from 'react';
import { TransactionContext } from '../Context/ContextProvider';

const AddTransaction = () => {

  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useContext(TransactionContext);

  const submitForm = (e) => {
    e.preventDefault();
    if (desc === "" || amount === "" || +amount === 0) {
      return alert(new Error("Please! Enter proper amount & description"))
    }
    addTransaction({
      desc,
      amount: Number(amount),
      id: Math.floor(Math.random() * 100000000)
    })
    setAmount("");
    setDesc("");
  }

  return (
    <>
      <h3>Add New Transaction</h3>
      <hr />
      <form className="add-transaction" onSubmit={submitForm}>
        <label >
          <b>Description</b> <br />
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </label>
        <br />
        <label >
          <b>Amount</b> <br />
          <span className="description">(negative-expense, positive-income)</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          <input className="submitBtn" type="submit" value="ADD TRANSACTION" />
        </label>
      </form>
    </>
  )
}

export { AddTransaction };
