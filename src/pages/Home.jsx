//import silhouette from '/src/assets/silueta-queen-dance.png'
import backgroundImage from '/src/assets/background12-1.png'

const Home = () => {
  return (
    
    <div>
        <div className='relative'>
          {/*<img id="img" src={silhouette}  className='absolute inset-0 z-10 filter: saturate(0) w-90' />*/}
          <img id="img" src={backgroundImage} className='absolute inset-0 z-0 w-auto'/>
      </div>
    </div>

    
    
  )
}

export default Home;