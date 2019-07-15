// Task
// Given a string representing a simple fraction x/y, your function must return a string representing the corresponding mixed fraction in the following format:

// [sign]a b/c

// where a is integer part and b/c is irreducible proper fraction. There must be exactly one space between a and b/c. Provide [sign] only if negative (and non zero) and only at the beginning of the number (both integer part and fractional part must be provided absolute).

// If the x/y equals the integer part, return integer part only. If integer part is zero, return the irreducible proper fraction only. In both of these cases, the resulting string must not contain any spaces.

// Division by zero should raise an error (preferably, the standard zero division error of your language).

// Value ranges
// -10 000 000 < x < 10 000 000
// -10 000 000 < y < 10 000 000
// Examples
// Input: 42/9, expected result: 4 2/3.
// Input: 6/3, expedted result: 2.
// Input: 4/6, expected result: 2/3.
// Input: 0/18891, expected result: 0.
// Input: -10/7, expected result: -1 3/7.
// Inputs 0/0 or 3/0 must raise a zero division error.
// Note
// Make sure not to modify the input of your function in-place, it is a bad practice.

function mixedFraction(str) {
  var isNegative = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-") {
      if (isNegative === false) {
        isNegative = true;
      } else {
        isNegative = false;
      }
    }
  }

  var newStr = str.replace("/", " ");
  var arr = newStr.split(" ");
  var nums = arr.map(num => parseInt(num)).map(num => Math.abs(num));
  var nume = nums[0];
  var deno = nums[1];
  var count = 0;
  if (deno === 0) {
    return error;
  }
  while (nume > deno) {
    nume = nume - deno;
    count++;
  }

  var checkNums = [];
  var lcd = 0;
  for (let i = deno; i > 1; i--) {
    checkNums.push(i);
  }
  for (let k = 0; k < checkNums.length; k++) {
    if (nume % checkNums[k] === 0 && deno % checkNums[k] === 0) {
      lcd = checkNums[k];
      break;
    }
  }

  if (nume === deno && isNegative === false) {
    return `${count + 1}`;
  } else {
    if (nume === deno && isNegative === true) {
      return `-${count + 1}`;
    } else {
      if (lcd === 0 && isNegative === true && count === 0) {
        return (answer = `-${nume}/${deno}`);
      } else {
        if (lcd === 0 && isNegative === false) {
          var answer = `${count !== 0 ? count : ""} ${nume}/${deno}`;
          return answer.trim();
        } else {
          if (nume === 0) {
            return "0";
          } else {
            if (lcd === 0 && isNegative === true) {
              return `-${count} ${nume}/${deno}`;
            } else {
              if (isNegative === false && count !== 0 && lcd !== 0) {
                return `${count} ${nume / lcd}/${deno / lcd}`;
              } else {
                if (isNegative === false && count === 0 && lcd !== 0) {
                  return `${nume / lcd}/${deno / lcd}`;
                } else {
                  if (isNegative === true && count === 0) {
                    return `-${nume / lcd}/${deno / lcd}`;
                  } else {
                    if (isNegative === true && count !== 0 && lcd !== 0) {
                      return `-${count} ${nume / lcd}/${deno / lcd}`;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
