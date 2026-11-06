import { describe, expect, it } from 'vitest'
import { validAnagram } from './validAnagram'

describe('validAnagram', () => {
  it('returns true for valid anagrams', () => {
    expect(validAnagram('cat', 'tac')).toBe(true)
    expect(validAnagram('apple', 'pplea')).toBe(true)
  })
  it('returns false for invalid anagrams', () => {
    expect(validAnagram('cat', 'mac')).toBe(false)
    expect(validAnagram('cata', 'cat')).toBe(false)
    expect(validAnagram('', '')).toBe(false)
    expect(validAnagram('ccac', 'aacc')).toBe(false)
  })
})
