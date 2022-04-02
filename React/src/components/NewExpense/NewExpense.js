import { react, useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [addNewExpenseButton, setAddNewExpenseButton] = useState(true);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random(),
    };
    props.onAddExpense(expenseData);
    buttonClickHandler();
  };
  const buttonClickHandler = () => {
    setAddNewExpenseButton((prevState) => !prevState);
  };
  return (
    <div className="new-expense">
      {addNewExpenseButton && (
        <button onClick={buttonClickHandler}>Add New Expense</button>
      )}
      {!addNewExpenseButton && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelHandler={buttonClickHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
