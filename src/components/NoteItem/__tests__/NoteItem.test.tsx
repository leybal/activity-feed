import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NoteItem from '../NoteItem';
import { Note, NoteType } from '../../../models/Note';

test('renders without crashing', () => {
    const note: Note = {
        id: '1',
        user: 'Test User',
        partner: 'Test Partner',
        type: NoteType.MeetingNote,
        content: 'Test Content',
        timestamp: new Date(),
    };

    const { getByText } = render(<NoteItem note={note} onDeleteNote={() => {}} />);
    expect(getByText(/Test User/)).toBeInTheDocument();
});

test('calls onDeleteNote when delete button is clicked', () => {
    const note: Note = {
        id: '1',
        user: 'Test User',
        partner: 'Test Partner',
        type: NoteType.MeetingNote,
        content: 'Test Content',
        timestamp: new Date(),
    };

    const onDeleteNote = jest.fn();

    const { getByRole } = render(<NoteItem note={note} onDeleteNote={onDeleteNote} />);
    fireEvent.click(getByRole('button'));
    expect(onDeleteNote).toHaveBeenCalledWith('1');
});