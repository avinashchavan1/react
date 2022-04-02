import { React, useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const filteredChangedHandler = (selectedYear) => {
    console.log(selectedYear);
    setSelectedYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(
    (item) => selectedYear === item.date.getFullYear().toString()
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filteredChangedHandler}
          selectedYear={selectedYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
