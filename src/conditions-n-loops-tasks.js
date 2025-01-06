/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  return (a > b && a > c && a) || (b > a && b > c && b) || c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return false;
  if (a + b <= c || a + c <= b || b + c <= a) return false;
  return a === b || b === c || a === c;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let res = '';
  let firstDigit = Math.trunc(num / 10);
  let secondDigit = num % 10;
  while (firstDigit > 0) {
    res += 'X';
    firstDigit -= 1;
  }
  if (secondDigit >= 5 && secondDigit < 9) {
    res += 'V';
    secondDigit -= 5;
  }
  if (secondDigit < 4 && secondDigit > 0) {
    while (secondDigit > 0) {
      res += 'I';
      secondDigit -= 1;
    }
  }
  switch (secondDigit) {
    case 4:
      res += 'IV';
      break;
    case 9:
      res += 'IX';
      break;
    default:
      break;
  }
  return res;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const lib = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };
  let res = '';
  let i = 0;
  while (i < numberStr.length) {
    if (numberStr[i] in lib) {
      res += lib[numberStr[i]];
    }
    switch (numberStr[i]) {
      case '-':
        res += 'minus';
        break;
      case '.':
        res += 'point';
        break;
      case ',':
        res += 'point';
        break;
      default:
        break;
    }
    if (i !== numberStr.length - 1) {
      res += ' ';
    }
    i += 1;
  }

  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (letter === str[i]) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let numCopy = num;
  while (numCopy >= 1) {
    const digNumCopy = numCopy % 10;
    if (digNumCopy === digit) return true;
    numCopy = Math.trunc(numCopy / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let totalSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    totalSum += arr[i];
  }
  let leftSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    totalSum -= arr[i];
    if (leftSum === totalSum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arrBase = [];
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    arrBase[i] = 0;
  }
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [...arrBase];
  }
  let colMin = 0;
  let rowMin = 0;
  let colMax = size - 1;
  let rowMax = size - 1;
  let count = 1;
  while (rowMin <= rowMax && colMin <= colMax) {
    for (let col = colMin; col <= colMax; col += 1) {
      matrix[rowMin][col] = count;
      count += 1;
    }
    rowMin += 1;
    for (let row = rowMin; row <= rowMax; row += 1) {
      matrix[row][colMax] = count;
      count += 1;
    }
    colMax -= 1;
    if (rowMin <= rowMax) {
      for (let col = colMax; col >= colMin; col -= 1) {
        matrix[rowMax][col] = count;
        count += 1;
      }
      rowMax -= 1;
    }
    if (colMin <= colMax) {
      for (let row = rowMax; row >= rowMin; row -= 1) {
        matrix[row][colMin] = count;
        count += 1;
      }
      colMin += 1;
    }
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const res = matrix;
  const k = matrix.length;
  for (let i = 0; i < k; i += 1) {
    for (let j = i + 1; j < k; j += 1) {
      const temp = res[i][j];
      res[i][j] = res[j][i];
      res[j][i] = temp;
    }
  }
  for (let i = 0; i < k; i += 1) {
    let left = 0;
    let right = k - 1;
    while (left < right) {
      const temp = res[i][left];
      res[i][left] = res[i][right];
      res[i][right] = temp;
      left += 1;
      right -= 1;
    }
  }
  return res;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const newArr = arr;
  function swap(i, j) {
    const temp = newArr[i];
    newArr[i] = newArr[j];
    newArr[j] = temp;
  }
  function partition(start, end) {
    const pivotValue = newArr[end];
    let storeIndex = start;
    for (let i = start; i < end; i += 1) {
      if (newArr[i] <= pivotValue) {
        swap(i, storeIndex);
        storeIndex += 1;
      }
    }
    swap(storeIndex, end);
    return storeIndex;
  }
  function quickSortHelper(start, end) {
    if (start >= end) return;
    const pivotIndex = Math.floor((start + end) / 2);
    swap(pivotIndex, end);
    const newPivotIndex = partition(start, end);
    quickSortHelper(start, newPivotIndex - 1);
    quickSortHelper(newPivotIndex + 1, end);
  }
  quickSortHelper(0, arr.length - 1);
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const n = str.length;
  if (n < 2 || iterations <= 0) return str;

  const evenCount = Math.floor((n + 1) / 2);
  const visited = new Array(n);
  const result = new Array(n);

  for (let i = 0; i < n; i += 1) {
    visited[i] = false;
  }

  function nextIndex(oldIndex) {
    if (oldIndex % 2 === 0) {
      return Math.floor(oldIndex / 2);
    }
    return evenCount + Math.floor((oldIndex - 1) / 2);
  }

  for (let i = 0; i < n; i += 1) {
    if (!visited[i]) {
      let cycleLength = 0;
      const cycleIndices = new Array(n);
      let current = i;
      do {
        cycleIndices[cycleLength] = current;
        cycleLength += 1;
        visited[current] = true;
        current = nextIndex(current);
      } while (current !== i);
      const offset = iterations % cycleLength;
      for (let j = 0; j < cycleLength; j += 1) {
        const oldPos = cycleIndices[j];
        const newPos = cycleIndices[(j + offset) % cycleLength];
        result[newPos] = str.charAt(oldPos);
      }
    }
  }

  let resultStr = '';
  for (let i = 0; i < n; i += 1) {
    resultStr += result[i];
  }
  return resultStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const digits = [];
  let num = number;
  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  digits.reverse();
  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) i -= 1;
  if (i < 0) return num;
  let j = digits.length - 1;
  while (digits[j] <= digits[i]) j -= 1;
  let temp = digits[i];
  digits[i] = digits[j];
  digits[j] = temp;
  let left = i + 1;
  let right = digits.length - 1;
  while (left < right) {
    temp = digits[left];
    digits[left] = digits[right];
    digits[right] = temp;
    left += 1;
    right -= 1;
  }
  let result = 0;
  for (let k = 0; k < digits.length; k += 1) {
    result = result * 10 + digits[k];
  }
  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
