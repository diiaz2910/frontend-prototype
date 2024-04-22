import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartItem from "./CartItem";

const MOCK_ITEM_DATA = {
  imageURL: "https://mywebsite.com/products/image1.jpg",
  title: "Awesome Item",
  size: "Medium",
  price: "$59.99",
};

test("renders item details", () => {
  const { getByAltText, getByText } = render(
    <CartItem item={MOCK_ITEM_DATA} onRemoveItemClick={() => {}} />
  );

  expect(getByAltText("Awesome Item")).toBeInTheDocument();
  expect(getByText("Awesome Item")).toBeInTheDocument();
  expect(getByText("Size: Medium")).toBeInTheDocument();
  expect(getByText("Price: $59.99")).toBeInTheDocument();
});

test("calls onRemoveItemClick when remove button is clicked", () => {
  const onRemoveItemClick = jest.fn();
  const { getByText } = render(
    <CartItem item={MOCK_ITEM_DATA} onRemoveItemClick={onRemoveItemClick} />
  );

  fireEvent.click(getByText("Remove"));

  expect(onRemoveItemClick).toHaveBeenCalledWith(MOCK_ITEM_DATA);
});
