import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { prettyDOM, fireEvent } from "@testing-library/react";
import { render } from "@testing-library/react";
import Search from "./Search";
import { Provider } from "react-redux";
import store from "../../store/index";
test("Have the selected placeholder", () => {
  const component = render(
    <Provider store={store}>
      <Search />
    </Provider>
  );
  component.getByPlaceholderText("Ingresá tu Pokemon");
});

test("the input changes", () => {
  const component = render(
    <Provider store={store}>
      <Search />
    </Provider>
  );

  fireEvent.change(component.getByPlaceholderText("Ingresá tu Pokemon"), {
    target: {
      value: "Pikachu",
    },
  });
  expect(component.getByPlaceholderText("Ingresá tu Pokemon").value).toBe(
    "Pikachu"
  );
});

test("the input changes2", () => {
  const component = render(
    <Provider store={store}>
      <Search />
    </Provider>
  );

  fireEvent.change(component.getByPlaceholderText("Ingresá tu Pokemon"), {
    target: {
      value: "Mew",
    },
  });
  expect(component.getByPlaceholderText("Ingresá tu Pokemon").value).toBe(
    "Mew"
  );
});
