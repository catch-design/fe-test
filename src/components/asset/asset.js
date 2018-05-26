import React, { Component } from 'react';
import AssetList from './assetList/assetList';
import AssetService from '../../services/assetService';

export default class Asset extends Component {

    constructor() {
        super();

        this.state = {
            adventures: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ adventures: AssetService.getAssets() }));
    }

    render() {
        return (
            <AssetList adventures={this.state.adventures} />
        );
    }
}
