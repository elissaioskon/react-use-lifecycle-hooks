import { renderHook } from '@testing-library/react-hooks';

import useDidUpdate from '.';

describe('useDidUpdate hook', () => {
  it('should call onUpdate prop only on mount when varsToWatch prop is not passed', () => {
    const onUpdate = jest.fn();

    const { rerender } = renderHook(() => useDidUpdate(onUpdate));

    expect(onUpdate).toHaveBeenCalledTimes(1);

    onUpdate.mockClear();
    rerender();
    expect(onUpdate).toHaveBeenCalledTimes(0);
  });

  it('should call onUpdate prop when a variable to watch changes', () => {
    const onUpdate = jest.fn();
    let aVariableToWatch = 0;

    const { rerender } = renderHook(() =>
      useDidUpdate(onUpdate, [aVariableToWatch])
    );

    expect(onUpdate).toHaveBeenCalledTimes(1);

    onUpdate.mockClear();
    aVariableToWatch = 1;
    rerender();

    expect(onUpdate).toHaveBeenCalledTimes(1);
  });
});
