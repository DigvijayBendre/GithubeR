import React,{Component} from 'react';
import Slider from "react-slick";

const categoryList = [
    {   
        imageUrl: "Home.jpg",
        tag: 'All natural products',
        titleone: 'Healty Food Pure',
        titletwo: ' Organic Market',
        text: 'Organic food is food produced by methods that comply with the standard of farming.',
        link: '/g-4',
        alignmanet:'slide-content text-left w-75',
    },
    // {   
    //     imageUrl: 'slide.png',
    //     tag: 'All natural products',
    //     titleone: 'Summer Discount',
    //     titletwo: ' Organic Market',
    //     text: 'Organic food is food produced by methods that comply with the standard of farming.',
    //     link: '/g-4',
    //     alignmanet:'slide-content text-left w-75',
    // },
]

class Sliderthree extends Component {
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
                            <div className="item rounded-6 bg-image-cover ovh style3 d-flex justify-content-start" style={{backgroundImage: `url("assets/images/${value.imageUrl}")`}}>
                                
                                    <div className={value.alignmanet}>
                                        <span className="text-grey-700">{value.tag}</span>
                                        <h2 className="text-grey-900"><b>{value.titleone}</b>{value.titletwo}</h2>    
                                        <p className="text-grey-600">{value.text}</p>
                                        <div className="clearfix"></div>
                                        <a href={value.link} className="btn-lg rounded-25 btn bg-current">SHOP NOW</a>
                                    </div>                                     
                                
                                
                            </div>
                        </div>  
                    ))}
                </Slider>
            </div>
        );
    }
}

export default Sliderthree;