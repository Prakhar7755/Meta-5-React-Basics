1.
Question 1
What is the Context API?

1 / 1 point

An alternative way to working with state in React.


A way to change the execution context of a function in JavaScript.

Correct
Correct. Context API is used to work with state from a global store in react. 

2.
Question 2
When working with useState to keep state in a variable, you should not use array destructuring.

1 / 1 point

True


False

Correct
Correct. You should always use array destructuring when working with useState. 

3.
Question 3
If a state variable is destructured from useState, and set to variable name of user, the name of the function to update the user state variable should be...

1 / 1 point

useUser


userSetter


setUser


useState

Correct
That’s correct! The convention is to name the state-setting function using the word “set” plus whatever the name of the state variable is, all written in camelCase.

4.
Question 4
What does the concept of “lifting up state” entail?

1 / 1 point

It involves moving the state from the child component to the parent component.


It involves moving the state from the parent component to the child component.

Correct
That’s right! Lifting up state means moving state up from a child to the parent component.

5.
Question 5
What is a negative result of lifting up state in a React app?

1 / 1 point

There are no negatives from lifting up state in React.


It can significantly increase the number of components that you need to create.


Prop drilling.

Correct
That’s correct. Lifting up state can sometimes lead to prop drilling, which lowers maintainability and modularity of a React app.