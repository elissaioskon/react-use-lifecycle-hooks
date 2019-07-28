# `useDidUpdate`

Equivalent to componentDidUpdate

## Usage

Using this library:
```jsx
import {useDidUpdate} from 'react-use-lifecycle-hooks';

const subscribeToUserStatus = () => {
   // A fn which subscribes to user Status 
}

const UserStatus = ({name}) => {
  useDidUpdate(subscribeToUserStatus, [name])

  return null;
};
```

Same using useEffect:
```jsx
import {useEffect} from 'react';

const subscribeToUserStatus = () => {
   // A fn which subscribes to user Status 
}

const UserStatus = ({name}) => {
  useEffect(()=>{
    subscribeToUserStatus()
  },[name])
  return null;
};
```

## Signature

```jsx
useDidUpdate(onUpdate, toWatch);
```