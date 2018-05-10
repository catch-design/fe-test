import React from 'react';
import classes from './Button.scss';

const button = (props) => (
    <button
        disabled={props.disabled}
        type={props.originalType || 'submit'}
        className={[classes.signup__button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default button;