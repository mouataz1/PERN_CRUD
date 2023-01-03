import React, {Fragment} from 'react';

import './App.css';
import Create from './components/items/Create';
import List from './components/items/List';
import Navbar from './components/Navbar';

function App() {
  return (
      <div className="container">
        <List/>
      </div>
  );
}

export default App;
