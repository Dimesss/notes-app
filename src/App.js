import "./App.css";
import React, { useEffect, useMemo } from "react";
import NoteCard from "./components/NoteCard";
import NoteForm from "./components/NoteForm";


function App() {
  
  const notes= useMemo (() => {
    const result = localStorage.getItem ('notes');
    
    if (!!result){
      return JSON.parse(result);  
    }
    return [];
  }, []);

  return (
    <div className="App">
      <NoteForm />
      <NoteCard title="example" body="ini body" color="gray" />
    </div>
  );
}

export default App;
