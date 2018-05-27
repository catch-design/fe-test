import React from 'react';
import './sharebar.scss';

const Sharebar = () => (
    <ul className="sharebar">
        <li><a className="sharebar__button sharebar__button--facebook" href="javascript:;">Facebook</a></li>
        <li><a className="sharebar__button sharebar__button--instagram" href="javascript:;">Instagram</a></li>
        <li><a className="sharebar__button sharebar__button--youtube" href="javascript:;">Youtube</a></li>
    </ul>
);

export default Sharebar;