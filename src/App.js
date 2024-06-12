import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';

function App() {

  /* <Route path='/pokemon-ai' element={<Pokemon_AI/>}/>
     <Route path='/terminal' element={<Terminal/>}/> */

  return (
    <div className='App'>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>

    </div>
  );
}

export default App;
