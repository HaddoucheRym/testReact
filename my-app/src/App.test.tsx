import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  //rendu du composant dans le test bed (conteneur de test)
  const linkElement = screen.getByText(/learn react/i);
  //recup de l'element qui contient le test "learn react" 'regexp)
  expect(linkElement).toBeInTheDocument();
  //on teste que l'element est present dans le DOM
});
