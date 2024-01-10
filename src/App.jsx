import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Services from '../src/pages/Services'
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { ZumbaFunctional } from './pages/ZumbaFunctional';
import { Jump } from './pages/Jump';
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
          <Route path="services/functional" element={ <ZumbaFunctional/> }/>
          <Route path="/services/jump" element={ <Jump/> }/>

      </Routes>
    <Footer />
  </div>
  )
}

export default App