import React, {memo, useState, ComponentProps, useCallback} from 'react';
import {Button, TextField, Grid} from '@mui/material';
import {v4 as uuidv4} from "uuid";
import {Note, NoteType} from '../../models/Note';
import ActivityIcon from "../ActivityIcon/ActivityIcon";

type NativeProps = ComponentProps<'form'>;

interface ActivityFormProps extends NativeProps {
    onAddNote: (note: Note) => void;
}

const ActivityForm: React.FC<ActivityFormProps> = ({ onAddNote, ...rootProps}) => {
    const [content, setContent] = useState('');
    const [type, setType] = useState<NoteType>(NoteType.Massage);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const note = {
            id: uuidv4(),
            timestamp: new Date(),
            user: 'You',
            partner: 'Milton Romaguera',
            type,
            content
        };
        onAddNote(note);
        setContent('');
    };

    const onChangeActivity = useCallback((noteType: NoteType) => {
        setType(noteType);
    }, []);

    return (
        <form {...rootProps} onSubmit={handleSubmit}>
            <TextField
                label="Add a note"
                variant="outlined"
                sx={{mb: 2}}
                fullWidth
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <Grid container>
                <Grid item>
                    {Object.values(NoteType).map((noteType) => (
                        <ActivityIcon
                            key={noteType}
                            noteType={noteType}
                            activeType={type}
                            onChangeActivity={onChangeActivity}
                        />
                    ))}
                </Grid>
                <Grid item ml={'auto'}>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default memo(ActivityForm);
