function camelize(str) {
  let arr = str.split('-');
  // let tail = arr.slice(1);
  // let result = [arr[0]];
  // tail.map(el => result.push(el[0].toUpperCase() + el.slice(1)));
  // return result.join('');
  let arrUppercase = arr.map(function(word, index) {
    if (index == 0)
    return word;
    return word[0].toUpperCase() + word.slice(1); 
  })
  return arrUppercase.join('');
}
