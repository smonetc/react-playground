import React from 'react';

export class HelloWorld extends React.Component{
    constructor(props){
        super(props)
        this.state = {who: "World"}
    }

    handleFriendClick = () =>{
        this.setState({who: 'friend'})
    }
    handleWorldClick = () =>{
        this.setState({who:'world'})
    }
    handleReactClick = () =>{
        this.setState({who:'React'})
    }
    render(){
        return (
            <div>
                <p>Hello {this.state.who} !</p>
                <button onClick={this.handleFriendClick}>Friend</button>
                <button onClick={this.handleWorldClick}>World</button>
                <button onClick={this.handleReactClick}>React</button>
            </div>
        )
    }
}