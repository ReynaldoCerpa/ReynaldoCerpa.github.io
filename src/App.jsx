import Landing from './pages/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/skills" element={<Skills/>}/>
        <Route exact path="/projects" element={<Projects/>}/>
        <Route exact path="/contact" element={<Landing/>}/>
      </Routes>
    </Router>
  );
}

export default App;
