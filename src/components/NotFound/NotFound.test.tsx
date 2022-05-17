// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './NotFound';

test('renders learn react link', () => {
  const { getByText } = render(<NotFound />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
