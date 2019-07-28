# `useWillUnmount`

Equivalent to componentWillUnmount

## Usage

Using this library:
```jsx
import {useWillUnmount} from 'react-use-lifecycle-hooks';

const unSubscribeToUserStatus = () => {
   // A fn which unSubscribes to user Status 
}

const UserStatus = () => {
  useWillUnmount(unSubscribeToUserStatus)
  return null;
};
```

Same using useEffect:
```jsx
import {useEffect} from 'react';

const unSubscribeToUserStatus = () => {
   // A fn which unSubscribes to user Status 
}

const UserStatus = () => {
  useEffect(()=>{
    return () => unSubscribeToUserStatus()
  },[])
  return null;
};
```

## Signature

```jsx
useWillUnmount(onUnmount);
```