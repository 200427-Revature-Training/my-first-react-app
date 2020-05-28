# React

React is a JavaScript library for the development of single page applications (SPAs). SPAs are web application which function more like desktop applications - meaning that we aren't navigating to new pages using <a href="..."> but instead all navigation is managed internally.  As browser navigation causes a complete loss of all data stored in JS, we want to avoid this so that the SPA can maintain its state.  We could describe a SPA as an application which maintains its own state and view throughout the application lifecycle.

Some examples of SPAs that you might be familiar with:
    1. Google Sheets - Even though it is in the browser, it feels like a native spreadsheet tool.
    2. Facebook

React was developed the internal client development tool by Facebook and was then released for public usage as OSS. React is lightweight, JavaScript based, and component based SPA library. React iself is a small library and often relies on additional extensions for added functionality.

## Components
On a website, the view could be separated into a variety of distinct partitions.  For instance, a website might have a header, it might have a footer, it might main content area, it may have navigational bar, or a side panel, or a menu, etc.  Each of these paritions has a distinct purpose and potentially its own state.  In a component based framework or library, we break each of these partitions into individual components and develop them independently. Essentially, components are a method of modularizing a website. Components are reusable, so we can create components that can be leveraged many times, even in the same view.

Our initial goals for React will be to learn how components work individually and together.

## Components in React
We will we developing using 'function components'. This is the most modern approach to component development in React. Syntactically, a component is a function that returns a view. These functions roughly qualify as 'pure functions', meaning that provided the same input they will always provide the same output. Components in React who two kinds of 'input' - state and props. State is data that the component owns.  Props are data given to the component from a parent.

### TSX/JSX
Files are a TypeScipt or JavaScript extended to support HTML syntax embedded
as a form of object. These file types are used for components. NOTE: In a few places traditional naming conventions for HTML names are changed to avoid naming collisions with JavaScript.  For example, instead of using <div class="class-name">, we must use <div className="class-name"> as 'class' is also a keyword in JavaScript.