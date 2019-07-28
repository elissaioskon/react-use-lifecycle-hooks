import { useEffect } from 'react';

/* eslint-disable react-hooks/exhaustive-deps */
const useDidMountAndWillUnmount = ({ onMount, onUnmount }) => {
  useEffect(() => {
    onMount();

    return () => onUnmount();
  }, []);
};

export default useDidMountAndWillUnmount;
