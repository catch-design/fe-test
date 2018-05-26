import React, { Component } from 'react';
import Header from '../header/header';
import Button from '../button/button';
import Adventures from '../adventure/adventures';
import './app.scss';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'A front-end test of sorts',
            caption: 'Submit'
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <div>
                    <Button caption={this.state.caption} />
                </div>
                <div className="mt-5">
                    <Adventures />
                </div>
            </div>
        );
    }
}
