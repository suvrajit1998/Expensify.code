import { addexpense, removeid, editexpense } from "../../action/expenses";

test("Should Remove id", () => {
  const action = removeid({ id: "123xyz" });
  expect(action).toEqual({
    type: "REMOVE_ID",
    id: "123xyz"
  });
});

test("Sholud editexpenses", () => {
  const action = editexpense("123abc", { note: "This is my note" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updets: {
      note: "This is my note"
    }
  });
});

test("should Add expenses for provide data", () => {
  const expensedata = {
    decription: "SomeOne",
    amount: 45490,
    createdAt: 1000,
    note: "This is Another note"
  };
  const action = addexpense(expensedata);
  expect(action).toEqual({
    type: "ADD_EXPENSES",
    expenses: {
      ...expensedata,
      id: expect.any(String)
    }
  });
});

// test("Should add espense for default value", () => {
//   const action = addexpense();
//   expect(action).toEqual({
//     type: "ADD_EXPENSES",
//     expenses: {
//       id: expect.any(String),
//       decription: "",
//       note: "",
//       amount: 0,
//       createdAt: 0
//     }
//   });
// });

test("Should add cxpenses for default values", () => {
  const action = addexpense();
  expect(action).toEqual({
    type: "ADD_EXPENSES",
    expenses: {
      id: expect.any(String),
      decription: "",
      amount: 0,
      createdAt: 0,
      note: ""
    }
  });
});
