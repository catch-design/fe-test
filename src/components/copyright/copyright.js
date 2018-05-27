import React from 'react';
import PropTypes from 'prop-types';
import './copyright.scss';

const Copyright = (props) => (
    <p className="copyright">{props.text}</p>
);

Copyright.defaultProps = {
    text: 'Copyright'
};

Copyright.propTypes = {
    text: PropTypes.string
};

export default Copyright;
