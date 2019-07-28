# `useWillUnmount`

Equivalent to componentWillUnmount

## Usage

Using this library:
```jsx
import {useWillUnmount} from 'react-use-lifecycle-hooks';

const unSubscribeToUserStatus = () => {
   // A fn which unSubscribes to user Status 
}

const UserStatus = ({name}) => {
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

const UserStatus = ({name}) => {
  useEffect(()=>{
    return () => unSubscribeToUserStatus()
  },[name])
  return null;
};
```

## Signature

```jsx
useWillUnmount(onUnmount);
```