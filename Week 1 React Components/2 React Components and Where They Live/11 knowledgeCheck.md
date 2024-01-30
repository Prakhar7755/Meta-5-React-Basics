1.
Question 1
What type of casing should be used when adding a component name after a function keyword?

1 / 1 point

PascalCase (UpperCamelCase)


lowerCamelCase


kebab-cased

Correct
Correct! The first letter should be uppercased, with all the following words starting with an uppercased letter, without spaces.

2.
Question 2
There are two components at the root of the src folder: Example and App. What syntax should you use to import the Example component into the App component?

1 / 1 point

import Example;


import Example from "./Example"


import “Example”;

Correct
That’s correct! The syntax has the following structure: import ComponentName from "./ComponentName"

3.
Question 3
True or False: You can omit the ./ from the import statement when both the exported and the imported components are in the same folder.

1 / 1 point

True


False

Correct
That’s correct! You cannot omit the ./ symbols from your syntax.

4.
Question 4
Pick the correct syntax needed to export a component so that it can be imported.

1 / 1 point

export default;


export default Example;


export example;


export standard Example;

Correct
That’s right! The correct syntax includes the keywords export, followed by default, followed by the name of the component. 

5.
Question 5
You've imported the Example component into the App component. What will the following syntax do: return ( <Example /> )?

0 / 1 point

It will render the Example component on the screen.


It will show a warning.


It will throw an error.


It will render the App component on the screen.

Incorrect
Not quite. This return statement will show the  Example component on the screen, as long as the  Example component has been correctly imported.