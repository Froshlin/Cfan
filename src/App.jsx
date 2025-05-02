import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
// import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Error from './pages/404';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/Home';
import Crusades from './pages/crusades/Crusades';
import Donations from './pages/donations/Donations';

function App() {
  return (
    <BrowserRouter>
      <div className=''>
        {/* <Nav /> */}
        {/* <Navbar /> */}
        <main className=''>
          <Routes>
            <Route path='*' element={<Error />} />
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/donations' element={<Donations />} />
            <Route path='/crusades' element={<Crusades />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
