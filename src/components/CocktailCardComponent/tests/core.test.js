import React from 'react'
import {render, cleanup, screen } from '@testing-library/react'
import CocktailCards from '../index'   

afterEach(cleanup)

it('it does not have data', () => {
    render(<CocktailCards />);
    const checkImage = screen.getByTestId('cocktailPicture').getAttribute("alt")
    expect(checkImage).toBe('noImage')
});

it('it does have data', () => {
    render(<CocktailCards/>);
    const checkImage = screen.getByTestId('cocktailPicture')
    expect(checkImage).toBeInTheDocument()
});

it('it does not have text', () => {
    render(<CocktailCards />);
    const checktext = screen.getByTestId('cocktailTitle').getAttribute("title")
    expect(checktext).toBe('noText')
});

it('it does have text', () => {
    render(<CocktailCards/>);
    const checktext = screen.getByTestId('cocktailTitle')
    expect(checktext).toBeInTheDocument()
});