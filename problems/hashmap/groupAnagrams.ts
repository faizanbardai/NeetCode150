/*
  Given an array of strings strs, group the anagrams together. You can return the answer in any order.
  Example 1:

  Input: strs = ["eat","tea","tan","ate","nat","bat"]

  Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

  Explanation:

  There is no string in strs that can be rearranged to form "bat".
  The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
  The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
  Example 2:

  Input: strs = [""]

  Output: [[""]]

  Example 3:

  Input: strs = ["a"]

  Output: [["a"]]
*/

export function groupAnagram(strs: string[]): string[][] {
  const anagrams = new Map<string, string[]>()

  for (const item of strs) {
    // const signature = item.split('').sort().join('')
    const signature = getSignature(item)

    if (anagrams.has(signature)) {
      anagrams.get(signature)!.push(item)
    } else {
      anagrams.set(signature, [item])
    }
  }

  return Array.from(anagrams.values())
}

function getSignature(str: string): string {
  const alphabets = Array(26).fill(0)

  for (const item of str) {
    alphabets[item.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }

  return alphabets.join(',')
}
