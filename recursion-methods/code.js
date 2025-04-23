function partitions(n, m) {
  if (n === 0) {
    return 1;
  } else if (m === 0 || n < 0) {
    return 0;
  } else {
    return partitions(n - m, m) + partitions(n, m - 1);
  }
}

console.log(partitions(6, 4));
