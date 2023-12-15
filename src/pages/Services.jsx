import "./styleservices.css"
import icon from "../assets/bailarin.png"
import iconone from "../assets/saltar.png"



const Services = () => {
  return (
  <div className="main-service-container">
    <div className='title-container'>
      <h1  className='service-title'>Nuestros servicios </h1>
      <p className='service-paragraph-one'>Consulta nuestros servicios en en los iconos</p>
    </div>
    {/**card-1*/}
    <div className="main-card-container">
    <div className='card-one'>
      <div className="boxdetails-one">
        <p className='service-paragraph-two'>Jump</p>
          <button>
          <img id="img" src={iconone}/>
          </button> 
      </div>
      </div>
    {/**card-2*/}
      <div className="card-two">
      <div className="boxdetails-two">
          <p className='service-paragraph-two'>Zumba funcional</p>
          <button>
            <img id="img" src={icon}/>
          </button>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Services