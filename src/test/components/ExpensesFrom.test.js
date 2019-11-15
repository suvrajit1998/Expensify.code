import React from "react";
import { shallow } from "enzyme";
import ExpensesFrom from "../../components/expensesFrom";
import expenses from "../fixture/expenses";

test("Should reneder Expenses Form curectly", () => {
  const wrapper = shallow(<ExpensesFrom />);

  expect(wrapper).toMatchSnapshot();
});

test("Should render Expenses Form with some data", () => {
  const wrapper = shallow(<ExpensesFrom expense={expenses[1]} />);

  expect(wrapper).toMatchSnapshot();
});

test("Should render Expenses form for invalid form submision", () => {
  const wrapper = shallow(<ExpensesFrom />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("Should set describtion in input curectly", () => {
  const value = "New Describtion";
  const wrapper = shallow(<ExpensesFrom />);
  wrapper
    .find("input")
    .at(0)
    .simulate("change", { target: { value } });
  expect(wrapper.state("decription")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test("Should set note in textaria curectly", () => {
  const value = "This is my note";
  const wrapper = shallow(<ExpensesFrom />);
  wrapper.find("textarea").simulate("change", { target: { value } });
  expect(wrapper.state("note")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});
