import React, { Component } from 'react';
import Button from '../button/button';
import './form.scss';
// import AssetService from '../../services/assetService';

export default class Form extends Component {

    constructor() {
        super();

        this.state = {
            formTitle: 'Form title',
            caption: 'Submit'
        };

        // this.state = {
        //     adventures: []
        // };
    }

    componentDidMount() {
        // this.setState(() => ({ adventures: AssetService.getAssets() }));
    }

    render() {
        return (
            <div className="form">
                <h4 className="form__title">{this.state.formTitle}</h4>
                <form>
                    <div className="form__container">
                        <input className="form__input" type="text" name="name" placeholder="First Name" />
                        <input className="form__input" type="text" name="surname" placeholder="Last Name" />
                        <input className="form__input" type="text" name="email" placeholder="Email adress" />
                        <input className="form__input" type="text" name="city" placeholder="City" />
                    </div>
                    <div className="form__button" >
                        <Button caption={this.state.caption} />
                    </div>
                </form>
            </div>
        );
    }
}

