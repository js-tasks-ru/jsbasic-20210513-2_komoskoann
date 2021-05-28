function filterRange(arr, a, b) {
  return arr.filter(function(item) {
   return (a <= item && item <= b);
  });
}
