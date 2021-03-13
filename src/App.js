import "./App.css";
import React from "react";
import Todo from "./Todo/Todo";
import Calendar from "./Calendar/Calendar";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [objects, setObjects] = useLocalStorage("objects", []);

  return (
    <div className="App">
      <h1>To-Do App</h1>
      {/* Calls object to generate calender */}
      <Calendar objects={objects} setObjects={setObjects} />
      {/* Calls object to generate todo list */}
      <Todo objects={objects} setObjects={setObjects} />

    </div>
  );
}

export default App;
