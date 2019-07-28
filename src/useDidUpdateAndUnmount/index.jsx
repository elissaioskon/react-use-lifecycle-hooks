import { useEffect } from 'react';

/* eslint-disable react-hooks/exhaustive-deps */
const useDidUpdateAndUnmount = ({ onUpdate, toWatch = [], onUnmount }) => {
  useEffect(() => {
    onUpdate();

    return () => onUnmount;
  }, toWatch);
};

export default useDidUpdateAndUnmount;
