import React, {Component} from 'react';
import Header from './containers/Header/Header';
import SignUp from './containers/SignUp/SignUp';
import Catalogue from './containers/Catalogue/Catalogue';
import Gallery from './containers/Gallery/Gallery';
import Footer from './containers/Footer/Footer';
import mainStyle from './main.scss';
import classes from './App.scss';

class App extends Component {

    render() {
        return (
            <div className={[mainStyle.grid__container, classes.homepage__container].join(' ')}>
                <Header title="A front-end test of sorts"/>
                <SignUp/>
                <Catalogue/>
                <Gallery/>
                <Footer/>
            </div>
        )
    }

}

export default App;