import React from "react";
import { shallow } from "enzyme";
import { Editexpenspage } from "../../components/Editexoenspage";
import expenses from "../fixture/expenses";

let editexpense, history, removeid, wrapper;

beforeEach(() => {
  editexpense = jest.fn();
  history = { push: jest.fn() };
  removeid = jest.fn();
  wrapper = shallow(
    <Editexpenspage
      editexpense={editexpense}
      history={history}
      removeid={removeid}
      expense={expenses[1]}
    />
  );
});

test("Should rend Edit Expenses page curectly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should handle submit", () => {
  wrapper.find("ExpensesFrom").prop("onSubmited")(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(editexpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test("Should remove an expenses", () => {
  wrapper.find("button").simulate("click");
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(removeid).toHaveBeenLastCalledWith(expenses[1].id);
});
