import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import UrlForm from './UrlForm.js'
import '@testing-library/jest-dom'

describe('UrlForm', () => {
  const objArr = [{
    id: 1,
    long_url: 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    short_url: 'http://localhost:3001/useshorturl/1',
    title: 'Awesome photo'
  }];

  it('should render all of the correct inputs to the dom', () => {
    const { getByRole, getAllByRole } = render(
      <UrlForm />
    )
    const titleInput = getAllByRole('textbox')
    const submitBtn = getByRole('button')
    expect(titleInput).toHaveLength(2)
    expect(submitBtn).toBeInTheDocument()
  })
  it('it should change the form accordingly if the values change', () => {
    const { getByLabelText, getByPlaceholderText, getByText, getByRole } = render(
      <UrlForm />
    )
      const titleInput = getByPlaceholderText('Title...')
      const urlInput = getByPlaceholderText('URL to Shorten...')
      const submitBtn = getByRole('button')
      fireEvent.change(titleInput, {target: {name: 'title', value: 'pleaseWORK'}})
      fireEvent.change(urlInput, {target: {name: 'urlToShorten', value: 'pleaseWORKAlso'}})
      fireEvent.click(submitBtn)
      expect(titleInput).toBeInTheDocument()
      expect(urlInput).toBeInTheDocument()
  })
  it('should fire the appropriate functions', () => {
    const { getByText, getByPlaceholderText, getByRole } = render(
      <UrlForm />
    )
    const titleInput = getByPlaceholderText('Title...')
      const urlInput = getByPlaceholderText('URL to Shorten...')
      const submitBtn = getByRole('button')
      fireEvent.change(titleInput, {target: {name: 'title', value: 'TestingInputs'}})
      fireEvent.change(urlInput, {target: {name: 'urlToShorten', value: 'pleaseWORKAlso'}})
      fireEvent.click(submitBtn)
      expect(titleInput.value).toHaveLength(0)
      expect(urlInput.value).toHaveLength(0)
  })
})