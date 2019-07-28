import { useEffect } from 'react';

/* eslint-disable react-hooks/exhaustive-deps */
const useDidMountAndUnmount = ({ onMount, onUnmount }) => {
  useEffect(() => {
    onMount();

    return () => onUnmount();
  }, []);
};

export default useDidMountAndUnmount;
