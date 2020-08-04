import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import UrlContainer from './UrlContainer'
import '@testing-library/jest-dom'


describe('UrlContainer', () => {
 const objArr = [{
      id: 1,
      long_url: 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      short_url: 'http://localhost:3001/useshorturl/1',
      title: 'Awesome photo'
    }];
  

    it('should render heading and anchor tags', () => {
      const {  getByRole } = render(
        <UrlContainer urls={objArr} />
      )
      const heading = getByRole('heading')
      const anchors = getByRole('link')
        expect(heading).toBeInTheDocument()
        expect(anchors).toBeInTheDocument()
    })
})
