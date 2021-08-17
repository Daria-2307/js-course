const generateRandom = (from, to) => Math.floor(Math.random() * (to - from + 1)) + from;

const generateRandomSequence = (from, to, symbols) => {
  let sequenceLen = symbols.length - 1;
  let sequence = '';

  const pwdLen = generateRandom(from, to);

  for (let i = 0; i < pwdLen; i += 1) {
    const rand = generateRandom(0, sequenceLen);
    sequence = `${sequence}${symbols[rand]}`;
  }

  return sequence;
}

//task1
const generateLogin = () => {
  const part1 = generateRandomSequence(1, 1, 'QWERTYUIOPASDFGHJKLZXCVBNM');
  const part2 = generateRandomSequence(1, 19, 'qwertyuiopasdfghjklzxcvbnm1234567890');
  
  return part1 + part2;
}

console.log(generateLogin());

//task3
const mixArray = arr => {
  let mixedArr = arr.slice();
  let i = mixedArr.length-1;
  while (i != 0) {
    let j = Math.floor(Math.random()* i );
    let temp = mixedArr[i];
    mixedArr[i] = mixedArr[j];
    mixedArr[j] = temp;
    i = i - 1;
  }
  
  return mixedArr;
}

console.log(mixArray([5,34,56,89,43]));

//task2
const generatePass = () => {
  const part1 = generateRandomSequence(2, 3, 'QWERTYUIOPASDFGHJKLZXCVBNM')
  const part2 = generateRandomSequence(2, 3, 'qwertyuiopasdfghjklzxcvbnm');
  const part3 = generateRandomSequence(2, 3, '1234567890');
  const part4 = generateRandomSequence(2, 3, '~!@#$%^&*()_-+=');

  return mixArray(part1 + part2 + part3 + part4);
}

console.log(generatePass());





