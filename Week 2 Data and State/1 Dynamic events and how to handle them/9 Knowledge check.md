1.
Question 1
What code should be added to the element button to make this code snippet valid?

13910111267834512
function App() {

  function handleClick() {
    console.log("clicked")
  }

  return (
    <div className="App">
      <button >Click me</button>
    </div>


1 / 1 point

onClick={handleClick}


onClick={handleClick()}


click=handleClick

Correct
Correct. This is the correct syntax. 

2.
Question 2
Imagine that you have a variable named userLoggedIn and it’s set to the boolean of true. How would you complete the below clickHandler function declaration to toggle the value of the userLoggedIn boolean?

123
function clickHandler() {
}


1 / 1 point

userLoggedIn = false


userLoggedIn = true


userLoggedIn = !userLoggedIn

Correct
That’s correct! This will toggle the boolean value from true to false, and from false to true.

3.
Question 3
Is a click handler on its own enough to change the values of variables in your React apps?

1 / 1 point

No


Yes

Correct
That’s correct! You need to also use something known as “hooks”.

4.
Question 4
What are the ways to write an event-handling function in React. Select all that apply.

1 / 1 point

Using a separate function expression

Correct
That’s right! A separate function expression is a valid way to handle an event in React. 


Using a separate function declaration

Correct
That’s right! A separate function declaration is a valid way to handle an event in React.


With an inline anonymous ES5 function

Correct
That’s right! An inline anonymous ES5 function is a valid way to handle an event in React.


With an inline, anonymous ES6 function (an arrow function)

Correct
That’s right! An inline anonymous ES6 function (an arrow function) is a valid way to handle an event in React.

5.
Question 5
Choose the appropriate code on line 3 of the following component – to handle a click event.

45678910111213123
function App() {

  function () {
    console.log("clicked")
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
    </div>


1 / 1 point

function handleClick {


function HandleClick() {


function handleClick() {

Correct
That’s correct. This return statement will show the Example component on the screen.