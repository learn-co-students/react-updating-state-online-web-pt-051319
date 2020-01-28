// Code ClickityClick Component Here
import React from 'react'

class ClickityClick extends React.Component {
    constructor() {
        super()
        this.setState(previousState => {
            return {
            toggled: !previousState.toggled,
            currentTheme: 'blue'
            }
        })
    }

    handleClick = () => {
        this.setState({
            hasBeenClicked: true
        }, () => console.log(this.state.hasBeenClicked))
    }

    render() {
        return (
            <div>
    {/* <p>I have {this.state.hasBeenClicked ? null : 'not' } been clicked!</p> */}
            <button onClick={this.handleClick}>{this.state.toggled ? 'on' : 'off'}</button>
            </div>
        )
    }
}

export default ClickityClick;

