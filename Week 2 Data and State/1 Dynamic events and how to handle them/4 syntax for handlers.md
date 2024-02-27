Every time you click
or tap a button, scroll down the page or
cancel a boring notification, you're producing
events in the browser. As you learned earlier, in order for these events
that have any effect, you need to use event handlers that will then
execute an action. For example, suppose you use
a button to open a menu. Clicking the button
is the event. The event handler is on
click and the action that follows the event
is opening the menu. There are a few
approaches to adding event handlers to
your react to code that have different advantages, so you become familiar
with each of them. By the end of this video, you'll be able to describe the syntax differences for using event handlers in
HTML and React. You will also know
how to explain HTML function call and
React component inclusion, and discuss the advantage of the component level of control. Suppose you're a developer
working on a React app and you need to create a
button that will trigger an event when a
user clicks on it. With that scenario in mind, let's examine some codes that accomplishes this in plain HTML. You might open a tag called
button with the ID js-btn. You then assign the on click
event handling attribute and set it equal to the
click handler function. Next, you can add Click
me as the button text and finish with a closing tag. The code has an ID HTML attribute
with a value JS button, along with the event handling
attribute on the click. While the HTML code in the example seems
pretty straightforward, it's recommended to
use JavaScript for scenarios like these instead. Why is that? Well, you'll find out later. But for now, you should understand that the
equivalent code in JavaScript consists
of two primary steps. First, you should use
JavaScript to plug into these specific HTML element on what you'd like to
listen to for an event. In the previous example, the HTML element is js button, which signals that it's a
target element for allowing JavaScript to take control
of the HTML structure. Second, once you've
got an access to an HTML elements
with JavaScript, you can then use the built-in
add EventListener method on the document object to attach a specific
event listener. When you apply this method
to the previous example, HTML is removed
from the equation, but the code on the other hand, is a bit more complicated. Specifically, you need to
first declare a constant called JS button and assign
the value from the DOM. Then you need to add the
click listener event and the function
to run the code. Going back to React. The biggest difference
in syntax involves the use of the
addEventListener method. In React. The rule is to
avoid manipulating the DOM directly as
much as possible. You should set everything
up declaratively, meaning that you describe
updates to React and let it figure out the rest. This is best done using event
attribute, unfortunately, one-to-one mapping between
HTML event attributes and JSX event attributes
means it's easier to learn. Event handling in React is
overall quite similar to HTML. But note that there is no
function invocation syntax in event handling
attribute in React. In other words, while
in plain JavaScript, you would need to
pass an invocation to an event handling function as a value to the on click events. In React, you should
not invoke a function. Instead, you just
pass a reference to the event handling function
without invoking it. To illustrate that point, let's compare the syntax of an HTML click handler event and it's reactor JSX equivalent. In HTML, you provide the event handling
attribute starting with on, and you append the
name of the event. All lowercased. After the equal sign, you use a pair of double quotes. Inside of the double
quote delimiters, you invoke the function that
will run contrary to HTML. In React, you provide the event handling
attributes starting with on, and you append the
name of the event with each words first
letter capitalized. After the equal sign, you use the JSX
expression delimiters, that is the opening and
closing curly braces. Inside of the curly
brace delimiters, you add the name of the
function to be run. Make sure not to invoke it. Finally, one more
feature only using React is the passing of
function declarations as props. For example, in
an app component, let's say you'd like to render a child component named counter. You can pass some data
from the app component to the counter
component using a prop. In this case, let's
use an on click prop that passes in the
data that you want the Counter component
to receive. There you have it. The next time you're clicking
buttons on a webpage, closing notifications or
simply browsing through, you'll understand
that those events are supported by some form
of event handling. In this video, you learned
how to distinguish the syntax for event handling in
HTML and JavaScript.