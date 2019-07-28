import React from 'react';
import { render } from '@testing-library/react';

import Test from '.';

it('renders the component', () => {
  const { queryByTestId } = render(<Test />);
  expect(queryByTestId('a-test-id')).toBeTruthy();
});
