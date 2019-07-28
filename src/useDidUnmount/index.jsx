import { useEffect } from 'react';

/* eslint-disable react-hooks/exhaustive-deps */
const useDidUnmount = onUnmount => {
  useEffect(() => {
    return () => onUnmount();
  }, []);
};

export default useDidUnmount;
