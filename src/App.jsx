import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Services from '../src/pages/Services'
import Contact from './pages/Contact';
import Footer from './components/Footer';


//import LoadingSpinner from './components/LoadingSpinner';

const App = () => {
  return (
    <div>
    <Nav />
    <div>
    </div>
    <Routes>
        <Route path="" element={ <Home /> }/>
        <Route path="/services" element={ <Services /> }/>
        <Route path="/contact" element={ <Contact /> }/>
    </Routes>
    <Footer />
  </div>
  )
}

export default App