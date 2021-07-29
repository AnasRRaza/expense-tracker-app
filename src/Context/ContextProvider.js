import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

// Initial State

const initialState = {
  transactions: [
    // { id: 1, amount: -200, desc: "Watch" },
    // { id: 2, amount: 500, desc: "Shirt" },
    // { id: 3, amount: 650, desc: "Shoes" },
    // { id: 4, amount: -150, desc: "Cap" }
  ]
}

// Create Context

export const TransactionContext = createContext(initialState);

// Provider Component 

export const TransactionProvider = ({ children }) => {

  let [state, dispatch] = useReducer(AppReducer, initialState);

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    })
  }

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }


  return (
    <TransactionContext.Provider value={{
      transactions: state.transactions,
      addTransaction,
      deleteTransaction
    }}>
      {children}
    </TransactionContext.Provider>
  )

}