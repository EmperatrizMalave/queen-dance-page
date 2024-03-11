import { Link } from 'react-router-dom';
import "./styleservices.css"

const Services = () => {
  return (
  <div className="main-service-container">
    <div className='title-container'>
      <h1 className='service-title'>Nuestros servicios </h1>
      <p className='service-paragraph-one'>Consulta nuestros servicios en los iconos</p>
    </div>
    {/**card-1*/}
    <div className="main-card-container flex flex-col lg:flex-row">
    <div className='card-one mb-4 lg:mb-0 lg:mr-4 sm-w-10'>
      <div className="boxdetails-one">
        <p className='service-paragraph-two first:text-md '>Jump</p>
          <Link to="/services/jump">
          <img src="https://i.imgur.com/z8rdtqf.png" className="icon-jump w-full"/>
          </Link>
      </div>
      </div>
    {/**card-2*/}
      <div className="card-two">
      <div className="boxdetails-two">
          <p className='service-paragraph-two'>Zumba funcional</p>
          <Link to ="/services/functional">
            <img className="icon-functional w-full" src="https://i.imgur.com/7dR1PwQ.png"  />
          </Link>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Services