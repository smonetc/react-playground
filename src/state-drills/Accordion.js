import React from "react";
import './Accordion.css';


 export class Accordion extends React.Component{
    static defaultProps = { 
        sections: [] 
    };
    state = {
        currentTabIndex: null
      };

      handleButtonClick(index) {
        this.setState({ currentTabIndex: index })
      }
    renderButtons(section, index, currentTabIndex) {
        return (
        <li className='Accordion__item' key={index}>
          <button type='button' onClick={() => this.handleButtonClick(index)}>
            {section.title}
          </button>
          {(currentTabIndex === index) && <p>{section.content}</p>}
        </li>
        )
      }

    render() {
        const {currentTabIndex} = this.state
        const { sections } = this.props
        return (
            <ul className='Accordion'>
                {sections.map((section, idx) =>
                this.renderButtons(section, idx, currentTabIndex)
            )}
          </ul>
        )
      }
}
