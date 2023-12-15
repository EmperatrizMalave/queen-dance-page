//import silhouette from '/src/assets/silueta-queen-dance.png'
import backgroundImage from '/src/assets/queen-dance-2.jpg'
//import LoadingSpinner from '../components/LoadingSpinner.jsx'

const Home = () => {
  return (
    
    <div className='bg-[#F2F0E1] flex justify-center'>
        <div>
        {/*<LoadingSpinner/>*/}
        <img id="img" src={backgroundImage} className='inset-0 z-0 w-auto '/>
      </div>
    </div>
  )
}

export default Home;