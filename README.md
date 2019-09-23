
****This library is DEPRECATED and no longer maintained****

**Reason is:** 
> The question is not "when does this effect run" the question is "with which state does this effect synchronize with"
Please check the discussion [here](https://twitter.com/_developit/status/1124857230149312513)


# Lifecycle Hooks

[![CircleCI](https://img.shields.io/circleci/build/gh/elissaioskon/react-use-lifecycle-hooks/master)](https://circleci.com/gh/elissaioskon/lifecycle-hooks/tree/master)
[![Npm](https://img.shields.io/npm/v/react-use-lifecycle-hooks)](https://www.npmjs.com/package/react-use-lifecycle-hooks) 
[![Codecov](https://img.shields.io/codecov/c/github/elissaioskon/lifecycle-hooks)](https://codecov.io/gh/elissaioskon/lifecycle-hooks) 
[![Licence](https://img.shields.io/github/license/elissaioskon/lifecycle-hooks)](https://github.com/elissaioskon/lifecycle-hooks/blob/master/LICENSE)
>Use old react lifecycle hooks componentDidMount, componentDidUpdate etc with new react hooks api
using useDidMount, useDidUpdate etc instead of using useEffect.

## Motivation

Using useEffect with second param an empty array instead of componentDidMount makes our code less declarative. Same for other lifecycle hooks.
Using custom hooks of this library we can replace useEffect for most cases resulting in more declarative code.   
But we can use the same useEffect function for both declaring componentDidMount and componentWillUnmount.
For this reason this library provides useDidMountAndWillUnmount, useDidUpdateAndWillUnmount hooks etc. 

Using this library:

```jsx
import {useComponentDidMount} from 'react-use-lifecycle-hooks'

const UserStatus = () => {
    useComponentDidMount(subscribeToUserStatus)
    return null
}
```

Using useEffect hook:
```jsx
const UserStatus = () => {
    useEffect(()=> {
       subscribeToUseStatus()
    },[])
    
    return null
}
```  
<br>
Also you can import every hook from its own file in order to not use every hook in your codebase.  
      
e.g: `import useComponentDidMount from 'react-use-lifecycle-hooks/dist/useComponentDidMount' `  
<br>

### Install

- Using yarn   
    yarn add react-use-lifecycle-hooks  
 
- Using npm   
    npm install react-use-lifecycle-hooks  
 

### API

- [`useDidMount`](./docs/useDidMount.md) &mdash; same with componentDidMount
- [`useWillUnmount`](./docs/useWillUnmount.md) &mdash; same with componentWillUnmount 
- [`useDidMountAndWillUnmount`](./docs/useDidMountAndWillUnmount.md) &mdash; same with componentDidMount & componentWillUnmount

- [`useDidUpdate`](./docs/useDidUpdate.md) &mdash; same with componentDidUpdate 
- [`useDidUpdateAndWillUnmount`](./docs/useDidUpdateAndWillUnmount.md) &mdash; same with componentDidUpdate & componentWillUnmount

`Every lifecycle hook can be used more than one time in the same function.`

### Prerequisites
 
In order to use this library a React version **>=16.8.0** is required which introduce react hooks
