function getRectangleArea(length, width) {
  return length * width;
}

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

function getAverage(value1, value2) {
  return value1 / 2 + value2 / 2;
}

function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function getLinearEquationRoot(a, b) {
  return -b / a;
}

function getAngleBetweenVectors(x1, y1, x2, y2) {
  const dotProduct = x1 * x2 + y1 * y2;

  const magnitude1 = Math.sqrt(x1 * x1 + y1 * y1);
  const magnitude2 = Math.sqrt(x2 * x2 + y2 * y2);

  const cosineAngle = dotProduct / (magnitude1 * magnitude2);

  return Math.acos(cosineAngle);
}

function getLastDigit(value) {
  return Math.abs(value) % 10;
}

function parseNumberFromString(value) {
  return parseFloat(value);
}

function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a * a + b * b + c * c);
}

function roundToPowerOfTen(num, pow) {
  return Math.round(num / 10 ** pow) * 10 ** pow;
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function toNumber(value, def) {
  const result = Number(value);
  return Number.isNaN(result) ? def : result;
}

function getCube(num) {
  return num ** 3;
}

function getFibonacciNumber(index) {
  if (index === 0) {
    return 0;
  }
  if (index === 1) {
    return 1;
  }

  let a = 0;
  let b = 1;
  for (let i = 2; i <= index; i += 1) {
    const next = a + b;
    a = b;
    b = next;
  }

  return b;
}

function getSumToN(n) {
  return (n * (n + 1)) / 2;
}

function getSumOfDigits(num) {
  return String(Math.abs(num))
    .split('')
    .map(Number)
    .reduce((sum, digit) => sum + digit, 0);
}

function isPowerOfTwo(num) {
  if (num <= 0) return false;
  let number = num;
  while (number % 2 === 0) {
    number /= 2;
  }
  return number === 1;
}

function getSine(num) {
  return Math.sin(num);
}

function numberToStringInBase(number, base) {
  return number.toString(base);
}

function toExponential(number, fractionDigits) {
  return number.toExponential(fractionDigits);
}

function toFixed(number, fractionDigits) {
  return number.toFixed(fractionDigits);
}

function toPrecision(number, precision) {
  return number.toPrecision(precision);
}

function getNumberValue(number) {
  return number.valueOf();
}

function isNumber(number) {
  return (
    typeof number === 'number' &&
    !Number.isNaN(number) &&
    Number.isFinite(number)
  );
}

function isInteger(number) {
  return Number.isInteger(number);
}

function getFloatOnString(str) {
  const result = Number.parseFloat(str);
  return Number.isNaN(result) ? NaN : result;
}

function getIntegerOnString(str, base) {
  const parsed = Number.parseInt(str, base);
  return Number.isNaN(parsed) ? NaN : parsed;
}

function isSafeInteger(number) {
  return Number.isSafeInteger(number);
}

function roundToSmallestInteger(number) {
  return Math.floor(number);
}

function roundToLargestInteger(number) {
  return Math.ceil(number);
}

function roundToNearestInteger(number) {
  return Math.round(number);
}

function getIntegerPartNumber(number) {
  return Math.trunc(number);
}

function getSumOfNumbers(...args) {
  const sum = args.reduce((accumulator, num) => accumulator + num, 0);
  return Math.round(sum * 1e10) / 1e10;
}

function getMaxNumber(firstNumber, secondNumber) {
  return Math.max(firstNumber, secondNumber);
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getHypotenuse(a, b) {
  return Math.hypot(a, b);
}

function getCountOfOddNumbers(number) {
  const absNumber = Math.abs(number);
  return Math.floor((absNumber + 1) / 2);
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  isSafeInteger,
  roundToLargestInteger,
  roundToSmallestInteger,
  roundToNearestInteger,
  getSumOfNumbers,
  isNumber,
  isInteger,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  getFloatOnString,
  getIntegerOnString,
  getIntegerPartNumber,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};
