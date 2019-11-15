import moment from "moment";
import selectexpenses from "../../selector/getvisibleexpenses";
import expenses from "../fixture/expenses";

test("Should Selecter expenses prividet data", () => {
  const filters = {
    text: "e",
    shortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const selector = selectexpenses(expenses, filters);

  expect(selector).toEqual([expenses[2], expenses[1]]);
});

test("sholud filters by start date", () => {
  const filters = {
    text: "",
    shortBy: "date",
    startDate: moment(0),
    endDate: undefined
  };
  const selector = selectexpenses(expenses, filters);
  expect(selector).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("sholud filters by end date", () => {
  const filters = {
    text: "",
    shortBy: "date",
    startDate: undefined,
    endDate: moment(0).add(2, "days")
  };
  const selector = selectexpenses(expenses, filters);
  expect(selector).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("Should short by date", () => {
  const filters = {
    text: "",
    shortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const selector = selectexpenses(expenses, filters);
  expect(selector).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("Should short by amount", () => {
  const filters = {
    text: "",
    shortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const selector = selectexpenses(expenses, filters);
  expect(selector).toEqual([expenses[2], expenses[1], expenses[0]]);
});
