import React from "react";
import { shallow } from "enzyme";
import IndexPage from "../../components/IndexPage";
import { newUser } from "../fixtures/users";

test("should render IndexPage correctly", () => {
  const wrapper = shallow(<IndexPage />);

  expect(wrapper).toMatchSnapshot();
});
