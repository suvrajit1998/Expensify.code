import moment from "moment";
import filterreducers from "../../reducers/filters";

test("Should setup default filter value", () => {
  const state = filterreducers(undefined, { type: "@@INIT" });

  expect(state).toEqual({
    text: "",
    shortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("Should filter by amount", () => {
  const state = filterreducers(undefined, { type: "SHORTBY_AMOUNT" });

  expect(state.shortBy).toBe("amount");
});

test("Should filter by date", () => {
  const currentstate = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    shortBy: "amount"
  };
  const state = filterreducers(currentstate, { type: "SHORTBY_DATE" });

  expect(state.shortBy).toBe("date");
});

test("Should set text filters", () => {
  const text = "Someone";

  const action = {
    type: "EDITTEXT_FILTER",
    text
  };

  const state = filterreducers(undefined, action);

  expect(state.text).toBe(undefined);
});

test("Should set start date by filter", () => {
  const startDate = moment();
  const action = {
    type: "START_DATE",
    startDate
  };

  const state = filterreducers(undefined, action);

  expect(state.startDate).toEqual(undefined);
});

test("Should set end date by filter", () => {
  const endDate = moment();
  const action = {
    type: "END_DATE",
    endDate
  };

  const state = filterreducers(undefined, action);

  expect(state.endDate).toEqual(undefined);
});
