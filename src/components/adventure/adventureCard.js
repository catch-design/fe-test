import React from 'react';
import PropTypes from 'prop-types';

const AdventureCard = (props) => (
    <div className="adventure-card">
        <div className="adventure-card card">
            <img className="card-img-top" src={props.adventure.imageUrl} alt="" />
            <div className="card-body">
                <h4 className="card-title">{props.adventure.title}</h4>
                <p className="text-justify" style={{fontSize: '14px'}}>{props.adventure.description}</p>
            </div>
        </div>
    </div>
);

AdventureCard.defaultProps = {
    adventure: {}
};

AdventureCard.propTypes = {
    adventure: PropTypes.object
};

export default AdventureCard;
