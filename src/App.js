import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Projects';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
