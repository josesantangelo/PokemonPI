import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Pokemons from "./components/pokemons/Pokemons";

describe("Pokemons", () => {
  it("must display a title", () => {
    render(<App />);
    expect(screen.queryByText(/soy el title/i)).toBeInTheDocument();
  });
});
