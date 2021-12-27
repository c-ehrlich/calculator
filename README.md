
# Calculator

![Calculator Screenshot](https://user-images.githubusercontent.com/8353666/147464964-396d580d-abe5-4a3b-b4e4-ae47f750e54e.png)

A calculator built in React, as a tribute to the iconic Braun ET55 and ET66 calculators. Key features include Regular and Scientific mode, Memory, and extensive styling and animation.

## Installation and Setup 

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installing Dependencies:

`npm install`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  

## Reflection

This started out as a solution to the Calculator project in FreeCodeCamp's React course, but then grew into a personal project that goes far beyond the initial scope.

A online calculator is not a very useful app, as every major desktop and mobile OS ships with a capable built-in calculator. Therefore instead of focusing on utility I instead wanted to replicate the experience of using an analog calculator. The main calculators that I used for reference were a Braun ET 55 and a Texas Instruments TI-501. The feature set and experience of the final calculator is an amalgamation of these two as well as some others.

For design/styling, the main question I asked myself was, "what if iOS 5-style skeuomorphism has continued into the present day of high dpi displays and ample computing power?". The iOS 5 calculator app also referenced a Braun calculator (though much less literally than this project). I wanted to take that idea to its logical conclusion - so for example, clicking a button gives the impression of pressing a physical button. And instead of using the built-in math functionality of Javascript (or any other language) that allows for large double-precision float numbers or similar, I wanted to limit number size to the number of digits that can be displayed on the display, like very early physical calculators did. Therefore, examples of numbers that use the entire length of the display include `0.000000001`, `10000000000`, and `10000.00001`.

Other than styling, the main challenge of this project was that while building a simple calculator is trivial, one that can do both Immediate Execution (Regular Mode) and Formula Logic (Scientific Mode) requires a significant amount of internal state, and has a fairly large amount of edge cases for what each button should do based on previous inputs. Additionally, the limited amount of characters available on the display means that implementing several functions correctly (ie not just trimming the output) requires additional logic on top of JavaScript's built-in math functions. I had a lot of fun trying to find and implement every possible edge case, and doing so while adding as little branching as possible to the code.

The technologies implemented in this project are React, Zustand for state management, and a significant amount of VanillaJS, JSX, and CSS implemented via Styled Components. Zustand is a fantastic state management library and I will continue to use it in future personal projects. Same for Styled Components, which to me represents the most elegant solution to keeping functionality and styling separate but easy to read. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into implementation and styling. In ta future iteration I plan on handrolling a `webpack.config.js` file to more fully understand the build process.

The main issue that remains is that the calculator doesn't resize properly on very small screens (such as iPhone 6). Fixing this would mostly require adding another breakpoint and changing the sizing of all elements and shadows. If I were to rebuilt the project from scratch, I would instead size everything in EM and [scale the entire app by changing container font size](https://www.lullabot.com/articles/scaling-css-components-with-bem-rems-ems).
