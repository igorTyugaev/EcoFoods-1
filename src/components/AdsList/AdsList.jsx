import React, {Component} from 'react';
import Title from '../Title';
import AdsBlock from '../AdsBlock';
import './style.scss';
import img from '../Advertising/img/1.jpg';

export default class AdsList extends Component {
    render() {
        const {announcements, title} = this.props;
        console.log(announcements);
        return (
            <section className="announcement-list__wrapper">
                <Title h2={title}></Title>
                <ul className="announcement-list">
                    {announcements.map((item) => (
                        <AdsBlock
                            key={item.id}
                            productId={item.uuid}
                            img={item.images.length > 0 && item.images[0].image.image ? 'data:image/jpeg;base64,' + item.images[0].image.image : img}
                            place={item.merchant.address}
                            units={item.units}
                            price={item.price}
                            name={item.name}
                        ></AdsBlock>
                    ))}
                </ul>
            </section>
        );
    }
}
