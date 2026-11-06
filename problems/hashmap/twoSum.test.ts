import { describe, expect, it } from 'vitest'
import { twoSum } from './twoSum'

describe('Two Sum', () => {
  it('returns the correct indexes if the target is found', () => {
    expect(twoSum([15, 7, 2, 11], 9)).toEqual([1, 2])
  })
  it('returns false if the target is not found', () => {
    expect(twoSum([15, 7, 3, 11], 9)).toBe(false)
  })
  it('returns false for empty array', () => {
    expect(twoSum([], 9)).toBe(false)
  })
})
