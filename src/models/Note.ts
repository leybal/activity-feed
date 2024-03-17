export enum NoteType {
    Massage = 'Message',
    Phone = 'Phone',
    Coffee = 'Coffee',
    Beer = 'Beer',
    MeetingNote = 'Meeting Note'
}

export interface Note {
    id: string;
    timestamp: Date;
    user: string;
    partner: string;
    type: NoteType;
    content: string;
}
