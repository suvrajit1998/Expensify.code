import React from "react";
import ExpensesList from "./Expenseslist";
import Expenselistfilters from "./expenseslistfilter";

const Examlemainpage = () => (
  <div>
    This is the Main Page Content
    <Expenselistfilters />
    <ExpensesList />
  </div>
);

export default Examlemainpage;
