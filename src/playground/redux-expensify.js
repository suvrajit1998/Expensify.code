import { createStore, combineReducers } from "redux";
import uuid from "uuid";

stor.subscribe(() => {
  const state = stor.getState();
  const getvisibleexpenses = getvisibleExpenses(state.expenses, state.filters);
  console.log(getvisibleexpenses);
});

const expenseone = stor.dispatch(
  addexpense({ decription: "Rent", amount: 100, createdAt: -21000 })
);
const expenstwo = stor.dispatch(
  addexpense({ decription: "Coffee", amount: 300, createdAt: -1000 })
);

// console.log(expenstwo);

// stor.dispatch(removeid({ id: expenseone.expenses.id }));
// stor.dispatch(editexpense(expenstwo.expenses.id, { amount: 500 }));

// stor.dispatch(settextfilter("r"));
// stor.dispatch(settextfilter(""));

stor.dispatch(shortByamount());
// stor.dispatch(shortBydate());

// stor.dispatch(setstartdate(999));
// stor.dispatch(setstartdate());
// stor.dispatch(setenddate(1000));

const demostate = {
  expenses: [
    {
      id: "hdisderewbre",
      decription: "January rent",
      note: "This was the final payment for the address",
      amount: 5400,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    shortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
};

// const user = {
//   name: "suvra",
//   id: 88
// };

// console.log({
//   id: 90,
//   ...user,
//   location: "kolkata"
// });
