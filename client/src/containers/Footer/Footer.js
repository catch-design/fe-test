import React from 'react';
import { IconFacebook, IconInstagram, IconYoutube} from '../../components/UI/Icons/Icons';
import classes from './Footer.scss';
import mainStyle from '../../main.scss';

const footer = (props) => {
return (
    <div className={classes.footer__container}>
        <div className={[classes.footer__contentcontainer, mainStyle['col-8-12']].join(' ')}>
            <div className={[classes.footer__social, mainStyle['col-5-8']].join(' ')}>
                <div className={classes.footer__socialiconsholder}>
                    <div className={[classes.footer__socialiconfacebook, classes.footer__socialicon].join(' ')}>
                        <IconFacebook fillColor="#008FFF" iconWidth="17px" iconHeight="17px"/>
                    </div>
                    <div className={[classes.footer__socialiconinstagram, classes.footer__socialicon].join(' ')}>
                        <IconInstagram fillColor="#008FFF" iconWidth="17px" iconHeight="17px"/>
                    </div>
                    <div className={[classes.footer__socialiconyoutube, classes.footer__socialicon].join(' ')}>
                        <IconYoutube fillColor="#008FFF" iconWidth="17px" iconHeight="17px"/>
                    </div>
                </div>
                <div className={[classes.footer__getintouch, mainStyle['col-4-5']].join(' ')}>
                    <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                </div>
            </div>
            <div className={[classes.footer__contact, mainStyle['col-3-8']].join(' ')}>
                <p className={classes.footer__contacttitle}>
                    Main Office
                </p>
                <p className={classes.footer__contactinfo}>
                    6235 Thalia Terrace Apt. 695
                </p>
                <p className={classes.footer__contactinfo}>
                    Frederikfurt
                </p>
                <p className={classes.footer__contactinfo}>
                    Jamaica
                </p>
                <br/>
                <p className={classes.footer__contacttitle}>
                    Contact
                </p>
                <p className={classes.footer__contactinfo}>
                    735-421-6378
                </p>
                <a className={classes.footer__contactlink} href="">myname@gmail.com</a>
            </div>
        </div>
    </div>
)
};

export default footer;