import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("<Dropdown />", () => {
  test("render the dropdown component", () => {
    render(<Dropdown />);
  });
});
