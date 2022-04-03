import react from "react";
import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [title, setEnteredTitle] = useState("");
  const [amount, setEnteredAmount] = useState("");
  const [date, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={title}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amount}
            type="number"
            min="0.1"
            step="0.1"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={date}
            type="date"
            min="2022-01-01"
            max="2023-01-01"
            onChange={dateChangeHandler}
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add expense</button>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancelHandler}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
