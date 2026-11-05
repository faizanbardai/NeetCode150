/*
  Given two strings s and t, return true if t is an anagram of s, and false otherwise.
*/

export function validAnagram(s: string, t: string): boolean {
  if (!s.length || !t.length) return false
  if (s.length !== t.length) return false

  const sMap = new Map<string, number>()

  for (const item of s) {
    sMap.set(item, (sMap.get(item) ?? 0) + 1)
  }

  for (const item of t) {
    if (!sMap.has(item)) return false
    const sCount = sMap.get(item)!
    if (sCount < 1) return false
    sMap.set(item, sCount - 1)
  }
  return true
}
