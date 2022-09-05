import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "../styles/main.scss";
const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem("notes"));
    if (notesData) {
      setNotes(notesData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (e) => {
    e.preventDefault();
    if (title) {
      setNotes([...notes, { title, body }]);
      setTitle("");
      setBody("");
    }
  };

  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title));
  };

  return (
    <div className="container p-5">
      <div className="card mb-3">
        <div className="card-header">Notes</div>
        {notes && (
          <table className="table table-sm table-str mb-0">
            <tbody>
              {notes.map((note, index) => {
                return (
                  <tr key={index}>
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
              })}
            </tbody>
          </table>
        )}
      </div>
      <div className="card mb-3">
        <div className="card-header">Add a New Note</div>
        <div className="card-body">
          <form onSubmit={addNote}>
            <div className="form-group">
              <input
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <textarea
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                }}
                className="form-control"
              />
            </div>
            <button className="btn btn-primary btn-block">Add Note</button>
          </form>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<NoteApp />, document.getElementById("root"));
