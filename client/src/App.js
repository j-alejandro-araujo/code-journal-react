import './App.css';
import './reset.css';
import './layout.css';
import './styles.css';
import DataModel from './DataModel';
import Entries from './Entries';

import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <DataModel />
      <Entries />
    </div>
  );
}

export default App;
