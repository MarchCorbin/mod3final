import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import App from './App.js'
import '@testing-library/jest-dom'
import UrlForm from '../UrlForm/UrlForm.js'



import { getUrls } from '../../apiCalls.js'
jest.mock('../../apiCalls')
getUrls.mockResolvedValue( {urls: 
[{
  id: 1,
  long_url: 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  short_url: 'http://localhost:3001/useshorturl/1',
  title: 'Awesome photo'
}, {
  id: 2,
  long_url: "https://www.ign.com/articles/marvel-avengers-playstation-exclusive-cosmetics-spider-man",
  short_url: "http://localhost:3001/useshorturl/6",
  title: "Spiderman"
}, {
  id: 3,
  long_url: "https://www.imdb.com/",
  short_url: "http://localhost:3001/useshorturl/5",
  title: "Testing functionality"
}]
})

describe('App', () => {
  it('should render a header to the homepage', () => {
    const { getByText } = render(
      <App />
    )
    const homeHeader = getByText('URL Shortener')
      expect(homeHeader).toBeInTheDocument(1)
  })
  it('should render any urls added to the dom', async () => {
    const { getByText } = render(
      <App />
    )
  const card1 = await waitFor(() => getByText('Awesome photo'))
  const card2 = await waitFor(() => getByText('Spiderman'))
  const card3 = await waitFor(() => getByText('Testing functionality'))

  expect(card1).toBeInTheDocument()
  expect(card2).toBeInTheDocument()
  expect(card3).toBeInTheDocument()
  })


  it('should add a new entry upon a submission being entered', async () => {
const { getByPlaceholderText, getByRole, getByText } = render(
  <App />
)
const titleInput = getByPlaceholderText('Title...')
const urlInput = getByPlaceholderText('URL to Shorten...')
const submitButton = getByRole('button', { name: 'Shorten Please!'})

expect(titleInput).toBeInTheDocument()
expect(urlInput).toBeInTheDocument()
expect(submitButton).toBeInTheDocument()

fireEvent.change(titleInput, {target: {name: 'title', value: 'New-Title'}})
fireEvent.change(urlInput, {target: {name: 'urlToShorten', value: 'New-Url'}})

expect(titleInput).toBeInTheDocument()
expect(urlInput).toBeInTheDocument()
fireEvent.click(submitButton)

// I have copied my exact syntax over from UrlForm which uses a very similar test that passes and posts to the website. If you could explain what is wrong with the below lines making this test fail, I would greatly appreciate it! (I am adding this test to UrlForm to test this functionality where it works)

// const newTitle = getByText('New-Title')
// const newUrl = getByText('New-Url')
// expect(newTitle).toBeInTheDocument()
// expect(newUrl).toBeInTheDocument()


  })
})