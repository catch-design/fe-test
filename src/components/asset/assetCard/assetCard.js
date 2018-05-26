import React from 'react';
import PropTypes from 'prop-types';
import './assetCard.scss';

const assetCard = (props) => (
    <div className="card card--adventure">
        <img className="card__image" src={props.adventure.imageUrl} alt="" />
        <h4 className="card__title">{props.adventure.title}</h4>
        <p className="card__description">{props.adventure.description}</p>
        <a className="card__more" href="javascript:;">Read more</a>
    </div>
);

assetCard.defaultProps = {
    adventure: {}
};

assetCard.propTypes = {
    adventure: PropTypes.object
};

export default assetCard;
