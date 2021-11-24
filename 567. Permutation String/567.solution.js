/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
  //s1 = "ab"
  // s2 = "eidbaooo"
  if (s1.length > s2.length) return false;
  
  // check if s1map's = a: 1 is in s2map's = a: 1
  // and check if s1map's = b: 1 is in s2map's b: 1
  const permutationMatches = (chars, s1map, s2map) => {
    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];
      if (!s2map[char] || (s2map[char] !== s1map[char])) return false;
    }
    return true;
  }
  
  const chars = []; // stores permutation characters
  const s1map = {}; // stores key: val of a permutation char
  const s2map = {}; // stores key: val of char in a string
  
  // iterate over the s1 and add each character to s1map & s2map
  // and count its value 
  // s1map = {a: 1, b: 1}
  // s2map = {e: 1, i: 1}
  for (let i = 0; i < s1.length; i++) {
    const s1char = s1[i];
    const s2char = s2[i];
    if (!s1map[s1char]) s1map[s1char] = 0;
    if (!s2map[s2char]) s2map[s2char] = 0;
    chars.push(s1char);
    s1map[s1char]++;
    s2map[s2char]++;
  }
  
  // since we already have maps the length of s1 then need to take s1.len - s1.len + 1
  // use the windows base on the size of the s1
  // if end of the window is not in the map, then add it and iterate
  // if one of the values in the map not matching then reduce it
  for (let i = 0; i < s2.length - s1.length + 1; i++) {
    if (permutationMatches(chars, s1map, s2map)) return true;
    const windowLeft = s2[i];
    const windowRight = s2[i + s1.length];
    if (!s2map[windowRight]) s2map[windowRight] = 0;
    s2map[windowRight]++;
    s2map[windowLeft]--;
  }
  
  return permutationMatches(chars, s1map, s2map);
}