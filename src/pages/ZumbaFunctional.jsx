import Carousel from "../components/Carousel"
export const ZumbaFunctional = () => {
  return (
    <div>
    <div className="text-center m-8">
      <h1 className="m-6" style={{fontFamily: 'PottaOne', fontSize: '30px', color:'#095183', fontWeight:"bold"}}>Zumba funcional</h1>
      <p style={{fontSize: '14px', color:'#095183', fontWeight:"bold"}}>¡Prepárate para elevar tu espíritu aventurero y tu bienestar físico! 🌟🎶💃 Ven y unete para una experiencia energizante con Zumba Funcional, una fusión perfecta de ritmo y fitness que promete no solo elevar vuestro ánimo sino también fortalecer vuestro cuerpo. 🕺💪</p>
    </div>
    <Carousel className="flex items-center " >
    <div className="flex justify-center">
      <img src="/src/assets/jump1.png" alt="Slide 1" />
      <img src="/src/assets/jump1.png" alt="Slide 2" />
      <img src="/src/assets/jump1.png" alt="Slide 3" />
    </div>
    <div className="flex justify-center">
      <img src="/src/assets/jump1.png" alt="Slide 1" />
      <img src="/src/assets/jump1.png" alt="Slide 2" />
      <img src="/src/assets/jump1.png" alt="Slide 3" />
    </div>
    <div className="flex justify-center">
      <img src="/src/assets/jump1.png" alt="Slide 1" />
      <img src="/src/assets/jump1.png" alt="Slide 2" />
      <img src="/src/assets/jump1.png" alt="Slide 3" />
    </div>
  </Carousel>
  </div>
  )
}
