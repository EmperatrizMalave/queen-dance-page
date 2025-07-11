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
        <img src="https://imgur.com/MUi4VUi.png" alt="Slide 1" className="rounded-lg border border-gray-300 shadow-md"
/>
        <img src="https://imgur.com/OoLMhVq.png" alt="Slide 2" className="rounded-lg border border-gray-300 shadow-md"
/>
        <img src="https://imgur.com/01gd09S.png" alt="Slide 3" className="rounded-lg border border-gray-300 shadow-md"
/>

      </div>
      <div className="flex justify-center">
        <img src="https://imgur.com/WHoVXlF.png" alt="Slide 1" className="rounded-lg border border-gray-300 shadow-md"
 />
        <img src="https://imgur.com/sKO33g5.png" alt="Slide 2" className="rounded-lg border border-gray-300 shadow-md"
/>
        <img src="https://imgur.com/qTJSaDU.png" alt="Slide 3" className="rounded-lg border border-gray-300 shadow-md"
 />
      </div>
      <div className="flex justify-center">
        <img src="https://imgur.com/OoLMhVq.png" alt="Slide 1" className="rounded-lg border border-gray-300 shadow-md"
 />
        <img src="https://imgur.com/01gd09S.png" alt="Slide 2" className="rounded-lg border border-gray-300 shadow-md"
 />
        <img src="https://imgur.com/Oevap6w.png" alt="Slide 3" className="rounded-lg border border-gray-300 shadow-md"
/>
      </div>
    </Carousel>
    </div>
  )
}
