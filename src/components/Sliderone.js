import React,{Component} from 'react';
import Slider from "react-slick";

const categoryList = [
    {   
        imageUrl: 'Home.png',
        tag: 'All natural products',
        titleone: 'Healty Food Pure',
        titletwo: ' Organic Market',
        text: 'Organic food is food produced by methods that comply with the standard of farming.',
        link: '/g-6',
        alignmanet:'slide-content text-center',
        content:'row justify-content-center'
    },
    // {   
    //     imageUrl: 'slide.png',
    //     tag: 'All natural products',
    //     titleone: 'Summer Discount',
    //     titletwo: ' Organic Market',
    //     text: 'Organic food is food produced by methods that comply with the standard of farming.',
    //     link: '/g-6',
    //     alignmanet:'slide-content text-start',
    //     content:'row'
    // },
]

class Sliderone extends Component {
    render() {
        const storysettings = {
            arrows: true,
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            centerMode: false
        };
        return (
            <div className="slider-banner banner-wrap">
                <Slider {...storysettings}>
                    {categoryList.map((value , index) => (
                        <div key={index}>
                            <div className="item rounded-6 bg-image-cover bg-image-center ovh style3 d-flex justify-content-start bg-image-cover" style={{backgroundImage: `url("assets/images/${value.imageUrl}")`}}>
                                <div className="container">
                                    <div className={value.content}>
                                        <div className="col-lg-6 col-md-6 col-xl-4">
                                            <div className={value.alignmanet}>
                                                <span className="text-grey-700">{value.tag}</span>
                                                <h2 className="text-grey-900"><b>{value.titleone}</b>{value.titletwo}</h2>    
                                                <p className="text-grey-600">{value.text}</p>
                                                <div className="clearfix"></div>
                                                <a href={value.link} className="btn-lg rounded-25 btn bg-current">SHOP NOW</a>
                                            </div>
                                        </div>      
                                    </div>
                                </div>
                            </div>
                        </div>  
                    ))}
                </Slider>
            </div>
        );
    }
}

export default Sliderone;