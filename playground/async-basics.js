console.log('starting app');

setTimeout(() => {
  console.log('Inside of callback')
}, 2000);

setTimeout(() => {
  console.log('Second to load');
}, 0);

console.log('Finishing up');