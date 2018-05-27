import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';

const Header = (props) => (
    <h1 className="header">{props.title}</h1>
);

Header.defaultProps = {
    title: 'Title'
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;
