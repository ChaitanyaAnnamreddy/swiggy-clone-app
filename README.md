# Swiggy clone app

This is a Swiggy clone app built using React JS using Ant Design and Parcel.

https://github.com/user-attachments/assets/296ccdbb-8815-42c8-b59d-5133f04a5c5c

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

### context API 
- - provides a way to pass data through the component tree without having to manually pass props through it
- - it is a built-in API of React
- - it is a concept of higher order functions - a function that takes a function as an argument or returns a function as a result

### Redux 

- install 2 libraries @reduxjs/toolkit(npm i @reduxjs/toolkit) from npm package and react-redux(npm i react-redux)
- build our store 
- connect our store to the component
- create a slice(cartSlice)
- - when we click a button we want to change the state of the component so we will dispatch an action to the store with the help of reducer fn and then the reducer fn will modify the slice of redux store

- - read the data from store(get the data from the store)
- - we need to subscribe to the store with the help of selector and then we can get the data from the store
