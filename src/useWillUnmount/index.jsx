import { useEffect } from 'react';

/* eslint-disable react-hooks/exhaustive-deps */
const useWillUnmount = onUnmount => {
  useEffect(() => {
    return () => onUnmount();
  }, []);
};

export default useWillUnmount;
