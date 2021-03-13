import React, { useState } from "react";
import List from "./List";
import Input from "./Input";

export default function Todo(props) {
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  // whenever something new is added saves it todo list by copying data to new list and saving
  function add() {
    if (desc) {
      let newObjects = [...props.objects];
      newObjects.push({ description: desc, checked: false, date: date });
      props.setObjects(newObjects);
      setDesc("");
    }
  }
  // creates list and input objects
  return (
    <div className="Todo">
      <form onSubmit={add}>
        <h2>Add Items To List</h2>
        <p className="Instructions">Date is optional</p>
        <Input desc={desc} setDesc={setDesc} date={date} setDate={setDate} />
        <List objects={props.objects} setObjects={props.setObjects} />
      </form>
    </div>
  );
}
