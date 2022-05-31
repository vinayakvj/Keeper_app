import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function updateNote(event) {
    /* console.log(event.target.name); */

    const name = event.target.name;
    const value = event.target.value;

    if (name === "title") {
      setNote((prev) => {
        return {
          ...prev,
          title: value
        };
      });
    } else if (name === "content") {
      setNote((prev) => {
        return {
          ...prev,
          content: value
        };
      });
    }

    /* console.log(note); */
  }

  function AddNote(event) {
    event.preventDefault();
    props.onAdd(note);

    setNote({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          value={note.title}
          placeholder="Title"
          onChange={updateNote}
        />
        <textarea
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
          onChange={updateNote}
        />
        <button onClick={AddNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
