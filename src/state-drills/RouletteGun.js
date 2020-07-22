import React from 'react';

export class RouletteGun extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }

    static defaultProps = {
        bulletInChamber: 8,
      };

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    handleGunClick = () => {
        this.setState({
          spinningTheChamber: true,
        })
        this.timeout = setTimeout(() => {
          const randomChamber = Math.ceil(Math.random() * 8)
    
          this.setState({
            chamber: randomChamber,
            spinningTheChamber: false,
          })
        }, 2000)
      }

    showContent(){
        const {chamber, spinningTheChamber }= this.state;
        const {bulletInChamber} = this.props;
        if (spinningTheChamber){
            return 'the chamber and pulling the trigger!...'
        } else if(chamber === bulletInChamber){
            return 'Bang!!!!!'
        }else{
            return "you're safe!"
        }
    }
    
    render(){
        return(
            <div>
                <p>{this.showContent()}</p>
                <button onClick={this.handleGunClick}>
                Pull the trigger!
                </button>
            </div>
        )
    }
}