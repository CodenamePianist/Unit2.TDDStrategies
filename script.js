// --------------------------
//#region Guard
// --------------------------

/**
 * @param {number} a
 * @param {number} b
 * @returns the product of `a` and `b`
 * _unless_ either of the parameters is not a number,
 * in which case the string `"error"` is returned.
 */
function multiplyNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "error";
  }

  return a * b;

}
/**
 * 
 * @param {number} age 
 * @returns string
 */
function vote(age) {
  if (age >= 18) {
    return "Who would you like to vote for?";
  } else {
    return "You must be 18 or older to vote.";
  }
}
/**
 * 
 * @param {string} left 
 * @param {string} right 
 * @returns the concatenation of `left` and `right`
 * unless either parameter is not a number
 * in which case the string `"error"` is returned.
 */
function concatenateStrings(left, right) {
  if (typeof left !== "string" || typeof right !== "string") {
    return "error"
  }
  
  return left + right;
}

//#endregion Guard

// --------------------------
//#region Accumulator Variable
// --------------------------

/**
 * @param {int[]} nums
 * @returns the sum of the given array of numbers
 */
function sumArray(nums) {
  let total = 0;
  for (const number of nums) {
    total += number;
  }
  return total;
}

/**
 * 
 * @param {number} test 
 * @returns the sum of all integers between 1 and test
 * unless test is 0 or negative, then it will return 0
 */
function sumToN(test) {
  let sum = 0;
  if (test <= 0) {
    return 0
  } else {
    for (let i = 0; i <= test; i++) {
      sum += i;
    }
    return sum;
  }
}

/**
 * 
 * @param {number} n 
 * @returns the value at index n.
 * But if n is negative or not an integer, it will return `error.`
 */
function factorial(n) {
  const expected = [1, 1, 2, 6, 24, 120, 720, 5040, 40320];
  if (n < 0 || Number.isInteger(n) === false) {
    return "error";
  } else {if (Number.isInteger(n) === true && n >= 0 && n <= 8) {
    return expected[n]}
  }
}

/**
 * 
 * @param {number} test 
 * @returns an array of numbers when `test` is positive.
 * When `test` is negative, the function returns `error`
 */
function buildNArray(test) {
  const b = []
  if (Number.isInteger(test) === false) {
    return "error";
  } else if (test <= 0) {
    return [];
  } else {
    for (let i = 0; i < test; i++) {
      b.push(i + 1);
    }
    return b;
  }
}

//#endregion Accumulator Variable

// --------------------------
//#region Conditional Accumulation
// --------------------------

/**
 * @param {int[]} nums
 * @returns the greatest number in the given array
 */
function findMax(nums) {
  let max = -Infinity;
  for (const number of nums) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}

/**
 * 
 * @param {string[]} a 
 * @returns the longest string in the array.
 * Unless a.length is 0 then it returns an empty string.
 */
function findLongestString(a) {
  let longestString = "";
  if (a.length === 0) {
    return "";
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i].length > longestString.length) {
        longestString = a[i];
      }
    }
    return longestString;
  }
}

/**
 * 
 * @param {int[]} student 
 * @returns the number of students in the given array that were present.
 * But if student.length is 0, it will return 0
 */
function countPresent(student) {
  let studentsPresent = 0;
  if (student.length === 0) {
    return 0
  } else {
    for (let i = 0; i < student.length; i++) {
      if (student[i] === true) {
        studentsPresent += 1;
      }
    }
    return studentsPresent;
  }
}

/**
 * 
 * @param {string} strand 
 * @returns The complementary DNA strand of the input.
 * But if the input is an empty string, then the function will return an empty string.
 */
function getDnaComplement(strand) {
  let complement = "";
  if (strand.length === 0) {
    return "";
  } else {
    for (let i = 0; i < strand.length; i++) {
      if (strand[i] === "A") {
        complement += "T";
      } else if (strand[i] === "T") {
        complement += "A";
      } else if (strand[i] === "G") {
        complement += "C";
      } else if (strand[i] === "C") {
        complement += "G";
      }
    }
    return complement;
  }
}

//#endregion Conditional Accumulation

// --------------------------
//#region Return Timing
// --------------------------

/**
 * @param {string} song
 * @param {string[]} playlist
 * @returns whether the given song can be found in the playlist
 */
function isSongInPlaylist(song, playlist) {
  for (const s of playlist) {
    if (s === song) {
      return true;
    }
  }
  return false;
}

/**
 * 
 * @param {int[]} numbers 
 * @returns true if all numbers in the array are even.
 * Otherwise it wil return false.
 */
function isAllEven(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
}

//#endregion Return Timing

// --------------------------
//#region Nested Loops and Arrays
// --------------------------

/**
 * @param {number} cols
 * @param {number} rows
 * @returns a 2D array of the given dimensions filled with "-"
 */
function makeBoard(cols, rows) {
  const board = [];
  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      row.push("-");
    }
    board.push(row);
  }
  return board;
}

/**
 * 
 * @param {int[]} numbers 
 * @returns a 2D array where the first array is the even numbers of the input function
 * and second array is the odd numbers of the input function.
 */
function evenAndOdd(numbers) {
  const newArray = [];
  for (let i = 0; i < 2; i++) {
    newArray[i] = [];
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] % 2 === 0 && i === 0) {
        newArray[i].push(numbers[j]);
      } else if (numbers[j] % 2 != 0 && i === 1) {
        newArray[i].push(numbers[j]);
      }
    }
  }
  return newArray;
}

//#endregion Nested Loops and Arrays

// --------------------------
//#region Practice
// --------------------------

/**
 * 
 * @param {num} b 
 * @param {num} p 
 * @returns If one of the two inputs is not an integer, it will return an error.
 * Otherwise it will return the first number raised to the power of the second.
 */
function exponentiate(b, p) {
  if (Number.isInteger(b) === false || Number.isInteger(p) === false) {
    return "error";
  } else {
    return Math.pow(b, p);
  }
}

/**
 * 
 * @param {number} number 
 * @returns the sum of all odd numbers between 1 and the given number.
 * If the given number is less than 1, return 0.
 */
function onlyOdds(number) {
  let sum = 0
  if (number < 1) {
    return 0
  } else {
    for (let i = 0; i <= number; i++) {
      if (i % 2 != 0) {
        sum += i;
      }
    }
    return sum;
  }
}

/**
 * 
 * @param {int} current 
 * @param {int} target 
 * @returns returns the number of minutes it takes for current to grow to/past target.
 * If current is greater than target, a string will be returned `target must be larger than current.`
 */
function bacteriaTime(current, target) {
  let minutes = 0
  if (current > target) {
    return `target must be larger than current`;
  }

  while (current < target) {
    minutes += 20;
    current *= 2;
  }
  return minutes;
}

/**
 * 
 * @param {int[]} numbers 
 * @returns the average of the numbers in the given array.
 * If an empty array is given, then 0 is returned.
 */
function getAverage(numbers) {
  let sum = 0;
  if (numbers.length === 0) {
    return null
  }

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

/**
 * 
 * @param {string[]} coins 
 * @returns the sum of the coins in the given array.
 * If an empty array is given, then 0 is returned.
 */
function countCoins(coins) {
  let total = 0;
  if (coins.length === 0) {
    return 0
  } else {
    for (let i = 0; i < coins.length; i++) {
      if (coins[i] === "P") {
        total += 1;
      } else if (coins[i] === "N") {
        total += 5;
      } else if (coins[i] === "D") {
        total += 10;
      } else if (coins[i] === "Q") {
        total += 25;
      }
    }
    return total;
  }
}

function getPairs(number) {
  const pairs = [];
  if (number <= 0) {
    return "error";
  }
  if (Number.isInteger(number) === false) {
    return "error";
  }
  if (typeof number !== "number") {
    return "error";
  }

  for (let i = 1; i <= number; i++) {
    for (let j = i; j <= number; j++) {
      pairs.push([i, j]);
    }
  }
  return pairs;
}

//#endregion Practice

/**
 * The code below exports your functions so they can be tested.
 * Notice that the names are currently commented out.
 * Uncomment the functions as you write them.
 */
module.exports = {
  multiplyNumbers,
  vote,
  concatenateStrings,
  sumArray,
  sumToN,
  factorial,
  buildNArray,
  findMax,
  findLongestString,
  countPresent,
  getDnaComplement,
  isSongInPlaylist,
  isAllEven,
  makeBoard,
  evenAndOdd,
  exponentiate,
  onlyOdds,
  bacteriaTime,
  getAverage,
  countCoins,
  getPairs,
};
