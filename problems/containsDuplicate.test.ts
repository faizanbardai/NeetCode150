import { describe, expect, it } from 'vitest'
import { containsDuplicate } from './containsDuplicate'

describe('containsDuplicate', () => {
  it('returns false when all values are unique', () => {
    expect(containsDuplicate([1, 2, 3])).toBe(false)
  })

  it('returns true when at least one value is unique', () => {
    expect(containsDuplicate([1, 1])).toBe(true)
  })

  it('returns true when at multiple unique values are present', () => {
    expect(containsDuplicate([1, 1, 2, 2])).toBe(true)
  })

  it('returns false for empty array', () => {
    expect(containsDuplicate([])).toBe(false)
  })
})
