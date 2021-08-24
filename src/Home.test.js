import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Components/HomeComponent';

describe('Home Component',()=>{
test('renders adopt a pup on home page', () => {
  render(<BrowserRouter ><Home/></BrowserRouter>);
  const headingelement = screen.getByText(/Adopt a pup/,{exact: false});
  expect(headingelement).toBeInTheDocument();
});

test('renders PawsAbode presents Adoptathon!!!! on home page', () => {
  render(<BrowserRouter ><Home/></BrowserRouter>);
  const headingelement = screen.getByText(/PawsAbode presents Adoptathon!!!!/,{exact: false});
  expect(headingelement).toBeInTheDocument();
});

test('renders Sponsor a rescue on home page', () => {
  render(<BrowserRouter ><Home/></BrowserRouter>);
  const headingelement = screen.getByText(/Sponsor a rescue/,{exact: false});
  expect(headingelement).toBeInTheDocument();
});

});