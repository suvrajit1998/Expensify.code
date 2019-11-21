import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/style.scss";
import "react-dates/lib/css/_datepicker.css";
import Approuter from "./routers/Approuter";
import storconfig from "./stor/storconfig";
import { Provider } from "react-redux";
import { addexpense } from "./action/expenses";
import { settextfilter } from "./action/filters";
import getvisibleexpenses from "./selector/getvisibleexpenses";

const stor = storconfig();

// stor.dispatch(addexpense({ decription: "water bill", amount: 600 }));
// stor.dispatch(addexpense({ decription: "gas bill", createdAt: 1000 }));
// stor.dispatch(addexpense({ decription: "foods bill", amount: 10900 }));

// stor.dispatch(settextfilter("Water"));

// setTimeout(() => {
//   stor.dispatch(settextfilter("bill"));
// }, 3000);

// const state = stor.getState();
// const getvisibleExpenses = getvisibleexpenses(state.expenses, state.filters);
// console.log(getvisibleExpenses);

const gsx = (
  <Provider store={stor}>
    <Approuter />
  </Provider>
);

ReactDOM.render(gsx, document.getElementById("something"));
