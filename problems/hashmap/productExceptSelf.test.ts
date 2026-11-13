import { describe, expect, it } from 'vitest'
import { productExceptSelf } from './productExceptSelf'

describe('productExceptSelf', () => {
  it('case 1', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6])
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([-0, 0, 9, -0, 0])
    expect(productExceptSelf([4, 3, 2, 1, 2])).toEqual([12, 16, 24, 48, 24])
  })
})
