import React from 'react'; 
import Enzyme from 'enzyme';
import { shallow } from 'enzyme'; 
import App from '../components/App';  

describe('App', () => {
    it('renders without crashing', () => {
        shallow(<App />); 
    }); 
    it('contains h1', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<h1>Welcome</h1>)).toEqual(true)
    })
}); 