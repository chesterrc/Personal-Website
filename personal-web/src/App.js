import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import ShowProjects from './Pages/Project';

function App() {
  return (
    <div className="main">
      <Router>
        <div className='App-header'>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Projects" element={<ShowProjects/>}/>
            <Route path="/Contact" element={<ContactPage/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
