import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
    const { getByLabelText } = render(<App />);

    expect(getByLabelText(/Add a note/i)).toBeInTheDocument();
});
