import React, {useCallback, useState} from 'react';
import {Container} from '@mui/material';
import ActivityForm from './components/ActivityForm/ActivityForm';
import ActivityFeed from './components/ActivityFeed/ActivityFeed';
import {Note} from './models/Note';
import {inicialNotes} from './constants';


const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>(inicialNotes);

  const addNote = useCallback((note: Note) => {
      setNotes(prevNotes => [note, ...prevNotes]);
  }, []);

  const deleteNote = useCallback((id: string) => {
      setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  }, []);

  return (
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
          <ActivityForm onAddNote={addNote} />
          <ActivityFeed notes={notes} onDeleteNote={deleteNote} />
      </Container>
  );
};

export default App;