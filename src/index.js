import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'


class Hello extends React.Component {
    constructor(props){
        super(props);
        this.state = {color : 'FFFFFF'};
        this.randomCol = this.randomCol.bind(this);
    }
    randomCol() {
        const newColor = Math.floor(Math.random()*16777215).toString(16).toUpperCase();
        this.setState({color: newColor})
        document.body.style.backgroundColor = `#${newColor}`;
    }
    render() {
        return (
            <div className='block'>
                <h2>Color hex: #{this.state.color}</h2>
                <button onClick={this.randomCol}>Change color </button>
            </div>
        )
    }
}

ReactDOM.render(<Hello />, document.body)