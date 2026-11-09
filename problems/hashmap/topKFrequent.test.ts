import { describe, expect, it } from 'vitest'
import { topKFrequent } from './topKFrequent'

describe('topKFrequent', () => {
  it('returns the top k frequent in the nums', () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2])
    expect(topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2)).toEqual([1, 2])
    expect(topKFrequent([1], 1)).toEqual([1])
  })
})
