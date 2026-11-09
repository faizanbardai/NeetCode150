// https://leetcode.com/problems/top-k-frequent-elements/

/*
  Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
  Example 1:
  Input: nums = [1,1,1,2,2,3], k = 2
  Output: [1,2]

  Example 2:
  Input: nums = [1], k = 1
  Output: [1]

  Example 3:
  Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2
  Output: [1,2]
*/

export function topKFrequent(nums: number[], k: number): number[] {
  const toReturn: number[] = []
  const numFrequency = new Map<number, [frequency: number, index: number]>()

  for (let i = 0; i < nums.length; i++) {
    const currentCount = numFrequency.get(nums[i])
    if (currentCount) {
      currentCount[0]++
    } else {
      numFrequency.set(nums[i], [1, i])
    }
  }

  const sortedCount = Array.from(numFrequency.values()).sort(
    (a, b) => b[0] - a[0],
  )

  for (let i = 0; i < k; i++) {
    toReturn.push(nums[sortedCount[i][1]])
  }

  return toReturn
}
