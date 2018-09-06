import * as React from "react";
import { create } from "react-test-renderer";
import Emg from "../src/emg";
import ExampleImg from "./images/example.png";

test("image should rendered", () => {
  const component = create(<Emg src={ExampleImg} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
