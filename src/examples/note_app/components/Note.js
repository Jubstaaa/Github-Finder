import React, { useContext } from "react";
import NotesContext from "../context/notes-context";

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);
  const removeNote = (title) => {
    dispatch({ type: "REMOVE_NOTE", title });
  };

  return (
    <tr>
      <td style={{ width: "40%" }}>{note.title}</td>
      <td>{note.body}</td>
      <td style={{ width: "3%" }}>
        <button
          onClick={() => removeNote(note.title)}
          className="btn btn-danger btn-sm"
        >
          <i className="fas fa-times"></i>
        </button>
      </td>
    </tr>
  );
};

export default Note;
