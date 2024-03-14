https://www.coursera.org/learn/react-basics/lecture/TtjoP/children-and-data

Which of the following statements about data flow in React are correct? Select all that apply.      


State data is data inside the component, and the component can control and mutate the data.     

Correct
That’s right! State data is a component’s internal data, which it can control and mutate. Props data is outside of the component and is immutable, meaning it cannot change.     

The props data is data outside the component and cannot mutate.     

Correct
That’s right! State data is a component’s internal data, which it can control and mutate. Props data is outside of the component and is immutable, meaning it cannot change.      






In this video, you're
going to learn about data flow in ReactJS. In this case, data flow
is in one direction only. Immediately a question
springs to mind. Why is one-way flow
in React important? Let me tell you. This type of data flow ensures
that the data is moving from top to bottom through
the component hierarchy. It also ensures that changes are transmitted
through the system. You'll cover this in
more detail later. For now in this video, you will also learn how
to showcase the use of stateless and stateful examples
by focusing on data flow. Imagine that data is money and the money is controlled
by your employer. This money can be
considered props. This money props is passed to you and becomes
your money state. The money props always flow
from your employer to you, never in the opposite direction. In React, data is
passed down from parent components to a
child components via props. A child components can't
mutate or change its props. It can only read
them and re-render. This means that the
data comes from the parents and it's just consumed in the
child components. However, if this was
always the case, then all you'd have in a React
app is separate pieces of the DOM acting as component templates to be filled up
with a data they receive. While this works great, there'd be almost
no interactivity. You've learned about
passing data to a child component using props. However, there's
another way to work with data in React components, and that data is
referred to as state. All the data in React can be divided into props
data and states data. Props data is data
outside the components that it receives and works
with but cannot mutate. State data is data inside the components that it
controls and can mutate. It also helps to think
of it like this. The prop data are belongs to the parent that renders
the components. The state data belongs
to the component itself. To demonstrate
this, let's open up VS Code and work
through an example. I've built a new app
using Create React app. I have two files created,
app.js and child.js. The app.js file defines the app components using a class definition
instead of a function. When it's created, it initializes its state
with the current date. The render function then renders a component
called child. The child's components
has a prop named message defined and its value is set as the current dates from the component's state
converted to a string format, which includes the hours, minutes, and seconds
of the date. In the child.js file, the component renders the
message prop in an H1 elements. Now when I run the app, the state of the app
component flows. It stays down to the
child component props, and the H1 elements will display the current
date and time. Well done. You've
now learned how children and data
flows in ReactJS. You should also be able
to showcase the use of stateless and stateful examples
by focusing on data flow.
