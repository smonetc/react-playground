import React from 'react';

export class Counter extends React.Component {
    constructor(props) {
        console.log('props in constructor', props)
        super(props)
        this.state = { count: 0 }
      }
   
    // handleButtonClick = () => {
    //     const newCount = this.state.count + 1
    //     this.setState({
    //         count: newCount
    //       })
    // }

    handleButtonClick = () => {
        console.log('props in handleButtonClick', this.props)
        console.log('state in handleButtonClick', this.state)
        this.setState({ count: this.state.count + 1 })
    }

    static defaultProps = {
        step: 1,
      };

    render() {
      return (
        <div>
          <p>The current count: {this.state.count}</p>
          <button onClick={this.handleButtonClick}>
           Add {this.step}
          </button>
        </div>
      )
    }
  }