import React from 'react';
import './Button.css';

class Button extends React.Component {
    render() {
        let classes = ['btn',this.props.kind ].join(' ')
        console.log(classes)
        return <button className={classes} 
        onClick={this.props.clickhandler}>
            {this.props.children}
        </button>
         
    }
}
export default Button;