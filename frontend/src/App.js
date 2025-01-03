import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Search from './components/Search';

function App() {
  const [word, setWord] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // to not reload on submit
    console.log(word);
  }
  
  return (
    <div className="App">
      <Header title="Images Galery"/>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
