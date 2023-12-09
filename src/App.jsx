import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Services from '../src/pages/Services'
import Contact from './pages/Contact';
const App = () => {
  return (
    <div>
      <Nav />
    <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/home" element={ <Home /> }/>
        <Route path="/services" element={ <Services /> }/>
        <Route path="/contact" element={ <Contact /> }/>
    </Routes>
  </div>
  )
}

export default App