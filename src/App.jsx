import './App.css';
import Landing from './pages/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
      </Routes>
    </Router>
  );
}

export default App;