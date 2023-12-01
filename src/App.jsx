import Home from './pages/Home';
//import Contact from '../pages/Contact';
//import Services from '../pages/Services';
import Nav from '../src/components/nav';
import Services from '../src/pages/Services'
const App = () => {
  return (
    <div className='bg-white'>
        <Nav/>
        <Home />
        <Services />
    </div>
  )
}

export default App