function test(() => {
  console.log(3);
  test(() => console.log(4));
});

console.log(5);
