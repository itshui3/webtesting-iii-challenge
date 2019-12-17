// Test away!

import React from 'react'
import { render } from '@testing-library/react'

import Display from './Display'
// pass in closed/locked props
// assert expectations

test('Display renders snapshot', () => {
  const { asFragment } = render(<Display />)

  expect(asFragment()).toMatchSnapshot()
})

test('gate defaults as unlocked and opened', () => {
  const { getByText } = render(<Display />)

  getByText(/unlocked/i)
  getByText(/open/i)
})

describe('gate locking and unlocking', () => {
  test('gate locked', () => {
    const { getByText, queryByText } = render(<Display locked={true} />)

    expect(queryByText(/unlocked/i)).toBeNull()
    getByText(/locked/i)
  })
  test('locked gate displays red-led', () => {
    const { getByText } = render(<Display locked={true} />)

    expect(getByText(/locked/i).className).toBe('led red-led')
  })

  test('gate unlocked', () => {
    const { getByText, queryByText } = render(<Display locked={false} />)

    getByText(/unlocked/i)
  })
  test('unlocked gate displays green-led', () => {
    const { getByText } = render(<Display locked={false} />)

    expect(getByText(/unlocked/i).className).toBe('led green-led')
  })
})

describe('gate opening and closing', () => {
  test('gate renders closed', () => {
    const { getByText, queryByText } = render(<Display closed={true} />)

    getByText(/closed/i)
    expect(queryByText(/open/i)).toBeNull()
  })

  test('gate displays red-led when closed', () => {
    const { getByText } = render(<Display closed={true} />)

    expect(getByText(/closed/i).className).toBe('led red-led')
  })

  test('gate renders open', () => {
    const { getByText, queryByText } = render(<Display closed={false} />)

    getByText(/open/i)
    expect(queryByText(/closed/i)).toBeNull()
  })

  test('gate displays green-led when open', () => {
    const { getByText } = render(<Display closed={false} />)

    expect(getByText(/open/i).className).toBe('led green-led')
  })

})

