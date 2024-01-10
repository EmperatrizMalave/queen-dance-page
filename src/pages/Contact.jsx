import ReactPlayer from "react-player"
import video from "../assets/contact.mp4"
import marcoContact from "../assets/marco-2.png"
const Contact = () => {
  return (
    <>
      <p className="text-center pt-5" style={{ fontFamily:'PottaOne', fontSize:'32px', color:'#095183', fontWeight: 'bold'}}>Contact</p>
      <div className="flex">
        <div className="flex items-center w-5/10">
          <img src={marcoContact} id='img' height={"100%"}/>
        </div>
        <div className="flex items-center justify-center w-5/10">
          <ReactPlayer url = {video}
              controls
              loop
              playing
              width='60%'
              height='90%'
              />
        </div>
      </div>
    </>
  )
}

export default Contact