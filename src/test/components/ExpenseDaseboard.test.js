import React from "react";
import { shallow } from "enzyme";
import Examlemainpage from "../../components/examlemainpage";

test("Should render DaseBoardPage", () => {
  const wrapper = shallow(<Examlemainpage />);

  expect(wrapper).toMatchSnapshot();
});
