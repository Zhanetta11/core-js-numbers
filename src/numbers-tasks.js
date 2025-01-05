function getRectangleArea(width, height) {
  return width * height;
}

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

function getAverage(value1, value2) {
  return (value1 / 2) + (value2 / 2);
}

function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function getLinearEquationRoot(a, b) {
  return -b / a;
}

function getAngleBetweenVectors(x1, y1, x2, y2) {
  const dotProduct = x1 * x2 + y1 * y2;
  const magnitude1 = Math.sqrt(x1 ** 2 + y1 ** 2);
  const magnitude2 = Math.sqrt(x2 ** 2 + y2 ** 2);
  return Math.acos(dotProduct / (magnitude1 * magnitude2));
}

function getLastDigit(value) {
  return value % 10;
}

function parseNumberFromString(value) {
  return parseFloat(value);
}

function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a ** 2 + b ** 2 + c ** 2);
}

function roundToPowerOfTen(num, pow) {
  const factor = 10 ** pow;
  return Math.round(num / factor) * factor;
}

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function toNumber(value, def) {
  const num = Number(value);
  return isNaN(num) ? def : num;
}

function getCube(num) {
  return num ** 3;
}

function getFibonacciNumber(index) {
  if (index === 0) return 0;
  if (index === 1) return 1;
  let prev = 0, curr = 1;
  for (let i = 2; i <= index; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
}

function getSumToN(n) {
  return (n * (n + 1)) / 2;
}

function getSumOfDigits(num) {
  return String(num).split('').reduce((sum, digit) => sum + Number(digit), 0);
}

function isPowerOfTwo(num) {
  return num > 0 && (num & (num - 1)) === 0;
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

function isNumber(value) {
  return typeof value === 'number' && isFinite(value);
}

function isInteger(number) {
  return Number.isInteger(number);
}

function getFloatOnString(str) {
  const parsed = parseFloat(str);
  return isNaN(parsed) ? NaN : parsed;
}

function getIntegerOnString(str, base) {
  const parsed = parseInt(str, base);
  return isNaN(parsed) ? NaN : parsed;
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