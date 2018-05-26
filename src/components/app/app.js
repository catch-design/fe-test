import React, { Component } from 'react';
import Header from '../header/header';
import Separator from '../separator/separator';
import Adventures from '../adventures/adventures';
import './app.scss';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'A front-end test of sorts'
        };
    }

    render() {
        return (
            <div className="container">
                <Header title={this.state.title} />
                <Separator />
                <div className="test">
                    <Adventures />
                </div>
            </div>
        );
    }
}
