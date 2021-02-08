// Ex.6
const user = 'John Doe';
console.log(user);
let student = 'Katya Kunevich';
console.log(student);
student = user; // name John Doe
console.log(user);

// Ex.7
let test = 1;
test += 1;
console.log(test);
test += '1'; // 21
console.log(test);
test -= 1;
console.log(test); // 20
console.log(Boolean(test)); // true

// Ex.8
const arrFirst = [2, 3, 5, 8];
for (let i = 1; i < arrFirst.length; i++) {
  arrFirst[0] *= arrFirst[i];
}
console.log(arrFirst[0]);

// Ex.9
const arrSecond = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arrSecond.length; i++) {
  if (arrSecond[i] > 5 && arrSecond[i] < 10) {
    console.log(arrSecond[i]);
  }
}

// Ex.10
const arrThird = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arrThird.length; i++) {
  if (arrThird[i] % 2 === 0) {
    console.log(arrThird[i]);
  }
}
