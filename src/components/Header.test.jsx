import { render, fireEvent } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";

const MOCK_CART_DATA = [
  { id: "item1", title: "Awesome Item", size: "Medium", price: "$59.99" },
];

test("renders cart title and toggles cart visibility on click", () => {
  const { getByText, queryByText } = render(<Header cart={MOCK_CART_DATA} />);

  expect(getByText("My Cart")).toBeInTheDocument();

  expect(queryByText("Awesome Item")).not.toBeInTheDocument();

  fireEvent.click(getByText("My Cart"));

  expect(queryByText("Awesome Item")).toBeInTheDocument();
});
