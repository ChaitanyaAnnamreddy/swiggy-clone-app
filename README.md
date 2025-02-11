# Swiggy clone app

This is a Swiggy clone app built using React JS using Ant Design and Parcel.

## React.createElement => ReactElement - JS Object => HTMLElement(render)

const heading = React.createElement('h1', { id: 'heading' }, 'Swiggy Clone App')
console.log(heading)

- - JSX - is not HTML in JS
- - JSX - is HTML like or XML like syntax
- - JSX - allows us to write HTML in JS
- - JSX(transpiled(converted) before it reaches the JS Engine) - parcel gives the work to Babel - converts JSX into DOM as HTML element
- - JSX => React.createElement => ReactElement (JS Object) => DOM(HTML)

const JSXHeading = () => <h1 id="jsxHeading">Swiggy Clone JSX App</h1>

- - React Components
- - React Component => Class Component
- - React Component => Function Component - a component that is defined using a function
- - Component composition - combining multiple components into a single component

## Higher Order Components

- - a component that takes a component and returns a new component
