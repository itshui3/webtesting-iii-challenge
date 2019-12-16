// Test away!

import React from 'react'
import { render } from '@testing-library/react'

import Display from './Display'
// test 

test('gate defaults unlock', () => {
  const { getByText } = render(<Display />)

  getByText(/unlocked/i)
  getByText(/open/i)
})