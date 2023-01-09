import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import NavbarExpand from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Works from './pages/works/Works';
import WorkDisplay from './pages/projects/WorkDisplay';
import Contact from './pages/contact/Contact';

function App() {
    return (
        <Router>
            <NavbarExpand />
                <Routes>
                    <Route exact path='/React-CV' element={<Home />} />
                    <Route path='/React-CV/about' element={<About/>} />
                    <Route path='/React-CV/works' element={<Works/>} />
                    <Route path='/React-CV/work/:id' element={<WorkDisplay/>} />
                    <Route path='/React-CV/contact' element={<Contact/>} />
                </Routes>
            <Footer />
        </Router>
    )
}

export default App