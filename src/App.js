import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DateNightOptionsList from "./components/DateNightOptionsList";
import SingleEventPage from "./components/SingleEventPage";
import FilteredOptions from "./components/FilteredOptions";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-dates" element={<DateNightOptionsList />} />
        <Route path="/options/:name" component={SingleEventPage} />
        <Route path="/filtered-options" component={FilteredOptions} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
