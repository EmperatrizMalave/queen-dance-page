import ReactPlayer from "react-player"
import video from "../assets/contact.mp4"
const Contact = () => {
  return (
    <>
      <p className="text-center pt-5" style={{ fontFamily:'PottaOne', fontSize:'32px', color:'#095183', fontWeight: 'bold'}}>Contact</p>
      <div className= "flex justify-center items-center h-screen">
        <ReactPlayer url = {video}
            controls
            loop
            width='90%'
            height='80%'
            />
      </div>
    </>
  )
}

export default Contact