import React, {Component} from 'react';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import Card from '../../components/UI/Card/Card';
import classes from './Catalogue.scss';
import mainStyle from '../../main.scss';

class Catalogue extends Component {

    state = {
        catalogueItems: [
            {
                title: 'Pink & Purple Sunset',
                description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper.',
                image: {
                    url: '/src/assets/images/snow-covered-mountains.png',
                    alt: 'Snow covered mountain tops'
                },
                link: {
                    url:'',
                    label: 'Go to the sunset'
                }
            },
            {
                title: 'Sublime Trees',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet…',
                image: {
                    url: '/src/assets/images/purple-pink-palm-trees.png ',
                    alt: 'Palm trees with a pink & purple background'
                },
                link: {
                    url:'',
                    label: 'View some more'
                }}
        ]
    };


    render() {

        let catalogueItems = this.state.catalogueItems.length > 0 ? this.state.catalogueItems.map((item, index) => {
            return <Card
                    key={index}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    link={item.link}
                />
        }): null;


        return (
            <div className={[classes.catalogue__container, mainStyle['col-8-12']].join(' ')}>
                {catalogueItems}
            </div>
        )
    }
}
;

export default Catalogue;