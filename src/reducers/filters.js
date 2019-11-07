const filterreducerdefaultarray = {
  text: "",
  shortBy: "date",
  startDate: undefined,
  endDate: undefined
};

export default (state = filterreducerdefaultarray, action) => {
  switch (action.type) {
    case "EDITTEXT_FILTER": {
      return {
        ...state,
        text: action.textupdate
      };
    }
    case "SHORTBY_AMOUNT": {
      return {
        ...state,
        shortBy: "amount"
      };
    }
    case "SHORTBY_DATE": {
      return {
        ...state,
        shortBy: "date"
      };
    }
    case "START_DATE": {
      return {
        ...state,
        startDate: action.startdate
      };
    }
    case "END_DATE": {
      return {
        ...state,
        endDate: action.enddate
      };
    }
    default:
      return state;
  }
};
