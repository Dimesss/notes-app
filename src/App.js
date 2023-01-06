import './App.css';
import NoteCard from './components/NoteCard';
import NoteForm from './components/NoteForm';

function App() {
  return (
    <div className="App">
      
      <NoteForm />
      <NoteCard title='example' body='ini body' color='gray'/>
    
    </div>
  );
}

export default App;
