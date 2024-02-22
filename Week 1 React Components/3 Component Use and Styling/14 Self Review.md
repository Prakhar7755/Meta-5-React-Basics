1.
Question 1
True or False: In React, you need to import a component multiple times – as many times as you plan to render it from its parent’s return statement.

False 

Correct
Correct. You should import the component only once, and then you’re allowed to render it as many times as needed.

2.
Question 2
True or false: You can render more than one child component from the parent component.

1 / 1 point

True 

Correct
Yes. You can render as many of the same component, or as many different components as you like, from the parent component.

3.
Question 3
What is wrong with this code?

4567
function App() {
    return (
        <BlogCard />
        <BlogCard />
        <BlogCard />
    )
}

1 / 1 point



There is no root element.



Correct
Correct. You must wrap all the returned BlogCard compoents in a wrapping element, such as a div.