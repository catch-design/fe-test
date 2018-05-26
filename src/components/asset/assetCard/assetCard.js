import React from 'react';
import PropTypes from 'prop-types';
import './assetCard.scss';

const assetCard = (props) => (
    <div className="card card--adventure row">
        <div className="card__layout">
            <img className="card__image" src={props.adventure.imageUrl} alt="" />
            <div className="card__detail">
                <h4 className="card__title">{props.adventure.title}</h4>
                <p className="card__description">{props.adventure.description}</p>
                <a className="card__more" href="javascript:;">Read more</a>
            </div>
        </div>
    </div>
);

assetCard.defaultProps = {
    adventure: {}
};

assetCard.propTypes = {
    adventure: PropTypes.object
};

export default assetCard;
