function firstNonRepeatChar(str) {
  for (let i = 0; i < str.length; i++) {
    let isUnique = true;
    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) return i;
  }
  return -1;
}

// freq counter

function firstNonRepeatCharFc(str) {
  let freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let [i, char] of [...str].entries()) {
    if (freq[char] === 1) return i;
  }
  return -1;
}

console.log(firstNonRepeatCharFc("bbeettcode"));
