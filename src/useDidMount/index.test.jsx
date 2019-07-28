import { renderHook } from '@testing-library/react-hooks';

import useDidMount from '.';

describe('useDidMount hook', () => {
  it('should call onMount prop one time on componentDidMount', () => {
    const onMount = jest.fn();
    const { rerender } = renderHook(() => useDidMount(onMount));

    expect(onMount).toHaveBeenCalledTimes(1);

    onMount.mockClear();
    rerender();
    expect(onMount).toHaveBeenCalledTimes(0);
  });
});
