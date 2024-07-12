import React from "react";

const Dashboard = ({ transactions }) => {
  const balance = transactions.reduce((p, c) => p + c.amount, 0);

  const income = transactions
    .filter((item) => item.amount > 0)
    .reduce((p, c) => p + c.amount, 0);

  const expense = transactions
    .filter((item) => item.amount < 0)
    .reduce((p, c) => p + c.amount, 0);

  return (
    <div className="row g-3">
      <div className="col-md-4 col-sm-12">
        <div className="card p-3 bg-success text-light">
          <h2>Income</h2>
          <h1>{income}</h1>
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div className="card p-3 bg-danger text-light">
          <h2>Expense</h2>
          <h1>{expense}</h1>
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div className="card p-3 bg-warning text-light">
          <h2>Balance</h2>
          <h1>{balance}</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
