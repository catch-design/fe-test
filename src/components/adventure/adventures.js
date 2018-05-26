import React, { Component } from 'react';
import AdventureList from './adventureList';
import AdventureService from '../../services/adventureService';

export default class Adventures extends Component {

    constructor() {
        super();

        this.state = {
            adventures: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ adventures: AdventureService.getAdventures() }));
    }

    render() {
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">
                    <div className="col-sm-12">
                        <AdventureList adventures={this.state.adventures} />
                    </div>
                </div>
            </div>
        );
    }
}
