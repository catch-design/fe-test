import React, { Component, Fragment } from 'react';
import Header from '../header/header';
import Separator from '../separator/separator';
import Asset from '../asset/asset';
import Footer from '../footer/footer';
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
            <Fragment>
                <div className="container">
                    <div className="container__inner">
                        <Header title={this.state.title} />
                        <Separator />
                        <div className="assets">
                            <Asset />
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
