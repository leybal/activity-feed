import React from 'react';
import {formatDistanceToNow} from 'date-fns';
import {IconButton, ListItem, ListItemText, ListItemSecondaryAction, ListItemIcon} from '@mui/material';
import {Delete} from "@mui/icons-material";
import {NoteTypeIcons} from '../../constants';
import {Note} from '../../models/Note';


interface NoteItemProps {
    note: Note;
    onDeleteNote: (id: string) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, onDeleteNote }) => {
    return (
        <ListItem alignItems="flex-start">
            <ListItemIcon>
                {React.createElement(NoteTypeIcons[note.type])}
            </ListItemIcon>
            <ListItemText
                primary={
                    <>
                        <strong>{note.user}</strong> had a {note.type.toLowerCase()} with <strong>{note.partner}</strong>
                    </>
                }
                secondary={
                    <>
                        <span style={{color: 'black'}}>{note.content}</span>
                        <br />
                        {formatDistanceToNow(note.timestamp, {addSuffix: true})}
                    </>
                }
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" onClick={() => onDeleteNote(note.id)}>
                    <Delete />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>

    );
};

export default NoteItem;