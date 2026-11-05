/*  
    Given an integer array nums, return true if any value appears at least twice in the array, and
    return false if every element is distinct.
*/
export function containsDuplicate(numbers: number[]): boolean {
  const seenNumbers = new Set<number>()

  for (const num of numbers) {
    if (seenNumbers.has(num)) return true
    seenNumbers.add(num)
  }

  return false
}

console.log(containsDuplicate([1, 1, 2, 2, 3, 3]))
