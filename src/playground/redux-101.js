import { createStore } from "redux";
import { type } from "os";

const incrementcount = (payload = {}) => ({
  type: "INCREMENT",
  incrementBy: typeof payload.incrementBy === "number" ? payload.incrementBy : 1
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const setCount = ({ setdefault = 1 }) => ({
  type: "SET",
  setdefault
});

const resetCount = ({ resetdefault = 1 }) => ({
  type: "RESET",
  resetdefault
});

const countreducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };

    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };

    case "RESET":
      return {
        count: action.resetdefault
      };

    case "SET":
      return {
        count: action.setdefault
      };

    default:
      return state;
  }
};

const stor = createStore(countreducer);

const unsubscribe = stor.subscribe(() => {
  console.log(stor.getState());
});

stor.dispatch(incrementcount({ incrementBy: 5 }));

stor.dispatch(incrementcount());
stor.dispatch(resetCount({ resetdefault: 0 }));

stor.dispatch(decrementCount());

stor.dispatch(decrementCount({ decrementBy: 10 }));

stor.dispatch(setCount({ setdefault: 101 }));
