/*
  https://leetcode.com/problems/product-of-array-except-self/description/
  
  The trick is to use prefix and suffix products instead of division.

  First pass: build the answer array as the product of all values to the left 
  of each index.
  
  Second pass: multiply each answer entry by the product of all values 
  to the right of that index.
  
  This gives the product of everything except the current element 
  without ever dividing, and it runs in O(n) time with O(1) extra 
  space besides the output array.
  
  In short: “left running product × right running product” = the required result.
*/
export function productExceptSelf(nums: number[]): number[] {
  if (!nums.length) return nums

  const answer: number[] = Array(nums.length).fill(1)

  // left
  let multiplier = 1
  for (let i = 1; i < nums.length; i++) {
    multiplier *= nums[i - 1]
    answer[i] = multiplier
  }
  // [1,1,2,6]

  // right
  multiplier = 1 // reset multiplier
  for (let i = nums.length - 2; i > -1; i--) {
    multiplier *= nums[i + 1]
    answer[i] *= multiplier
  }

  return answer
}

console.log(productExceptSelf([1, 2, 3, 4]))
