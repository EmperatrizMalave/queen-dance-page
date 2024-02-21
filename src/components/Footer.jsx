import "./footerstyle.css"
const Footer = () => {
  return (
    <div className="m-8 flex items-center justify-center">
    <h3 style={{fontFamily: 'Agbalumo', fontSize: '18px'}}>Redes sociales</h3>
      <a className="icon flex items-center justify-center" href="https://wa.me/3318939266" target="_blank" rel="noopener noreferrer">
        <img width="32" height="32" src="https://img.icons8.com/windows/32/whatsapp--v1.png" alt="whatsapp--v1"/>
      </a>
      <a className="icon flex items-center justify-center" href="https://www.facebook.com/ZumbaQueenDance">
        <img width="32" height="32" src="https://img.icons8.com/windows/32/facebook.png" alt="facebook"/>
      </a>
  </div>
  )
}

export default Footer