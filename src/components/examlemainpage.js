import React from "react";
import ExpensesList from "./Expenseslist";
import Expenselistfilters from "./expenseslistfilter";

export const Examlemainpage = () => (
  <div>
    This is the Main Page Content
    <Expenselistfilters />
    <ExpensesList />
  </div>
);

export default Examlemainpage;
