// Test away

import React from 'react'
import { render } from '@testing-library/react'

import Dashboard from './Dashboard'

describe('dashboard component', () => {

  it('renders in default unlocked and open', () => {
    const { getByText } = render(<Dashboard />)

    getByText(/unlocked/i)
    getByText(/open/i)
  })
})