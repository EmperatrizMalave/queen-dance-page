import Home from './pages/Home';
//import Contact from '../pages/Contact';
//import Services from '../pages/Services';
import Nav from '../src/components/nav';
const App = () => {
  return (
    <div className='bg-white'>
        <Nav/>
        <Home />
    </div>
  )
}

export default App