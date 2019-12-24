// Test 2

export const anagram = (rawA, rawB) => {
  const a = format(rawA)
  const b = format(rawB)
  const charMap = {};
  (a + b).split("").forEach(c => {
    charMap[c] = charMap[c] === undefined ? 1 : charMap[c] + 1
  });
  const isSame = Object.keys(charMap).every((c) => charMap[c] % 2 === 0)
  return isSame
};

/** 小写，去除空格与标点符号 */
function format(str) {
  return str.toString().toLowerCase().replace(/[\W_]/g, "")
}