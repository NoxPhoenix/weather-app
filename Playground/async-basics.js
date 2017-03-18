console.log('Starting App.');

setTimeout(() => {
  console.log('Inside of callback');
}, 2000);

setTimeout(() => {
  console.log('Second timeout test');
}, 0);

console.log('Finishing up...');
