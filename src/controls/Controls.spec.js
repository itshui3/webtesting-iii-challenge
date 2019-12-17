// Test away!

import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Controls from './Controls'

test('Controls renders snapshot', () => {
  const { asFragment } = render(<Controls />)

  expect(asFragment()).toMatchSnapshot()
})

describe('button to toggle locked state', () => {

  test('rendered button reads "unlock gate" if gate is locked', () => {
    const { getByText } = render(<Controls locked={true} />)
    getByText(/unlock gate/i)
  })
  test('rendered button reads "lock gate" if gate is unlocked', () => {
    const { getByText } = render(<Controls locked={false} />)
    getByText(/lock gate/i)
  })
})

describe('the being of "locked" state', () => {

  test('if locked is true, gate cannot be closed or opened', () => {
    const { getByTestId } = render(<Controls locked={true} />)
    expect(getByTestId('toggleClose').disabled).toBe(true)
  })

  test('if locked is false, gate can be opened and closed', () => {
    const { getByTestId } = render(<Controls locked={false} />)
    expect(getByTestId('toggleClose').disabled).toBe(false)
  })

})

describe('the being of "closed" state', () => {

  test('if opened, gate cannot be locked', () => {
    const { getByTestId } = render(<Controls closed={false} />)
    expect(getByTestId('toggleLock').disabled).toBe(true)
  })

  test('if closed, gate can be locked and unlocked', () => {
    const { getByTestId } = render(<Controls closed={true} />)
    expect(getByTestId('toggleLock').disabled).toBe(false)
  })

})


