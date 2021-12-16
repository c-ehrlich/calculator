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
  const safeInput = inputExpression.replace(/[^\d.+\-\*\/]/g, '');
    console.log(safeInput);
    // eslint-disable-next-line no-eval
    const safeOutput = eval(safeInput).toString();
    console.log(safeOutput);
    return safeOutput;
  } catch (e) {
    console.log(e);
    return "ERR";
  }
}