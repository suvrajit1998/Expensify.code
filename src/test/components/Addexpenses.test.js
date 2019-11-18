import React from "react";
import { shallow } from "enzyme";
import { Examlecreatpage } from "../../components/examlecreatpage";
import expenses from "../fixture/expenses";

let addexpense, history, wrapper;

beforeEach(() => {
  addexpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <Examlecreatpage addexpense={addexpense} history={history} />
  );
});

test("Should render Addexpenses curectly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should handle submit", () => {
  wrapper.find("ExpensesFrom").prop("onSubmited")(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(addexpense).toHaveBeenLastCalledWith(expenses[1]);
});
