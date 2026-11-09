import { describe, expect, it } from 'vitest'
import { groupAnagram } from './groupAnagrams'

describe('groupAnagram', () => {
  it('groups anagrams together', () => {
    expect(groupAnagram(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toEqual([
      ['eat', 'tea', 'ate'],
      ['tan', 'nat'],
      ['bat'],
    ])
  })

  it('handles an empty string', () => {
    expect(groupAnagram([''])).toEqual([['']])
  })

  it('handles a single character', () => {
    expect(groupAnagram(['a'])).toEqual([['a']])
  })

  it('distinguishes strings with different character counts', () => {
    expect(groupAnagram(['bdddddddddd', 'bbbbbbbbbbc'])).toEqual([
      ['bdddddddddd'],
      ['bbbbbbbbbbc'],
    ])
  })
})
