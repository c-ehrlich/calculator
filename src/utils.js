// allows us to calculate number of
export const countDecimals = (number) => {
  console.log("number: ");
  console.log(number);
  console.log(typeof number);
  if (!number.toString().includes(".")) return 0;
  return Number(number.toString().split(".")[1].length);
};

// TK add comment
export const decideWhetherOrNotToAddDecimal = (num) => {
  console.log(typeof num);
  return num.toString().includes(".") ? num : num + ".";
};

// TK add comment
export const getArithmeticCharFromWord = (word) => {
  switch (word) {
    case "plus":
      return "+";
    case "minus":
      return "-";
    case "times":
      return "*";
    case "divideby":
      return "/";
    default:
      console.log("error in getArithmeticCharFromWord. input: " + word);
      return "ERR";
  }
};

// handle what happens when a number is input
export const handleInputNum = ({ num, inputNum, lastInput }) => {
  console.log(
    "in handleInputNum - inputNum: " +
      inputNum +
      typeof inputNum +
      ", num: " +
      num +
      typeof num
  );
  const inputNumNumber = Number(inputNum);
  console.log("inputNumNumber: " + inputNumNumber);
  if (inputNum === "0") return num.toString();
  if (inputNumNumber >= 10000000) return inputNum;
  if (inputNum[inputNum.length - 1] === ".") return inputNum + num;
  if (inputNum.includes(".")) {
    return countDecimals(inputNumNumber) < 4 ? inputNum + num : inputNum;
  }

  return inputNum + num;
};

/**
 * @function performArithmeticOperationRegularMode
 * performarms a mathematical function in regular mode
 *
 * @param {*} param0
 * @returns
 */
export const performArithmeticOperationRegularMode = ({
  inputNum,
  evalString,
  operationToPerform,
  lastInput,
}) => {
  // if the previous input was already an arithmetic operator, we just update the evalString
  if (["plus", "minus", "times", "divideby"].includes(lastInput)) {
    return {
      evalString: evalString
        .slice(0, -1)
        .concat(getArithmeticCharFromWord(operationToPerform)),
      lastInput: operationToPerform,
    };
  }

  if (lastInput === "equals") {
    return {
      evalString: result.concat(getArithmeticCharFromWord(operationToPerform)),
    }
  }

  // calculate new outputs
  const result = processNumberForDisplay(safeEval(evalString.concat(inputNum)));
  evalString = result.concat(getArithmeticCharFromWord(operationToPerform));

  return {
    result: result,
    evalString: evalString,
    inputNum: "0",
    lastInput: operationToPerform,
  };
};

/**
 * @function processNumberForDisplay
 * takes a string that represents and integer or decimal number, and processes it
 * for display on the calculator screen. this means reducing it to a maximum of
 * 8 digits, not including the decimal point. numbers larger than 99,999,999 return
 * an error, others have their decimal precision reduced if necessary to fit within
 * the 8 characters.
 *
 * @param {*} inputNumString
 * @returns
 */
export const processNumberForDisplay = (inputNumString) => {
  let num = inputNumString.toString().split(".")[0];
  const negativeModifier = num < 0 ? -1 : 0;
  let decimal = inputNumString.toString().split(".")[1] || "";
  if (num.length + negativeModifier > 8) return "ERR";
  if (decimal === "") return num;
  decimal = decimal
    .slice(0, 9 - (num.length + negativeModifier))
    .replace(/0+$/g, "");
  return num + "." + decimal;
};

/**
 * @function safeEval
 * a wrapper around eval() to prevent it from doing bad stuff
 * removes everything from the input string that's not a number or arithmetic symbol
 * then runs eval(), and turns that result back into a string before returning it
 *
 * @param {string} inputExpression
 * @returns {string} either the result of the calculation, or "ERR"
 */
export const safeEval = (inputExpression) => {
  console.log(inputExpression);

  try {
    // eslint-disable-next-line no-useless-escape
    const safeInput = inputExpression.replace(/[^\d.+\-\*\/]/g, "");
    console.log(safeInput);
    // eslint-disable-next-line no-eval
    const safeOutput = eval(safeInput).toString();
    console.log(safeOutput);
    return safeOutput;
  } catch (e) {
    console.log(e);
    return "ERR";
  }
};

/**
 * @function squareRootCalculation
 * takes as input a number in string format
 * outputs the square root of that number in string format, already ready
 * for calculator display
 *
 * @param {string} inputNumString
 * @returns {string}
 */
export const squareRootCalculation = (inputNumString) => {
  const num = Number(inputNumString);
  if (num < 0) return "ERR";
  const sqrt = Math.sqrt(num);
  return processNumberForDisplay(sqrt);
};

/**
 * @function toggleNegative
 * takes a string that represents a number. if the string represents a positive number
 * this function will return the negative number, and vice versa.
 *
 * @param {string} inputNumString should represent a number
 * @returns {string} the opposite (negative) if the input is a valid number, ERR otherwise
 */
export const toggleNegative = (inputNumString) => {
  console.log("inputNum: " + inputNumString);
  if (isNaN(inputNumString)) {
    console.log("error in toggleNegative - input was not a valid number");
    console.log(inputNumString);
    console.log(typeof inputNumString);
    return "ERR";
  } else {
    return (0 - Number(inputNumString)).toString();
  }
};
