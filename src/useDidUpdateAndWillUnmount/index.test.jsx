import { renderHook } from '@testing-library/react-hooks';

import useDidUpdateAndWillUnmount from '.';

describe('useDidUpdateAndWillUnmount hook', () => {
  it('should call onUpdate prop when a variable to watch changes', () => {
    const onUpdate = jest.fn();
    const onUnmount = jest.fn();
    let aVariableToWatch = 0;

    const { rerender } = renderHook(() =>
      useDidUpdateAndWillUnmount({
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
