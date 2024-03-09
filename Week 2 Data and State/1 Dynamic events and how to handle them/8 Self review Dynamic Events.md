1.  Question 1
    In React, you are not allowed to code a separate function that should be run to handle a click event.

1 / 1 point

True

False

Correct
Correct. Passing the function name such as “clickHandler” to the onClick handler, and wrapping it in a JSX expression, then coding a clickHandler function declaration, is a common way of handling a click event in React.

2.  Question 2
    Event-handling attributes in React are named almost the same as in HTML. Syntactically, the only difference is in the capitalization.

1 / 1 point

True

False

Correct
That's right. Syntactically, the only difference is that HTML attributes are all lowercased, while React attributes are camelCased.

3.  Question 3
    What's wrong with this code?

123
<button onClick={handleClick()}>
Click me
</button>

1 / 1 point

You cannot invoke an event-handling function from a JSX expression.

The event-handling attribute should be all lowercased.

This code should work.

Correct
Correct. This code would not work. The code that would work would need to be as follows: onClick={handleClick}.
