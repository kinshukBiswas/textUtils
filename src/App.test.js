import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Navbar title", () => {
  render(<App />);
  const titleElement = screen.getByText(/React Js/i);
  expect(titleElement).toBeInTheDocument();
});
