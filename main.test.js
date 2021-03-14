function sum(a) {
  return function(b) {
    return a + b;
  };
}

test('adds 5 + 5 to equal 10', () => {
  expect(sum(5)(5)).toBe(10);
});
