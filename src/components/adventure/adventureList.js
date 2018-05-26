import React from 'react';
import PropTypes from 'prop-types';
import AdventureCard from './adventureCard';

const getAdventures = (adventures) => {
    return (
        <div className="card-deck">
            {
                adventures.map(adventure => 
                    <AdventureCard key={adventure.id} adventure={adventure} />
                )
            }
        </div>
    );
};

const AdventureList = (props) => (
    <div>
        {getAdventures(props.adventures)}
    </div>
);

AdventureList.defaultProps = {
    adventures: []
};

AdventureList.propTypes = {
    adventures: PropTypes.array
};

export default AdventureList;
