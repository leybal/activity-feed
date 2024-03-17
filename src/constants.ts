import {v4 as uuidv4} from "uuid";
import {Note, NoteType} from "./models/Note";
import {EventNote, LocalBar, LocalCafe, Message, Phone} from "@mui/icons-material";

export const inicialNotes: Note[] = [
    {
        id: uuidv4(),
        timestamp: new Date('14-Mar-2024'),
        user: 'You',
        partner: 'Milton Romaguera',
        type: NoteType.Massage,
        content: 'lorem ipsum dolor sit amet consectetur adipisicing elit',
    },
    {
        id: uuidv4(),
        timestamp: new Date('11-Mar-2024'),
        user: 'You',
        partner: 'Milton Romaguera',
        type: NoteType.Phone,
        content: 'Make a call.',
    },
    {
        id: uuidv4(),
        timestamp: new Date('10-Mar-2024'),
        user: 'You',
        partner: 'Milton Romaguera',
        type: NoteType.Beer,
        content: 'Grab a beer.',
    },
];

export const NoteTypeIcons = {
    [NoteType.Massage]: Message,
    [NoteType.Phone]: Phone,
    [NoteType.Coffee]: LocalCafe,
    [NoteType.Beer]: LocalBar,
    [NoteType.MeetingNote]: EventNote,
};
