import React from "react";
import { shallow } from "enzyme";
import ExpensesFrom from "../../components/expensesFrom";
import expenses from "../fixture/expenses";
import moment from "moment";

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

test("Should set amount for valid input", () => {
  const value = "12.90";
  const wrapper = shallow(<ExpensesFrom />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", { target: { value } });
  expect(wrapper.state("amount")).toBe(value);
});

test("Should set amount for invalid input", () => {
  const value = "12.122";
  const wrapper = shallow(<ExpensesFrom />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", { target: { value } });
  expect(wrapper.state("amount")).toBe("");
});

test("Should Call onsubmit with valid submision", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpensesFrom expense={expenses[0]} onSubmited={onSubmitSpy} />
  );
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    decription: expenses[0].decription,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  });
});

test("Should set new date on date change", () => {
  const now = moment();
  const wrapper = shallow(<ExpensesFrom />);
  wrapper.find("SingleDatePicker").prop("onDateChange")(now);
  expect(wrapper.state("createdAt")).toEqual(now);
});

test("Should set calender on focus change", () => {
  const focused = true;
  const wrapper = shallow(<ExpensesFrom />);
  wrapper.find("SingleDatePicker").prop("onFocusChange")({ focused });
  expect(wrapper.state("calenderFocus")).toBe(focused);
});
