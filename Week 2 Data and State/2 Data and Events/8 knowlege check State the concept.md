1.
Question 1
In React, can state be considered data?

1 / 1 point

Yes


No

Correct
Correct. In React, an app’s data can be expressed as state. 

2.
Question 2
In React, can props be considered data?

1 / 1 point

Yes


No

Correct
Correct. In React, an app’s data can be expressed as props. 

3.
Question 3
Choose the correct statement.

1 / 1 point

The props object represents data that is external to a component, and state represents data that is internal to a component.


The props object represents data that is internal to a component, and state represents data that is external to a component.

Correct
That’s correct! The props data is controlled outside of a component, and the state data is controlled by the component itself.

4.
Question 4
What does the useState hook do?

1 / 1 point

It allows a component to have its own state.


It allows a component to receive state from its parent.

Correct
That’s right! The useState hook allows a component to have its own state.

5.
Question 5
Based on the code below, is the userName variable external or internal data of the DisplayUser component?

123456
function DisplayUser(props) {
  return (
    <h1>{props.userName}</h1>
  );
}


1 / 1 point

The userName value is data that is external to the DisplayUser component


The userName value is data that is internal to the DisplayUser component

Correct
That’s correct. The userName value comes from the parent component, and thus is not controlled by the DisplayUser component.