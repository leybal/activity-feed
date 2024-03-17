import React, {memo} from 'react';
import {IconButton} from '@mui/material';
import {NoteTypeIcons} from '../../constants';
import {NoteType} from '../../models/Note';

interface ActivityIconProps {
    noteType: NoteType;
    activeType: NoteType;
    onChangeActivity: (noteType: NoteType) => void;
}

const ActivityIcon: React.FC<ActivityIconProps> = ({noteType, activeType, onChangeActivity}) => {
    return (
        <IconButton
            color={activeType === noteType ? 'primary' : 'default'}
            onClick={() => onChangeActivity(noteType)}>
            {React.createElement(NoteTypeIcons[noteType])}
        </IconButton>
    )
}

export default memo(ActivityIcon);
