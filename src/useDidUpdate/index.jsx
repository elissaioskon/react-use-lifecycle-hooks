import { useEffect } from 'react';

/* eslint-disable react-hooks/exhaustive-deps */
const useDidUpdate = (onUpdate, toWatch = []) => {
  useEffect(() => {
    onUpdate();
  }, toWatch);
};

export default useDidUpdate;
