import Carousel from "../components/Carousel"

export const Jump = () => {
  return (
    <div>
    <div className="text-center m-8">
      <h1 className="m-6" style={{fontFamily: 'PottaOne', fontSize: '30px', color:'#095183', fontWeight:"bold"}}>Jump</h1>
      <p style={{fontSize: '14px', color:'#095183', fontWeight:"bold"}}>¡Prepárate para elevar tu espíritu aventurero y tu bienestar físico a nuevas alturas! 🌟 Ven a descubrir el emocionante mundo del salto en trampolín, una actividad que no solo impulsa tu estado de ánimo sino que también mejora tu salud de manera divertida y dinámica.🤸‍♂️</p>
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
      <div className="flex justify-center">
        <img src="/src/assets/marco-1.png" alt="Slide 3" />
      </div>
    </Carousel>
    </div>
  )
}
