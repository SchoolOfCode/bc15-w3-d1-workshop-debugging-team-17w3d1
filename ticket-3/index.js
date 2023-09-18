function countNumberOfNinesInNumber(number) {
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    const digit = number.charAt(i);
   
    if ("9" === digit) {
      count++;
    }
  }

  return count;
  console.log(count);
}

console.log(countNumberOfNinesInNumber("1115.1257846"));

