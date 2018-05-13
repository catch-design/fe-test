import React from 'react';
import classes from './Card.scss';
import mainStyle from '../../../main.scss';

const card = (props) => {
    return(
        <div className={[classes.catalogue__card, mainStyle['col-4-8']].join(' ')}>
            <div className={classes.catalogue__cardcontentholder}>
                <div className={classes.catalogue__cardimageholder}>
                    <img className={classes.catalogue__cardimage} src={props.image.url} alt={props.image.alt}/>
                </div>
                <p className={classes.catalogue__cardtitle}>{props.title}</p>
                <p className={classes.catalogue__carddescription}>
                    {props.description}
                </p>
                <a className={classes.catalogue__cardlink} src={props.link.url}>{props.link.label}</a>
            </div>
        </div>
    )
};

export default card;