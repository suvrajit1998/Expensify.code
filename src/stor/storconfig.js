import { createStore, combineReducers } from "redux";
import expensreducer from "../reducers/expenses";
import filterreducer from "../reducers/filters";

export default () => {
  const stor = createStore(
    combineReducers({
      expenses: expensreducer,
      filters: filterreducer
    })
  );

  return stor;
};
