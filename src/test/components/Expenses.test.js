import React from "react";
import { shallow } from "enzyme";
import { ExpensesList } from "../../components/Expenseslist";
import expenses from "../fixture/expenses";

test("Should render expenses list", () => {
  const wrapper = shallow(<ExpensesList expenses={expenses} />);

  expect(wrapper).toMatchSnapshot();
});

test("Should render expense list with emty array", () => {
  const wrapper = shallow(<ExpensesList expenses={[]} />);

  expect(wrapper).toMatchSnapshot();
});
