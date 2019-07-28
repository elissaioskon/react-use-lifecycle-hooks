import { renderHook } from '@testing-library/react-hooks';

import useDidMountAndUnmount from '.';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('useDidMountAndUnmount hook', () => {
  const onMount = jest.fn();
  const onUnmount = jest.fn();

  it('should call onMount prop one time on componentDidMount', () => {
    const { rerender } = renderHook(() =>
      useDidMountAndUnmount({ onMount, onUnmount })
    );

    expect(onMount).toHaveBeenCalledTimes(1);

    onMount.mockClear();
    rerender();
    expect(onMount).toHaveBeenCalledTimes(0);
  });

  it('should call onUnmount prop one time on componentDidUnmount', () => {
    const { unmount } = renderHook(() =>
      useDidMountAndUnmount({ onMount, onUnmount })
    );

    expect(onUnmount).toHaveBeenCalledTimes(0);

    unmount();
    expect(onUnmount).toHaveBeenCalledTimes(1);
  });
});
