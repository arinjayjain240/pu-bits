import { Component } from 'react'
import './Static/Cards.css'
import sitting from '../assets/sitting.png'

export class Cards extends Component {
    static propTypes = {}

    render() {
        return (
            <>
                <div className="card card-image-cover">
                    <div className="card-body">
                    <img src={sitting} alt="" />
                        <a href={this.props.link} className="btn btn-primary">{this.props.text}</a>
                    </div>
                </div>
            </>
        )
    }
}

export default Cards