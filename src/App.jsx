import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" />
      </Routes>
    </Router>
  );
}

export default App;
