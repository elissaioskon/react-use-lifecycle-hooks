# `useDidUpdateAndWillUnmount`

Equivalent to componentDidUpdate & componentWillUnmount

## Usage

Using this library:
```jsx
import {useDidUpdate} from 'react-use-lifecycle-hooks';

const subscribeToUserStatus = () => {
   // A fn which subscribes to user Status 
}

const unSubscribeToUserStatus = () => {
   // A fn which unSubscribes to user Status 
}

const UserStatus = ({name}) => {
  useDidUpdateAndWillUnmount({onMount: subscribeToUserStatus, onUnmount: unSubscribeToUserStatus, toWatch: [name]})

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

const UserStatus = ({name}) => {
  useEffect(()=>{
    subscribeToUserStatus()
    return () => unSubscribeToUserStatus()
  },[name])
  return null;
};
```

## Signature

```jsx
useDidUpdateAndWillUnmount({onMount, onUnmount, toWatch});
```