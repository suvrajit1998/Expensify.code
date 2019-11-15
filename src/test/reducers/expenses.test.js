import selectexpenses from "../../reducers/expenses";
import expenses from "../fixture/expenses";

test("Should set default state", () => {
  const state = selectexpenses(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("Should remove expenses by id", () => {
  const action = {
    type: "REMOVE_ID",
    id: expenses[1].id
  };
  const state = selectexpenses(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("Should not remove expenses by id", () => {
  const action = {
    type: "REMOVE_ID",
    id: -1
  };
  const state = selectexpenses(expenses, action);

  expect(state).toEqual(expenses);
});

test("Should add an expenses", () => {
  const action = {
    id: "4",
    decription: "Milk",
    amount: 2656,
    note: "",
    createdAt: 0
  };
  const state = selectexpenses(expenses, { type: "ADD_EXPENSES", action });

  expect(state).toEqual([expenses[0], expenses[1], expenses[2], expenses[3]]);
});

test("Should not edit an expenses if no updates there", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[2].id,
    updets: {}
  };

  const state = selectexpenses(expenses, action);

  expect(state[2].decription).toBe("credit card");
});
