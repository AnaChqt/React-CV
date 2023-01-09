import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import NavbarExpand from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/home/Home.js';
import About from './pages/about/About';
import Works from './pages/works/Works';
import WorkDisplay from './pages/projects/WorkDisplay';
import Contact from './pages/contact/Contact';

function App() {
    return (
        <Router>
            <NavbarExpand />
                <Switch>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/works' element={<Works/>} />
                    <Route path='/work/:id' element={<WorkDisplay/>} />
                    <Route path='/contact' element={<Contact/>} />
                </Switch>
            <Footer />
        </Router>
    )
}

export default App