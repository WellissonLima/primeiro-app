import React, {Component} from 'react'
import './button.css'

// const Button = (props) => {
//     return <button className='btn'>{props.lable}</button>
// }

class Button extends Component {
    render () {
        return <button className='btn'>{this.props.lable}</button>
    }
}

Button.defaultProps = {
    lable: 'Clique aqui com classe'
}

export default Button