const expensreducerdefaultarray = [];

export default (state = expensreducerdefaultarray, action) => {
  switch (action.type) {
    case "ADD_EXPENSES": {
      return [...state, action.expenses];
    }
    case "REMOVE_ID": {
      return state.filter(({ id }) => id !== action.id);
    }
    case "EDIT_EXPENSE": {
      return state.map(expenses => {
        if (expenses.id === action.id) {
          return {
            ...expenses,
            ...action.updets
          };
        } else {
          return expenses;
        }
      });
    }
    default:
      return state;
  }
};
