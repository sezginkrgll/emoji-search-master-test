import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import App from "../App";
import emojiList from "../emojiList.json";

describe("Emoji Search Test", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("Emoji list render", () => {
    const sliceList = emojiList.slice(0, 20);
    sliceList.map((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  test("render after filter", () => {
    const input = screen.getByRole("textbox"); // Inputa Ulaşmak için.
    const text = "Regional Indicator a"; // Inputa yazılacak değer.
    fireEvent.change(input, { target: { value: text } }); // Inputa değer girer.
    expect(input).toHaveValue(text); // Inputun değerini kontrol eder.

    const items = screen.getAllByText(/Regional Indicator/i); // Regional Indicator yzan bütün yazıları seçer
    expect(items.length).toEqual(1); // items elemman sayısının 1'e eşit mi olduğunu kontrol ederiz
  });

  test("copy to clickboard test", async () => {
    const copy = screen.getByText("100");
    expect(copy.parentElement).toHaveAttribute("data-clipboard-text", "💯");
  });
});
