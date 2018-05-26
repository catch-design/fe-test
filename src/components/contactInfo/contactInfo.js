import React from 'react';
import './contactInfo.scss';

const ContactInfo = () => (
    <div className="contact">
        <div className="contact__item">
            <h5 className="contact__title">Main Office</h5>
            <div className="contact__address">
                <p>6235 Thalia Terrace Apt. 695</p>
                <p>Frederikfurt</p>
                <p>Jamaica</p>
            </div>
        </div>
        <div className="contact__item">
            <h5 className="contact__title">Contact</h5>
            <p className="contact__phone">735-421-6378</p>
            <a className="contact__email" href="mailto:nz.volcano@gmail.com">nz.volcano@gmail.com</a>
        </div>
    </div>
);

export default ContactInfo;
