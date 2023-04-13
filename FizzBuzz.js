function fizzBuzzPhoneNumber(phoneNumber) {
  const digits = phoneNumber.toString().split('');
  const sum = digits.reduce((acc, val) => acc + parseInt(val), 0);
  
  for (let i = 1; i <= sum; i++) {
    if (i % 4 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 4 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}
fizzBuzzPhoneNumber(8790051987)

