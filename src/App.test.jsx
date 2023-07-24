import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

test('renders "API Github" heading', () => {
	render(<App />);
	const headingElement = screen.getByText("API Github");
	expect(headingElement).toBeInTheDocument();
});

test('renders input element with placeholder "usuario"', () => {
	render(<App />);
	const inputElement = screen.getByPlaceholderText("usuario");
	expect(inputElement).toBeInTheDocument();
});

test('renders link to "//repositories"', () => {
	render(<App />);
	const linkElement = screen.getByRole("link", { name: /repositories/i });
	expect(linkElement).toBeInTheDocument();
});
