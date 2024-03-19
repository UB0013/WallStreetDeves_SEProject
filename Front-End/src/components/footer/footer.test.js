import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  test("renders footer correctly", () => {
    render(<Footer />);

    // Assert that the footer text parts are rendered
    const yearText = screen.getByText(/@2024/i);
    expect(yearText).toBeInTheDocument();

    const universityText = screen.getByText(/University of North Texas/i);
    expect(universityText).toBeInTheDocument();

    const rightsText = screen.getByText(/All Rights Reserved/i);
    expect(rightsText).toBeInTheDocument();

    // Assert that the Terms of Use link is rendered
    const termsOfUseLink = screen.getByText(/Terms of Use/i);
    expect(termsOfUseLink).toBeInTheDocument();

    // Assert that the Privacy link is rendered
    const privacyLink = screen.getByText(/Privacy /i);
    expect(privacyLink).toBeInTheDocument();
  });
});
