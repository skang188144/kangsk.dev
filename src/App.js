import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Pokemon_AI from './components/pages/Pokemon_AI';
import Terminal from './components/pages/Terminal';

function App() {

  return (
    <div className='App'>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/pokemon-ai' element={<Pokemon_AI/>}/>
        <Route path='/terminal' element={<Terminal/>}/>
      </Routes>

    </div>
  );
}

export default App;
