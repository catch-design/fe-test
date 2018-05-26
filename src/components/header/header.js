import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
    <div className="header" href="/">{props.title}</div>
);

Header.defaultProps = {
    title: 'Title'
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;
