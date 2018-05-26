import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = (props) => (
    <div className="button">{props.caption}</div>
);

Button.defaultProps = {
    caption: 'Button Text'
};

Button.propTypes = {
    caption: PropTypes.string
};

export default Button;
