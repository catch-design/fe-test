import React from 'react';
import classes from './Input.scss';

const input = ( props ) => {
    let inputElement = null;
    const inputClasses = [classes.signupform__inputelement];

    if(props.elementType === 'select'){
        inputClasses.push(classes.signup__select);
    }else{
        inputClasses.push(classes.signup__inputtext);
    }

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.invalid);
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.name}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className={classes.signupform__inputholder}>
            {inputElement}
        </div>
    );

};

export default input;