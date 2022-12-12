import React from 'react';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// CSS global
import './App.css';
// Add components
import NavbarExpand from './components/Navbar';
import Footer from './components/Footer';
// Router
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// Add pages
import Home from './pages/home/Home';
import About from './pages/about/About';
import Works from './pages/works/Works';
import Contact from './pages/contact/Contact';

function App() {
    return (
        <Router>
            <NavbarExpand />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/works' element={<Works/>} />
                    <Route path='/contact' element={<Contact/>} />
                </Routes>
            <Footer />
        </Router>
    )
}

export default App