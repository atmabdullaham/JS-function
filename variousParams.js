/**
 * for a given string tell me whether it has even number of characters or not. 
 * 
 * 
 */

function evenSized(str) {
 const size = str.length;
 console.log(size);
 if (size % 2 !== 0) {
  return true, 'added resistence'
 }
}

evenSized('Dhaka')

function doubledOrTriple(num, doDouble) {
 if (doDouble === true) {
  const result = num * 2;
  return result;
 } else {
  const result = num * 3;
  return result;
 }
}

console.log(doubledOrTriple(5, true));
console.log(doubledOrTriple(15, true));
console.log(doubledOrTriple(52, true));