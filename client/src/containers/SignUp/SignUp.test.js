import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './SignUp';
import Input from '../../components/UI/Input/Input';
import {configure, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter()});

const updateInput = (wrapper, instance, newValue) => {
    const input = wrapper.find(instance);
    input.simulate('change', {
        target: {value: newValue}
    });
    return wrapper.find(instance);
};

describe('<Form />', () => {
    test('allows user to fill out form', () => {
        const wrapper = mount(<SignUp/>);
        const firstNameInput = updateInput(wrapper, '[data-testid="firstName"]', 'User');
        const lastNameInput = updateInput(wrapper, '[data-testid="lastName"]', 'van User');
        const emaiIInput = updateInput(wrapper, '[data-testid="email"]', 'test@gmail.com');
        const cityInput = updateInput(wrapper, '[data-testid="email"]', 'Auckland');
        expect(firstNameInput.props().value).toBe('User');
        expect(lastNameInput.props().value).toBe('van User');
        expect(emaiIInput.props().value).toBe('test@gmail.com');
        expect(cityInput.props().value).toBe('Auckland');
        wrapper.unmount();
    });

    test('email validation', () => {
        const wrapper = mount(<SignUp/>);
        updateInput(wrapper, '[data-testid="email"]', 'test');
        expect(wrapper.state().signupForm.email.valid).toBe(false);
        updateInput(wrapper, '[data-testid="email"]', 'test@test.com');
        expect(wrapper.state().signupForm.email.valid).toBe(true);
        wrapper.unmount();
    });

    test('user submits the form', () => {
        const wrapper = mount(<SignUp/>);
        wrapper.instance().callApi = jest.fn();
        updateInput(wrapper, '[data-testid="firstName"]', 'User');
        updateInput(wrapper, '[data-testid="lastName"]', 'van User');
        updateInput(wrapper, '[data-testid="email"]', 'test@gmail.com');
        updateInput(wrapper, '[data-testid="city"]', 'Auckland');
        wrapper.find('[data-testid="signupFormSubmitButton"]').simulate('click', {
            preventDefault: () => {
            }
        });
        expect(wrapper.instance().callApi).toBeCalledWith({
            firstName: 'User',
            lastName: 'van User',
            email: 'test@gmail.com',
            city: 'Auckland'
        });
        wrapper.unmount();
    });
    // layout test
    test('matches saved snapshot', () => {
        const wrapper = shallow(<SignUp />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});