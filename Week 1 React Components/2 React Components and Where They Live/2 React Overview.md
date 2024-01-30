Recall the concept of the single-page
application or SPA for short? This is a one-page website where some of
the pages content changes based on user interaction. SPA differ from traditional website, where each web page needs to be loaded
as the user navigates around the site. This frequent reload can be considered
inefficient as some of the same content such as logos, navigation, and
footers need to be loaded again. And one of the most popular ways to
build an SPA is with the React library from Meta. React used to run many of
the world's most popular websites. Often on these sites, you're type
a search term into the sites input box. The site then returns
the relevant content or results. But you might notice that even
though the content has updated, the sites URL doesn't change. As SPA only load the content as required,
they can be ideal for businesses and enterprises who need a web app
that offers rich user interfaces, speed scalability, and flexibility. As an aspiring developer, you may feel
like there are a lot of new concepts and processes to understand when working with
React but you can be sure that you will have an opportunity to get
familiar with and use them. In this video, you will learn about the
basics of React by exploring the concepts of the component-based architecture
components and the virtual DOM. Let's begin with components. One of the core building blocks of React. When meta released the React library, it included the concept of something
called component-based architecture. This is essentially
a design philosophy for building software based on
reusable components of code. Each component consists of well-defined
functionality that can be inserted into an application without requiring
modification of other components. Because components are reusable,
they can be used multiple times and easily inserted anywhere we're needed. This results in components that can
exist within the same space yet interact independently from each other. One of the advantages of developing using
components is that many developers can work on the same project
without interfering with the code of other developers' components. As you may recall, modern front-end
web development revolves around the concept of creating standalone parts
of the user interface, or UI for short. Well, in react,
these standalone parts are created using components which form
the foundation of all UI design. It's important to know that all UI is
composed of simple components that can be combined into more complex components. In fact, you can think of an entire website
is just a collection of components. For example, consider the product check
out page of an e-commerce web application. The page consists of three sections, a
header, a payment section, and a sidebar. The header section contains the company
logo with a navigation menu and a button to view the shopping cart. The payment section area contains a form
where the user inputs their payment information. Finally, there's a sidebar with
the order summary information. As the components are self-contained,
they have their own HTML, CSS, and JavaScript logic for functionality. For example, the payment section
component has a JavaScript function that submits a payment when
a button is clicked. It's important to know that the use of
components in website UI design is not limited to just React. Many website's front end or UI are built
on the foundations of components and compose ability. But React is a powerful tool for streamlining the process of building
components and composing them. It performs these actions efficiently as
components are rendered to the DOM without significantly impacting
the browser's resources. This is called component rendering and
you'll learn more about this and its associated render method later. You may recall that the DOM is a logical
tree-like structure representing the HTML document and it uses nodes to describe
the various parts of the document. Before React, you could still
build components style layouts. However, it involved much more
complicated DOM manipulation and code making the layouts more complex and
harder to work with. This resulted in something
known as spaghetti code, a term developers use in web development
to describe code that is complex, convoluted, and
difficult to understand like spaghetti. Reacts prevents this spaghetti code by
avoiding any manipulation of the DOM. Instead, React to provide something
known as the virtual DOM. You may recall that this is
an in-memory representation or clone of the real DOM which
minimizes updates to the DOM itself. React uses the virtual DOM to update
the browser Dom only when needed. This ensures that the update
is as minimal as possible, increasing the application speed and
performance. In this video, you learned about the
basics of React by exploring the concepts of the component-based architecture
components and the virtual DOM.