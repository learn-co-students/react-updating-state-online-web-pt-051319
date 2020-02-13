// Code ClickityClick Component Here
import React from 'react';
class ClickityClick extends React.Component {
    constructor() {
        super();
        this.state = {
            hasBeenClicked: false
        };
    }

    handleClick = () => {
        this.setState({
            hasBeenClicked: true
        }, () => console.log(this.state.hasBeenClicked));

    };

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    }
}

export default ClickityClick;

//changes in state and/or props will both triggr a re-render of our React component. Changes in state can only happen internally due to components changing their own state