import react from "react"
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <h2>Michel Kruger</h2>
        <div className="navbar">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PROJECTS</li>
            <li>CONTACTS</li>
          </ul>
          <button>Curriculo</button>
        </div>
      </div>
    </div>
  )
}

export default Header