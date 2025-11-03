// brute force o(n2)
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  str2 = str2.split("");

  for (let i = 0; i < str1.length; i++) {
    let correctIndex = str2.indexOf(str1[i]);

    console.log(correctIndex);
    if (correctIndex === -1) return false;
    console.log(str2);
    str2.splice(correctIndex, 1);
  }

  return true;
}

// console.log(isAnagram("silent", "listen"));

// frequency counter o(n)
function anagramFc(str1, str2) {
  if (str1.length !== str2.length) return false;

  let freq = {};

  for (let char of str1) {
    freq[char] = (freq[char] || 0) + 1;

    console.log(freq);
  }

  for (let char of str2) {
    if (!freq[char]) return false;

    freq[char]--;

    console.log(freq);
  }
  return true;
}

console.log(anagramFc("anagram", "mangraa"));
