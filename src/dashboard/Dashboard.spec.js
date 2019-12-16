// Test away

import React from 'react'
import { render, fireEvent, getByText } from '@testing-library/react'

import Dashboard from './Dashboard'

describe('dashboard component', () => {

  it('renders in default unlocked and open', () => {
    const { getByText } = render(<Dashboard />)

    getByText(/unlocked/i)
    getByText(/open/i)
  })
})

test('toggle Closed button responsive to click when unlocked', () => {
  const { getByText, getByTestId } = render(<Dashboard />)
  getByText(/close gate/i)

  fireEvent.click(getByTestId('toggleClose'))

  getByText(/open gate/i)
})

test('toggle Closed button unresponsive to click when locked', () => {
  const { getByText, getByTestId } = render(<Dashboard />)

  fireEvent.click(getByTestId('toggleClose'))
  fireEvent.click(getByTestId('toggleLock'))

  getByText(/close/i)

  fireEvent.click(getByTestId('toggleClose'))

  getByText(/close/i)
})

test('toggle Lock button responsive to click when closed', () => {
  const dashboard = render(<Dashboard />)

    // { getByTestId, getByText, setState }
    // dashboard.setState({ closed: true })
    dashboard.getByText(/unlocked/i)

    fireEvent.click(dashboard.getByTestId('toggleClose'))
    fireEvent.click(dashboard.getByTestId('toggleLock'))

    dashboard.getByText(/locked/i)
})

test('toggle Lock button unresponsive to click when open', () => {

  const { getByTestId, getByText } = render(<Dashboard />)

  getByText(/unlocked/i)

  fireEvent.click(getByTestId('toggleLock'))

  getByText(/unlocked/i)
})