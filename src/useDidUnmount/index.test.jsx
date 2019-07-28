import { renderHook } from '@testing-library/react-hooks';

import useDidUnmount from '.';

describe('useDidMountAndUnmount hook', () => {
  const onUnmount = jest.fn();

  it('should call onUnmount prop one time when hook unmounts', () => {
    const { unmount } = renderHook(() => useDidUnmount(onUnmount));

    expect(onUnmount).toHaveBeenCalledTimes(0);

    unmount();
    expect(onUnmount).toHaveBeenCalledTimes(1);
  });
});
