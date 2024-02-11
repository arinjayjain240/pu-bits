import  { Component} from 'react'
import { Link } from 'react-router-dom'
import './Static/Navbar.css'

export class Navbar extends Component {

  render() {
    return (
      <>
        <div className="navbar navbar-floating">
          <div className="navbar-start">
            <Link to="/"className="navbar-item">ACM</Link>
          </div>
          <div className="navbar-end">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/about" className="navbar-item">About</Link>
            <Link to="/contact" className="navbar-item">Contact</Link>
          </div>
        </div>
      </>
    )
  }
}

export default Navbar