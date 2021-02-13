import "./App.css";
import React from "react";
import Todo from "./Todo/Todo";
import Calendar from "./Calendar/Calendar";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [objects, setObjects] = useLocalStorage("objects", []);
  
  return (
    <div className="App">
      <h1>Hello World</h1>
      
    </div>
  );
}

export default App;
