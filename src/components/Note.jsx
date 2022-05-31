import React from "react";

function Note(props) {
  console.log(props.note);

  function delItem() {
    props.del(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={delItem}>DELETE</button>
    </div>
  );
}

export default Note;
