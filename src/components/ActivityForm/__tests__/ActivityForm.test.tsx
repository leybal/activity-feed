import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ActivityForm from '../ActivityForm';


test('renders NoteInput and responds to user input', () => {
    const handleAddNote = jest.fn();
    const { getByText, getByLabelText } = render(<ActivityForm onAddNote={handleAddNote} />);

    fireEvent.change(getByLabelText(/Add a note/i), { target: { value: 'Test note' } });
    fireEvent.click(getByText(/Submit/i));

    expect(handleAddNote).toHaveBeenCalledWith({
        id: expect.any(String),
        timestamp: expect.any(Date),
        user: 'You',
        type: 'Message',
        content: 'Test note',
        partner: 'Milton Romaguera',
    });
});
