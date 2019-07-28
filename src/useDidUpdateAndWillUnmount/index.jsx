import { useEffect } from 'react';

/* eslint-disable react-hooks/exhaustive-deps */
const useDidUpdateAndWillUnmount = ({ onUpdate, toWatch = [], onUnmount }) => {
  useEffect(() => {
    onUpdate();

    return () => onUnmount;
  }, toWatch);
};

export default useDidUpdateAndWillUnmount;
