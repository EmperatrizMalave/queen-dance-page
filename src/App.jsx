import { Routes, Route } from 'react-router-dom';
//import { useTransition, Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Services from '../src/pages/Services'
import Contact from './pages/Contact';
import Footer from './components/Footer';


//import LoadingSpinner from './components/LoadingSpinner';
//import HoverCardDemo from './components/HoverCardDemo';

const App = () => {
  //let { isPending } = useTransition();
  return (
    <div>
    <Nav />
    <div>
      {/*isPending ? <LoadingSpinner /> : <Outlet />*/}
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