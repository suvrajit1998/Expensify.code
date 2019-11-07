import uuid from "uuid";

export const addexpense = ({
  decription = "",
  note = "",
  amount = 0,
  createdAt = 0
}) => ({
  type: "ADD_EXPENSES",
  expenses: {
    id: uuid(),
    decription,
    note,
    amount,
    createdAt
  }
});

export const removeid = ({ id } = {}) => ({
  type: "REMOVE_ID",
  id
});

export const editexpense = (id, updets) => ({
  type: "EDIT_EXPENSE",
  id,
  updets
});
