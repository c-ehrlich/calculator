/**
 * @function countDecimals
 * @function getArithmeticCharFromWord
 * @function getArithmeticDisplayCharFromWord
 * @function handleInputClear
 * @function handleInputDecimal
 * @function handleInputMMinus
 * @function handleInputMPlus
 * @function handleInputInverse
 * @function handleInputNum
 * @function handleInputPercent
 * @function handleInputSqrt
 * @function performArithmeticOperationRegularMode
 * @function performArithmeticOperationSciMode
 * @function performEqualsRegularMode
 * @function performEqualsSciMode
 * @function processNumberForDisplay
 * @function safeEval
 * @function squareRootCalculationMath
 * @function toggleNegative
 */

/**
 * @function countDecimals
 * counts how many decimal places a number has
 *
 * @param {number} number
 * @returns {number} count of decimal places (int)
 */
export const countDecimals = (number) => {
  if (!number.toString().includes(".")) return 0;
  return Number(number.toString().split(".")[1].length);
};

/**
 * @function getArithmeticCharFromWord
 * inputs a word that represents an arithmetic operation, returns that
 * character for the calculator
 *
 * @param {*} word either 'plus', 'minus', 'times', or 'divideby'
 * @returns {string} either '+', '-', '*', or '/'
 */
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

/**
 * @function getArithmeticDisplayCharFromWord
 * inputs a word that represents an arithmetic operation, returns the
 * relevant character for the left side of the display
 *
 * @param {*} word either 'plus', 'minus', 'times', or 'divideby'
 * @returns {string} either '+', '-', 'x', or '/'
 */
export const getArithmeticDisplayCharFromWord = (word) => {
  switch (word) {
    case "plus":
      return "+";
    case "minus":
      return "-";
    case "times":
      return "x";
    case "divideby":
      return "/";
    default:
      console.log("error in getArithmeticDisplayCharFromWord. input: " + word);
      return "ERR";
  }
};

/**
 * @function handleInputClear
 * handles the clear button
 */
export const handleInputClear = ({ lastInput }) => {
  if (lastInput !== "clear") {
    return {
      inputNum: "0",
      display: "0",
      lastInput: "clear",
    };
  } else {
    return {
      inputNum: "0",
      display: "0",
      lastInput: "clear",
      result: "0",
      displayLeftSide: "",
      currentCalc: "",
      evalString: "",
    };
  }
};

/**
 * @function handleInputDecimal
 * Takes a string representation of a number and decides whether or not it's
 * possible to add a decimal point (by checking whether it already has one)
 *
 * @param {string} num
 * @returns {string} num - same number, either with a decimal added to the end or not
 */
export const handleInputDecimal = (num) => {
  // do nothing if we don't want to add a decimal point
  if (num.length >= 10) return {};
  if (num.includes(".")) return {};

  const returnNum = num + ".";
  return {
    inputNum: returnNum,
    display: returnNum,
    lastInput: "decimal",
  };
};

/**
 * @function handleInputMMinus
 * attempts to subtrate the current input from memory
 */
export const handleInputMMinus = ({ inputNum, lastInput, memory, result }) => {
  const returnValue = processNumberForDisplay(
    (
      Number(memory) - Number(lastInput === "equals" ? result : inputNum)
    ).toString()
  );
  return {
    haveMemory: true,
    memory: returnValue,
    display: returnValue,
  };
};

/**
 * @function handleInputMPlus
 * attempts to add the current input to the memory
 */
export const handleInputMPlus = ({ inputNum, lastInput, memory, result }) => {
  const returnValue = processNumberForDisplay(
    (
      Number(memory) + Number(lastInput === "equals" ? result : inputNum)
    ).toString()
  );
  return {
    haveMemory: true,
    memory: returnValue,
    display: returnValue,
  };
};

/**
 * @function handleInputInverse
 * gives an inverse of either the current input or the result, works
 * in both regular and scientific mode
 */
export const handleInputInverse = ({
  currentCalc,
  inputNum,
  lastInput,
  result,
}) => {
  if (lastInput === "equals") {
    const returnValue = processNumberForDisplay(1 / result);
    return {
      display: returnValue,
      result: returnValue,
    };
  }

  if (inputNum !== "" && inputNum !== "0") {
    const returnValue = processNumberForDisplay(1 / inputNum);
    return {
      display: returnValue,
      inputNum: returnValue,
      currentCalc: inputNum, // what does this do?
    };
  } else {
    const returnValue = processNumberForDisplay(1 / currentCalc);
    return {
      currentCalc: returnValue,
      display: returnValue,
    };
  }
};

/**
 * @function handleInputNum
 * figures out what to do when the user presses one of the number keys on the calculator
 *
 * @param {*} param0
 * @returns
 */
export const handleInputNum = ({ num, inputNum, lastInput }) => {
  const inputNumNumber = Number(inputNum);
  let returnValue = "";

  switch (true) {
    case inputNum === "0":
      returnValue = num.toString();
      break;
    case inputNum === "-0":
      returnValue = "-" + num.toString();
      break;
    case inputNumNumber >= 1000000000 || inputNumNumber <= -1000000000:
      returnValue = inputNum;
      break;
    case inputNum[inputNum.length - 1] === ".":
      returnValue = inputNum + num;
      break;
    case inputNum.includes("."):
      returnValue = inputNum.length < 11 ? inputNum + num : inputNum;
      break;
    default:
      returnValue = inputNum + num;
  }

  return {
    inputNum: returnValue,
    display: returnValue,
    lastInput: "num",
    // we need to reset the calculator to initial state if the user inputs a number
    // right after an equals sign, and we can't do it any earlier than this
    ...((lastInput === "equals" || lastInput === "percent") && {
      result: "0",
      evalString: "",
    }),
  };
};

/**
 * @function handleInputPercent
 * Handles the user pressing the % button
 *
 * EXAMPLES:
 * 50 + 80% = 90
 * 50 - 80% = 10
 * 50 * 80% = 40
 * 50 / 80% = 62.5
 *
 * in scientific mode, it first processes the entire remainder of the input string,
 * and then uses the inputNum to get the %
 *
 * ends in a similar result as pressing = (ie inputNum and evalString are
 * "0" and "", only result is active
 *
 * @param {*} param0
 * @returns
 */
export const handleInputPercent = ({ inputNum, evalString, sciModeOn }) => {
  if (evalString === "" || !["+", "-", "*", "/"].includes(evalString.slice(-1)))
    return {
      inputNum: "0",
      evalString: "",
      result: "0",
    };

  let evalNum = evalString.slice(0, -1);
  if (sciModeOn) evalNum = safeEval(evalNum);
  const evalOperator = evalString.slice(-1);

  let percentNum = "";
  if (evalOperator === "+" || evalOperator === "-") {
    percentNum = Number(evalNum) * (Number(inputNum) / 100);
  } else {
    // times or divide
    percentNum = Number(inputNum) / 100;
  }

  const result = safeEval(evalNum + evalOperator + percentNum.toString());

  return {
    inputNum: "0",
    evalString: result,
    result: result,
    display: result,
    displayLeftSide: "",
    lastInput: "percent",
  };
};

/**
 * @function handleInputSqrt
 * handles Square Root input
 */
export const handleInputSqrt = ({ inputNum, lastInput, result }) => {
  if (lastInput === "equals" || lastInput === "percent") {
    const returnValue = squareRootCalculationMath(result);
    return {
      result: returnValue,
      display: returnValue,
    };
  }

  const returnValue = squareRootCalculationMath(inputNum);
  if (inputNum !== "" && inputNum !== "0") {
    return {
      inputNum: returnValue,
      display: returnValue,
      currentCalc: inputNum, // what does this do?
    };
  } else {
    return {
      currentCalc: returnValue,
      display: returnValue,
    };
  }
};

/**
 * @function performArithmeticOperationRegularMode
 * performarms a mathematical function in regular mode
 *
 * @param {*} param0 TODO document this
 * @returns
 */
export const performArithmeticOperationRegularMode = ({
  inputNum,
  evalString,
  operationToPerform,
  lastInput,
  result,
}) => {
  const operator = getArithmeticCharFromWord(operationToPerform);
  const displayOperator = getArithmeticDisplayCharFromWord(operationToPerform);
  // if the previous input was already an arithmetic operator, we just update the evalString
  if (["plus", "minus", "times", "divideby"].includes(lastInput)) {
    return {
      evalString: evalString.slice(0, -1).concat(operator),
      lastInput: operationToPerform,
      displayLeftSide: displayOperator,
    };
  }

  if (lastInput === "equals" || lastInput === "percent") {
    return {
      evalString: result.concat(operator),
      lastInput: operationToPerform,
      display: result,
      displayLeftSide: displayOperator,
    };
  }

  // calculate new outputs
  const newResult = processNumberForDisplay(
    safeEval(evalString.concat(inputNum))
  );
  evalString = newResult.concat(operator);

  return {
    display: newResult,
    result: newResult,
    evalString: evalString,
    inputNum: "0",
    lastInput: operationToPerform,
    displayLeftSide: displayOperator,
  };
};

/**
 * @function performArithmeticOperationSciMode
 * handles input of an arithmetic operation in scientific mode
 */
export const performArithmeticOperationSciMode = ({
  evalString,
  inputNum,
  lastInput,
  operationToPerform,
  result,
}) => {
  //prettier-ignore
  let newEvalString;
  let newDisplay;

  if (lastInput === "equals" || lastInput === "percent") {
    newEvalString = result.concat(
      getArithmeticCharFromWord(operationToPerform)
    );
    newDisplay = result;
  } else if (["plus", "minus", "times", "divideby"].includes(lastInput)) {
    newEvalString = evalString
      .slice(0, -1)
      .concat(getArithmeticCharFromWord(operationToPerform));
  } else {
    newEvalString =
      (evalString !== "0" && evalString) +
      (inputNum !== "0" && inputNum) +
      getArithmeticCharFromWord(operationToPerform);
  }

  return {
    evalString: newEvalString,
    inputNum: "0",
    lastInput: operationToPerform,
    displayLeftSide: getArithmeticDisplayCharFromWord(operationToPerform),
    // don't change the display if the last input was also an arithmetic operator
    ...(!["plus", "minus", "times", "divideby"].includes(lastInput) && {
      display: newDisplay ? newDisplay : inputNum,
    }),
  };
};

/**
 * @function performEqualsRegularMode
 * process the result and other necessary values when the user
 * presses the equals button
 *
 * @param {*} param0
 * @returns
 */
export const performEqualsRegularMode = ({
  inputNum,
  evalString,
  lastInput,
}) => {
  // pressing equal multiple times doesn't break the calculator
  if (lastInput === "equals") return {};

  const result = processNumberForDisplay(safeEval(evalString.concat(inputNum)));
  return {
    result: result,
    inputNum: "0",
    evalString: "",
    displayLeftSide: "",
    display: result,
    lastInput: "equals",
  };
};

/**
 * @function performEqualsSciMode
 * process the result and other necessary values when the calculator is in sci mode
 */
export const performEqualsSciMode = ({ evalString, inputNum, lastInput }) => {
  if (lastInput === "equals") return {};

  const result = safeEval(evalString.concat(inputNum));

  return {
    result: result,
    display: result,
    evalString: "0",
    inputNum: "",
    lastInput: "equals",
    displayLeftSide: "",
  };
};

/**
 * @function processNumberForDisplay
 * takes a string that represents and integer or decimal number, and processes it
 * for display on the calculator screen. this means reducing it to a maximum of
 * 10 digits, not including the decimal point. numbers larger than 99,999,999 return
 * an error, others have their decimal precision reduced if necessary to fit within
 * the 10 characters.
 *
 * @param {*} inputNumString
 * @returns
 */
export const processNumberForDisplay = (inputNumString) => {
  let num = inputNumString.toString().split(".")[0];
  const negativeModifier = num < 0 ? -1 : 0;
  let decimal = inputNumString.toString().split(".")[1] || "";
  if (num.length + negativeModifier > 10) return "ERR";
  if (decimal === "") return num;
  decimal = decimal
    .slice(0, 11 - (num.length + negativeModifier))
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
  try {
    // eslint-disable-next-line no-useless-escape
    let safeInput = inputExpression.replace(/[^\d.+\-\*\/]/g, "");

    // create a regex that matches two minus signs followed by a number
    // and replaces it with one minus sign, followed by the remained in parentheses
    safeInput = safeInput.replace(/-\s*-\s*(\d+)/g, "-(-$1)");

    // eslint-disable-next-line no-eval
    const safeOutput = processNumberForDisplay(eval(safeInput).toString());
    return safeOutput;
  } catch (error) {
    console.log(error);
    return "ERR";
  }
};

/**
 * @function squareRootCalculationMath
 * takes as input a number in string format
 * outputs the square root of that number in string format, already ready
 * for calculator display
 *
 * @param {string} inputNumString
 * @returns {string}
 */
export const squareRootCalculationMath = (inputNumString) => {
  const num = Number(inputNumString);
  if (num < 0) return "ERR";
  const sqrt = Math.sqrt(num).toString();
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
export const toggleNegative = ({ inputNum, result, lastInput }) => {
  // TODO figure out what to do if one of the inputs is ERR (maybe just have a
  // dedicated function we can call to set the calculator into an error state?)

  // if the result is NOT 0 and the inputNum IS 0, return the negative of the result
  if (
    result !== "0" &&
    inputNum === "0" &&
    ["equals", "percent"].includes(lastInput)
  ) {
    const returnValue = processNumberForDisplay(
      (0 - Number(result)).toString()
    );
    return {
      inputNum: returnValue,
      display: returnValue,
      lastInput: "toggleNegative",
    };
  }

  if (isNaN(inputNum)) {
    return { display: "ERR", inputNum: "ERR" };
  }

  let returnValue = processNumberForDisplay((0 - Number(inputNum)).toString());
  // handle zero input
  if (inputNum === "0") returnValue = "-0";
  if (inputNum === "-0") returnValue = "0";

  return {
    display: returnValue,
    inputNum: returnValue,
    lastInput: "toggleNegative",
  };
};
