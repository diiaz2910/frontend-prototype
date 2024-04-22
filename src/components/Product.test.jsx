import { render, fireEvent } from "@testing-library/react";
import Product from "./Product";
import "@testing-library/jest-dom";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

const MOCK_PRODUCT_DATA = {
  imageURL: "https://mywebsite.com/products/image1.jpg",
  title: "Awesome Product",
  price: "$59.99",
  sizeOptions: [
    { id: "size1", label: "S" },
    { id: "size2", label: "M" },
    { id: "size3", label: "L" },
  ],
};

test("renders product details and handles size selection and add to cart", async () => {
  const setCart = jest.fn();

  fetch.mockResponseOnce(JSON.stringify(MOCK_PRODUCT_DATA));

  const { getByText, queryByText, findByText } = render(
    <Product setCart={setCart} />
  );

  await findByText("Awesome Product");

  fireEvent.click(getByText("M"));

  expect(queryByText("Size: M")).toBeInTheDocument();

  fireEvent.click(getByText("ADD TO CART"));

  expect(setCart).toHaveBeenCalledWith(expect.any(Function));
});
