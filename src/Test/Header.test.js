import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "../Header";

test("Emoji Search dökümanda bulunmalı", () => {
  render(<Header />);

  const text = screen.getByText("Emoji Search");
  expect(text).toBeInTheDocument();
  
  const images = screen.getAllByRole("img");
  expect(images[0]).toHaveAttribute(
    "src",
    "//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
  );
  expect(images[1]).toHaveAttribute(
    "src",
    "//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
  );
});
