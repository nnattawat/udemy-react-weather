function addNumbers(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Not valid number');
    }
  });
}

addNumbers(1, 2).then(function(result) {
  console.log(result);
}, function(err) {
  console.log(err);
});

addNumbers('asdf', 2).then(function(result) {
  console.log(result);
}, function(err) {
  console.log(err);
});
