import React, {memo} from 'react';
import {List} from '@mui/material';
import NoteItem from '../NoteItem/NoteItem';
import {Note} from '../../models/Note';


interface ActivityFeedProps {
    notes: Note[];
    onDeleteNote: (id: string) => void;
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({ notes, onDeleteNote }) => {
    return (
        <List
            aria-label="main">
            {notes.map(note => (
                <NoteItem key={note.id} note={note} onDeleteNote={onDeleteNote} />
            ))}
        </List>
    );
};

export default memo(ActivityFeed);