import React,{Component} from 'react';
import Slider from "react-slick";

const slideList = [
    {   
        imageUrl: 'Home.png',
        tag: 'All natural products',
        titleone: 'Healty Food Pure',
        titletwo: ' Organic Market',
        text: 'Organic food is food produced by methods that comply with the standard of farming.',
        textcolor:'text-white',
        link: '/g-5',
        alignmanet:'slide-content text-left w-450 ps-lg-5 ms-3',
        content:'item rounded-6 bg-image-cover ovh style2 d-flex justify-content-start'
    },
    // {   
    //     imageUrl: 'slide.png',
    //     tag: 'All natural products',
    //     titleone: 'Summer Discount',
    //     titletwo: ' Organic Market',
    //     text: 'Organic food is food produced by methods that comply with the standard of farming.',
    //     textcolor:'text-grey-900',
    //     link: '/g-5',
    //     alignmanet:'slide-content text-center w-450',
    //     content:'item rounded-6 bg-image-cover ovh style2 d-flex justify-content-center'
    // },
]

class Slidertwo extends Component {
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
                    {slideList.map((value , index) => (
                        <div key={index}>
                            <div className={value.content} style={{backgroundImage: `url("assets/images/${value.imageUrl}")`}}>
                                <div className={value.alignmanet}>
                                    <span className={value.textcolor}>{value.tag}</span>
                                    <h2 className={value.textcolor}><b className="d-lg-block">{value.titleone}</b>{value.titletwo}</h2>    
                                    <p className="text-grey-500 fw-500">{value.text}</p>
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

export default Slidertwo;