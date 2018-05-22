import React from 'react';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import classes from './Header.scss';
import mainStyle from '../../main.scss';

const header = (props) => {
    return (
        <Wrapper>
            <div className={[classes.header__container, mainStyle['col-8-12']].join(' ')}>
                <h1>{props.title}</h1>
            </div>
        </Wrapper>
    )
};

export default header;