import Carousel from "../components/Carousel"

export const Jump = () => {
  return (
    <div>
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
    <div className="flex justify-center">
        <img src="/src/assets/marco-1.png" alt="Slide 3" />
    </div>
    </div>
  )
}
