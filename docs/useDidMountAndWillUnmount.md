# `useDidMountAndWillUnmount`

Equivalent to componentDidMount & componentWillUnmount

## Usage

Using this library:
```jsx
import {useDidMountAndWillUnmount} from 'react-use-lifecycle-hooks';

const subscribeToUserStatus = () => {
   // A fn which subscribes to user Status 
}

const unSubscribeToUserStatus = () => {
   // A fn which unSubscribes to user Status 
}

const UserStatus = () => {
  useDidMountAndWillUnmount({onMount: subscribeToUserStatus, onUnmount:unSubscribeToUserStatus})

  return null;
};
```

Same using useEffect:
```jsx
import {useEffect} from 'react';

const subscribeToUserStatus = () => {
   // A fn which subscribes to user Status 
}

const unSubscribeToUserStatus = () => {
   // A fn which unSubscribes to user Status 
}

const UserStatus = () => {
  useEffect(()=>{
    subscribeToUserStatus()
    return ()=> unSubscribeToUserStatus()
  },[])
  return null;
};
```

## Signature

```jsx
useDidMountAndWillUnmount({onMount, onUnmount});
```