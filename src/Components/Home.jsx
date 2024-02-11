import  { Component } from 'react'
import './Static/Home.css'
import sitting from '../assets/sitting.png'
import Cards from './Cards'
export class Home extends Component {
  static propTypes = {}

  render() {
    return (
      <>
        <div className='top'>
          <div className="container">
            <div className="item text">
              <p className='heading'>
              Welcome<br/>
              </p>
              <p className='tagline'>PS2/PS1/SI/PLACEMENTS</p>
            </div>
            <div className="item">
            <img className='home-image' src={sitting}/>
            </div>
          </div>
        </div>
        <div className='bottom'>
          <div className="container below">
            <div className="item">
              <Cards link='/ps1' text="PS2" />
            </div>
            <div className="item">
              <Cards  link='/ps1' text="PS1" />
            </div>
            <div className="item">
              <Cards  link='https://google.com' text="SI" />
            </div>
            <div className="item">
              <Cards  link='https://google.com' text="PLACEMENTS" />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home