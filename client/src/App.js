// Unfinished

import './App.css';
import './reset.css';
import './layout.css';
import './styles.css';
import EntryForm from './EntryForm';
import EntryList from './EntryList';
import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';

function App() {
  // const [view, setView] = useState('entries');
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const storedEntries = localStorage.getItem('entries');
    if (setEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);

  const handleSaveEntry = (formValues) => {
    const newEntry = { ...formValues, entryID: entries.length.length + 1 };
    setEntries([newEntry, ...entries]);
    // const updatedEntries = entries.map((entry) => {...formValues, entryID: entry.entryID} : entry)
    // setEntries(updateEntries);
  };

  return (
    <div className="App">
      <Navbar />
      <EntryForm onSave={handleSaveEntry} />
      <EntryList />
    </div>
  );
}

export default App;
