# `useDidMount`

Equivalent to componentDidMount


## Usage

Using this library:
```jsx
import {useDidMount} from 'react-use-lifecycle-hooks';

const subscribeToUserStatus = () => {
   // A fn which subscribes to user Status 
}

const UserStatus = () => {
  useDidMount(subscribeToUserStatus)

  return null;
};
```

Same using useEffect:
```jsx
import {useEffect} from 'react';

const subscribeToUserStatus = () => {
   // A fn which subscribes to user Status 
}

const UserStatus = () => {
  useEffect(()=> subscribeToUserStatus,[])

  return null;
};
```

## Signature

```jsx
useDidMount(onMount);
```

