import React from "react";
import { shallow } from "enzyme";
import Notfoundpage from "../../components/notfound";

test("Should render not found page", () => {
  const wrapper = shallow(<Notfoundpage />);

  expect(wrapper).toMatchSnapshot();
});
