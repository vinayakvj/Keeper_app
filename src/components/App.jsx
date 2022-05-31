import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function AddNote(notee) {
    console.log(notes);
    setNotes((prev) => {
      return [...prev, notee];
    });
  }

  function deleteItem(id) {
    setNotes((prev) => {
      return prev.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={AddNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            del={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
