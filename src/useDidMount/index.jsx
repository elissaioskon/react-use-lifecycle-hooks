import { useEffect } from 'react';

/* eslint-disable react-hooks/exhaustive-deps */
const useDidMount = onMount => {
  useEffect(() => {
    onMount();
  }, []);
};

export default useDidMount;
