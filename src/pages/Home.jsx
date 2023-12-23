//import silhouette from '/src/assets/silueta-queen-dance.png'
import backgroundImage from '/src/assets/queen-dance-2.jpg'
import "./stylesHome.css"
//import LoadingSpinner from '../components/LoadingSpinner.jsx'

const Home = () => {
  return (
    <div className='bg-[#F2F0E1] flex justify-center'>
        <div>
        {/*<LoadingSpinner/>*/}
        <img src={backgroundImage} className='inset-0 z-0 w-auto img-home'/>
      </div>
    </div>
  )
}

export default Home;