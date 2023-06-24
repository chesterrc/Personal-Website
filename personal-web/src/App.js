import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import ShowProjects from './Pages/Projects';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="main">
      <Router>
        <Navbar />
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
