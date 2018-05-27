import React, { Component, Fragment } from 'react';
import Header from '../header/header';
import Form from '../form/form';
import Separator from '../separator/separator';
import Asset from '../asset/asset';
import Gallery from '../gallery/gallery';
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
                        <div className="container__layout">
                            <Form />
                        </div>
                        <div className="container__layout">
                            <Separator />
                        </div>
                        <div className="container__layout container__layout--small">
                            <Asset />
                        </div>
                        <div className="container__layout container__layout--large">
                            <Gallery />
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
