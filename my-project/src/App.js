import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className='App'>
      <Header className = 'sticky top-0 w-full'/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}
export default App;
