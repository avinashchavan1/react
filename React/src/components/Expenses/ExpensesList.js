import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  let expensesContent = (
    <h2 className="expenses-list__fallback">No expenses Found</h2>
  );
  if (props.items.length === 0) {
    return expensesContent;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
