import { createStore, combineReducers } from "redux";
import expensreducer from "../reducers/expenses";
import filterreducer from "../reducers/filters";

export default () => {
  const stor = createStore(
    combineReducers({
      expenses: expensreducer,
      filters: filterreducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return stor;
};
