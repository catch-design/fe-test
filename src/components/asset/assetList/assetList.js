import React from 'react';
import PropTypes from 'prop-types';
import AssetCard from '../assetCard/assetCard';
import './assetList.scss';

const getAssets = (adventures) => {
    return (
        <div className="list">
            {
                adventures.map(adventure => 
                    <AssetCard key={adventure.id} adventure={adventure} />
                )
            }
        </div>
    );
};

const AssetList = (props) => (
    <div>
        {getAssets(props.adventures)}
    </div>
);

AssetList.defaultProps = {
    adventures: []
};

AssetList.propTypes = {
    adventures: PropTypes.array
};

export default AssetList;
