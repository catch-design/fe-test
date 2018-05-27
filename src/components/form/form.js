import React, { Component } from 'react';
import Button from '../button/button';
import './form.scss';
import CityService from '../../services/cityService';

export default class Form extends Component {

    constructor() {
        super();

        this.state = {
            formTitle: 'Form title',
            caption: 'Submit'
        };

        this.state = {
            cities: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ cities: CityService.getCities() }));
    }
    // TODO: can be made with template to avoid repetition
    render() {
        return (
            <div className="form">
                <h4 className="form__title">{this.state.formTitle}</h4>
                <form>
                    <div className="form__container">
                        <div className="form__inner column">
                            <div className="row">
                                <input className="form__field" type="text" name="name" placeholder="First Name" />
                            </div>
                            <div className="row">
                                <input className="form__field" type="text" name="surname" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="form__inner column">
                            <div className="row">
                                <input className="form__field" type="text" name="email" placeholder="Email adress" />
                            </div>
                            <div className="row">
                                <select className="form__field form__field--select" name="city">
                                    <option className="form__select-option" value=""disabled selected>City</option>
                                    {
                                        this.state.cities.map(city=>
                                            <option key={city.id} value={city.title}>{city.title}</option>                                       
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form__button" >
                        <Button caption={this.state.caption} />
                    </div>
                </form>
            </div>
        );
    }
}

