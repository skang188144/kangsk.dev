import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Terminal from './components/Terminal';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact/>
        </Routes>
      </Router>

      <Terminal/>
    </div>
  );
}

export default App;
