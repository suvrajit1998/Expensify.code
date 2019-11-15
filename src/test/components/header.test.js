import { shallow } from "enzyme";
import React from "react";
import Header from "../../components/header";

test("Should render curectly Header", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
