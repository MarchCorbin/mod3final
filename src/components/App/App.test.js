import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import App from './App.js'
import '@testing-library/jest-dom'
import { getUrls } from '../../apiCalls.js'


getUrls.mockResolvedValue = [{
  id: 1,
  long_url: 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  short_url: 'http://localhost:3001/useshorturl/1',
  title: 'Awesome photo'
}];

describe('App', () => {
  it('should render a header to the homepage', () => {
    const { getByText } = render(
      <App />
    )
    const homeHeader = getByText('URL Shortener')
      expect(homeHeader).toBeInTheDocument(1)
  })
  // it('should render any urls added to the dom', () => {
  //   const { getAllByRole } = render(
  //     <App />
  //   )
  
  // })
})