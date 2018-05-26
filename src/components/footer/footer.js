import React, { Component } from 'react';
import Copyright from '../copyright/copyright';
import Sharebar from '../sharebar/sharebar';
import ContactInfo from '../contactInfo/contactInfo';

import './footer.scss';

export default class Footer extends Component {

    constructor() {
        super();

        this.state = {
            text: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
        };
    }

    render() {
        return (
            <div className="footer">
                <div className="footer__inner column">
                    <div className="row">
                        <div>
                            <Sharebar />
                            <Copyright text={this.state.text} />
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <ContactInfo />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
