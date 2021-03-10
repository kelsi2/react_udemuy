import React, { useContext, useState } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const AddNoteForm = () => {
  const { notesDispatch } = useContext(NotesContext);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const position = useMousePosition();

  const addNote = (e) => {
    e.preventDefault();
    notesDispatch({ type: 'ADD_NOTE', title, body });
    setTitle('');
    setBody('');
  };

  return (
    <>
      <p>Add note {position.x} - {position.y}</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <button>Add note</button>
      </form>
    </>
  );
};

export default AddNoteForm;