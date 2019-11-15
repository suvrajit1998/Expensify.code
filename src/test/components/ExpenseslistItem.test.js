import React from "react";
import { shallow } from "enzyme";
import ExpensesItem from "../../components/expenselistitem";
import expenses from "../fixture/expenses";

test("Should render ExpenseListItem with Expenses", () => {
  const wrapper = shallow(<ExpensesItem {...expenses[1]} />);

  expect(wrapper).toMatchSnapshot();
});
