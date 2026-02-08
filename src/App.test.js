// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ManticoreCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ManticoreCore/i);
    expect(titleElement).toBeInTheDocument();
});
