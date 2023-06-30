import './App.css';
import './reset.css';
import './layout.css';
import './styles.css';
import EntryForm from './EntryForm';
import EntryList from './EntryList';

import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <EntryForm />
      <EntryList />
    </div>
  );
}

export default App;
