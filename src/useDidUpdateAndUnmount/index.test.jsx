import { renderHook } from '@testing-library/react-hooks';

import useDidUpdateAndUnmount from '.';

describe('useDidUpdateAndUnmount hook', () => {
  it('should call onUpdate prop when a variable to watch changes', () => {
    const onUpdate = jest.fn();
    const onUnmount = jest.fn();
    let aVariableToWatch = 0;

    const { rerender } = renderHook(() =>
      useDidUpdateAndUnmount({
        onUpdate,
        toWatch: [aVariableToWatch],
        onUnmount
      })
    );

    expect(onUpdate).toHaveBeenCalledTimes(1);

    onUpdate.mockClear();
    aVariableToWatch = 1;
    rerender();

    expect(onUpdate).toHaveBeenCalledTimes(1);
  });
});
