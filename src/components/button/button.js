import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = (props) => (
    <button className="button button--submit">{props.caption}</button>
);

Button.defaultProps = {
    caption: 'Button Text'
};

Button.propTypes = {
    caption: PropTypes.string
};

export default Button;
