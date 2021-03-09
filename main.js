// Lesson-4 Ex.5
function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(5)(2));

// Lesson-4 Ex.6
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const counter = function getCounter() {
  let i = 0;
  return function () {
    this.style.color = colors[i];
    i += 1;
    if (i === colors.length) {
      i = 0;
    }
  };
};

const pFirst = document.getElementById('text1');
const pSecond = document.getElementById('text2');
const pThird = document.getElementById('text3');

pFirst.addEventListener('click', counter());
pSecond.addEventListener('click', counter());
pThird.addEventListener('click', counter());
