// Lesson-2 Ex.6
/* const user = 'John Doe';
console.log(user);
let student = 'Katya Kunevich';
console.log(student);
student = user;
console.log(user);
*/

// Lesson-2 Ex.7
/* let test = 1;
test += 1;
console.log(test);
test += '1';
console.log(test);
test -= 1;
console.log(test);
console.log(Boolean(test));
*/

// Lesson-2 Ex.8
/* const arrFirst = [2, 3, 5, 8];
for (let i = 1; i < arrFirst.length; i++) {
  arrFirst[0] *= arrFirst[i];
}
console.log(arrFirst[0]);
*/

// Lesson-2 Ex.9
/* const arrSecond = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arrSecond.length; i++) {
  if (arrSecond[i] > 5 && arrSecond[i] < 10) {
    console.log(arrSecond[i]);
  }
}
*/

// Lesson-2 Ex.10
/* const arrThird = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arrThird.length; i++) {
  if (arrThird[i] % 2 === 0) {
    console.log(arrThird[i]);
  }
}
*/

// Lesson-3 Ex.5
/* function palindrome(str) {
  const strLength = str.length;
  const middleOfString = strLength / 2;

  for (let i = 0; i < middleOfString; i++) {
    if (str[i] !== str[strLength - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome('tenet'));
*/

// Lesson-3 Ex.6
/* function minDigitFunc(a, b) {
  const minDigit = (a < b) ? a : b;
  return minDigit;
}

function maxDigitFunc(a, b) {
  const maxDigit = (a > b) ? a : b;
  return maxDigit;
}

console.log(minDigitFunc(120, 263));
console.log(maxDigitFunc(4075, 88));
*/

// Lesson-3 Ex.7
/* const arrWithRandNum = [54, 20, 8, 64, 10, 3, 63, 50, 46, 8];

function addZeroInStr(arr) {
  for (let i = 0; i < arrWithRandNum.length; i++) {
    if (arrWithRandNum[i] % 10 === 0) {
      arrWithRandNum[i] /= 10;
      arrWithRandNum[i] += 'zero';
    }
  }
  console.log(arr);
}

addZeroInStr(arrWithRandNum);
*/

// Lesson-4 Ex.5
function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(5)(2));

// Lesson-4 Ex.6
const pFirst = document.getElementById('text1');
const pSecond = document.getElementById('text2');
const pThird = document.getElementById('text3');

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
let i = 0;
let j = 0;
let k = 0;

pFirst.addEventListener('click', (Event) => {
  Event.target.style.color = colors[i];
  i += 1;
});

pSecond.addEventListener('click', (Event) => {
  Event.target.style.color = colors[j];
  j += 1;
});

pThird.addEventListener('click', (Event) => {
  Event.target.style.color = colors[k];
  k += 1;
});
