import React from "react";
import { shallow } from "enzyme";
import NotFound from "../../components/NotFound";
import { newUser } from "../fixtures/users";

test("should render NotFoundPage correctly", () => {
  const wrapper = shallow(<NotFound />);

  expect(wrapper).toMatchSnapshot();
});
