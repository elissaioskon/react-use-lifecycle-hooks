import { useEffect } from 'react';

/* eslint-disable react-hooks/exhaustive-deps */
const useDidUpdate = (onUpdate, varsToWatch = []) => {
  useEffect(() => {
    onUpdate();
  }, varsToWatch);
};

export default useDidUpdate;
