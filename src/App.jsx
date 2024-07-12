import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Dashboard from "./component/Dashboard";
import ListGroup from "./component/ListGroup";
import Form from "./component/Form";


const App = () => {
  const [transactions, setTransactions] = useState([]);

  const [edit, setEdit] = useState({
    transaction: {},
    isEdit: false,
  });

  // Save Transaction

  const saveTransaction = (text, amount) => {
    const newTransaction = {
      id: crypto.randomUUID(),
      text,
      amount: parseInt(amount),
    };

    setTransactions([newTransaction, ...transactions]);
  };

  // Delete Transaction

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((item) => {
        if (item.id !== id) {
          return true;
        }
      })
    );

    setTransactions(transactions.filter((item) => item.id !== id));
  };

  const editTransaction = (oldTransaction) => {
    setEdit({
      transaction: oldTransaction,
      isEdit: true,
    });
  };

  const updateTransaction = (updatedTransaction) => {
    console.log(updatedTransaction);

    setTransactions(
      transactions.map((item) =>
        item.id === updatedTransaction.id ? updatedTransaction : item
      )
    );

    setEdit({ transaction: {}, isEdit: false });
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid p-5">
        <Dashboard transactions={transactions} />
        <Form
          saveTransaction={saveTransaction}
          edit={edit}
          updateTransaction={updateTransaction}
        />
        <ListGroup
          transactions={transactions}
          deleteTransaction={deleteTransaction}
          editTransaction={editTransaction}
        />
      </div>
    </>
  );
};

export default App;
