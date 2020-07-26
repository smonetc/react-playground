import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter()});


describe(`Tabs Component`, () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})

describe(`Tabs Component`, () => {
    // array of objects, each with a name and content
    const tabsProp = [/* ... */];
  
    /* smoke test not shown */
    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Tabs />, div);
        ReactDOM.unmountComponentAtNode(div);
      })
    
      it('renders empty given no tabs', () => {
        const wrapper = shallow(<Tabs />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
    
      it('renders the first tab by default', () => {
        const wrapper = shallow(<Tabs tabs={tabsProp} />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
  })

  it('closes the first tab and opens any clicked tab', () => {
    const wrapper = shallow(<Tabs tabs={tabsProp} />)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })

