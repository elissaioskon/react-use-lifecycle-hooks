# Lifecycle Hooks

[![CircleCI](https://img.shields.io/circleci/build/gh/elissaioskon/react-use-lifecycle-hooks/master)](https://circleci.com/gh/elissaioskon/lifecycle-hooks/tree/master)(https://circleci.com/gh/elissaioskon/lifecycle-hooks/tree/master)
[![Npm](https://img.shields.io/npm/v/@elissaioskon/react-use-lifecycle-hooks)](https://www.npmjs.com/package/react-use-lifecycle-hooks)
[![Codecov](https://img.shields.io/codecov/c/github/elissaioskon/react-use-lifecycle-hook)](https://codecov.io/gh/elissaioskon/lifecycle-hooks)
[![Licence](https://img.shields.io/github/license/elissaioskon/react-use-lifecycle-hooks)](https://github.com/elissaioskon/lifecycle-hooks/blob/master/LICENSE)
>Use old react lifecycle hooks componentDidMount, componentDidUpdate etc with react hooks
using useComponentDidMount, useComponentDidUpdate etc.

## Motivation

Using useEffect with second param an empty array instead of componentDidMount makes our code less declarative. Same for other lifecycle hooks.
Using custom hooks of this library we can replace useEffect for most cases resulting in more declarative code.   
But we can use the same useEffect function for both declaring componentDidMount and componentWillUnmount.
For this reason this library provides useDidMountAndWillUnmount, useDidUpdateAndWillUnmount hooks etc. 

Please compare : 

Using this library:
```jsx
const UserStatus = () => {
    useDidMountAndWillUnmount({
       onMount: subscribeToUseStatus,
       onUnmount: unSubscribeFromUserStatus
    })

}
```

Using useEffect hook:
```jsx
const UserStatus = () => {
    useEffect(()=> {
       subscribeToUseStatus()
       return () => unSubscribeFromUserStatus()
    },[])

}
```  

### Install

yarn add @elissaioskon/lifecycle-hooks  
 OR  
npm install @elissaioskon/lifecycle-hooks

### API

- [`useDidMount`](./docs/useDidMount.md) &mdash; same with componentDidMount
- [`useWillUnmount`](./docs/useWillUnmount.md) &mdash; same with componentWillUnmount 
- [`useDidMountAndWillUnmount`](./docs/useDidMountAndWillUnmount.md) &mdash; same with componentDidMount & componentWillUnmount

- [`useDidUpdate`](./docs/useDidUpdate.md) &mdash; same with componentDidUpdate 
- [`useDidUpdateAndWillUnmount`](./docs/useDidUpdateAndWillUnmount.md) &mdash; same with componentDidUpdate & componentWillUnmount

 
### Prerequisites
 
In order to use this library a React version **>=16.8.0** is required which introduce react hooks
