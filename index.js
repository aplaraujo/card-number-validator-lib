const cardValidator = (cardNumber) => {

    cardNumber = cardNumber.replace(/\D/g, "");
  
    if (cardNumber === "0000000000000000" ||
        cardNumber === "1111111111111111" ||
        cardNumber === "2222222222222222" ||
        cardNumber === "3333333333333333" ||
        cardNumber === "4444444444444444" ||
        cardNumber === "5555555555555555" ||
        cardNumber === "6666666666666666" ||
        cardNumber === "7777777777777777" ||
        cardNumber === "8888888888888888" ||
        cardNumber === "9999999999999999") {
      return false
    }
  
    cardNumber = cardNumber.split('').map(digit => parseInt(digit))
  
    const lastDigit = cardNumber.pop()
  
    cardNumber.reverse()
  
    const multiplyingArray = cardNumber.map((item, index) => index % 2 === 0 ? cardNumber[index] * 2 : cardNumber[index])
  
    const multiplyNumbersForTwo = multiplyingArray.map((item, index) => multiplyingArray[index] > 9 ? multiplyingArray[index] - 9 : multiplyingArray[index])
  
    let sum = multiplyNumbersForTwo.reduce((total, value) => total + value)
  
    const isValid = lastDigit + sum;
  
    cardNumber.reverse()
  
    cardNumber.push(lastDigit)
  
    cardNumber = cardNumber.join('')
  
    if (isValid % 10 === 0) {
      return true
    } else {
      return false
      }
  
  }
  
  console.log(cardValidator("0000 0000 0000 0000"))

  export { cardValidator }