import React, { useEffect, useState } from "react";

const Form = ({ saveTransaction, edit, updateTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit.isEdit) {
      updateTransaction({
        id: edit.transaction.id,
        text: text,
        amount: parseInt(amount),
      });
    } else {
      saveTransaction(text, amount);
    }

    setText("");
    setAmount("");
  };

  useEffect(() => {
    setText(edit.transaction.text);
    setAmount(edit.transaction.amount);
  }, [edit]);

  return (
    <div className="card p-4 my-3">
      <h3 className="text-center text-secondary my-3">
        Enter Your Transaction Details
      </h3>
      <form className="my-3" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter Text"
          className="form-control my-2"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <input
          type="number"
          placeholder="Enter Amount"
          className="form-control my-2"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <button className="btn btn-success w-100">Save</button>
      </form>
    </div>
  );
};

export default Form;
