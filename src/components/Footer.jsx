import "./footerstyle.css"
const Footer = () => {
  return (
    <div className="container">
    <h3 className="bold">Redes sociales</h3>
      <a className="icon flex items-center justify-center" href="#">
        <img width="32" height="32" src="https://img.icons8.com/windows/32/whatsapp--v1.png" alt="whatsapp--v1"/>
      </a>
      <a className="icon flex items-center justify-center" href="https://www.facebook.com/ZumbaQueenDance">
        <img width="32" height="32" src="https://img.icons8.com/windows/32/facebook.png" alt="facebook"/>
      </a>
  </div>
  )
}

export default Footer