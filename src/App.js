import './index.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DateNightOptionsList from "./components/DateNightOptionsList";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/all-dates' element={<DateNightOptionsList />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;