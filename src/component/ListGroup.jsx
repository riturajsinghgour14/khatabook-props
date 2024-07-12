import React from "react";
import ListItem from "./ListItem";

const ListGroup = ({ transactions, deleteTransaction, editTransaction }) => {
  return (
    <div className="card p-3 my-3">
      <h3 className="text-secondary">All Transactions:</h3>
      <ul className="my-3 list-group">
        {transactions.map((transaction) => (
          <ListItem
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
            editTransaction={editTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
