import React, {Component} from 'react';
import { cities } from '../../models/cities';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import classes from './SignUp.scss';
import mainStyle from '../../main.scss';

class SignUp extends Component {

    state = {
        signupForm: {
            firstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'First name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            lastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Last name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email address',
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            city: {
                elementType: 'select',
                elementConfig: {
                    type: 'select',
                    options: cities,
                    placeholder: 'City'
                },
                validation: {
                    required: true
                },
                valid: true,
                value: cities[0].name
            }
        },
        formIsValid: false
    };

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {

        const updatedSignupForm = {
            ...this.state.signupForm
        };
        const updatedFormElement = {
            ...updatedSignupForm[inputIdentifier]
        };

        updatedFormElement.value = event.target.value;


        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedSignupForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedSignupForm) {
            formIsValid = updatedSignupForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({signupForm: updatedSignupForm, formIsValid: formIsValid});
    };


    submitHandler = ( event ) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.signupForm) {
            formData[formElementIdentifier] = this.state.signupForm[formElementIdentifier].value;
        }
        const submitObject = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            email: this.props.email,
            city: this.props.city
        }
    };

    render () {
        const formElementsArray = [];

        for (let key in this.state.signupForm) {
            formElementsArray.push({
                id: key,
                config: this.state.signupForm[key]
            });
        }

        let form = [
            <form key="form" className={classes.signup__form} onSubmit={this.submitHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
            </form>,
            <Button key="submitButton" disabled={!this.state.formIsValid}>Submit</Button>
        ];
        if ( this.props.loading ) {
            form = <Spinner />;
        }
        return (
            <Wrapper>
                <div className={[classes.signup__container, mainStyle['col-8-12']].join(' ')}>
                {form}
                </div>
            </Wrapper>
        );
    }
};

export default SignUp;
