import React, { Component } from 'react';
import Separator from '../separator/separator';

import './footer.scss';

export default class Footer extends Component {

    constructor() {
        super();

        // this.state = {
        //     title: 'A front-end test of sorts'
        // };
    }

    render() {
        return (
            <div className="footer">
                <Separator />
            </div>
        );
    }
}
