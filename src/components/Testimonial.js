import React,{Component} from 'react';
import Slider from "react-slick";

const feedbackList = [
    {   
        imageUrl: 'c.png',
        name: 'Hurin Seary ',
        feed: 'Enjoyed this a lot and well done. We are an early stage digitally native vertical.website or online.',
    },
    {   
        imageUrl: 'c.png',
        name: 'Hurin Seary ',
        feed: 'Enjoyed this a lot and well done. We are an early stage digitally native vertical.website or online.',
    },
    {   
        imageUrl: 'c.png',
        name: 'Hurin Seary ',
        feed: 'Enjoyed this a lot and well done. We are an early stage digitally native vertical.website or online.',
    },
    {   
        imageUrl: 'c.png',
        name: 'Hurin Seary ',
        feed: 'Enjoyed this a lot and well done. We are an early stage digitally native vertical.website or online.',
    }
]

class Testimonial extends Component {
    render() {
        const storysettings = {
            arrows: false,
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            centerMode: false,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 749,
                  settings: {
                    slidesToShow: 1,
                  }
                },
                {
                  breakpoint: 0,
                  settings: {
                    slidesToShow: 1,
                  }
                }
            ]
        };
        return (
            <Slider {...storysettings} className="slick-dot-bottom">
                {feedbackList.map((value , index) => (
                    <div key={index}>
                        <div className="card bg-white border-0 rounded-6 p-lg-5 p-4 m-3 ">
                            <div className="section full">
                                <div className="row">
                                    <div className="col-3 text-left">
                                        <figure className="avatar float-left mb-0"><img src={`assets/images/${value.imageUrl}`} alt="ava" className="shadow-none w-55 rounded-circle" /></figure>
                                    </div>
                                    <div className="col-9 ps-3">
                                        <div className="content">
                                            <h6 className="author-name font-xsss fw-700 mb-2 text-grey-800 mt-1 pt-1"> {value.name}</h6>
                                            <div className="star float-none">
                                                <img src="assets/images/star.png" alt="star" className="w-12 float-start me-1" />
                                                <img src="assets/images/star.png" alt="star" className="w-12 float-start me-1" />
                                                <img src="assets/images/star.png" alt="star" className="w-12 float-start me-1" />
                                                <img src="assets/images/star.png" alt="star" className="w-12 float-start me-1" />
                                                <img src="assets/images/star-disable.png" alt="star" className="w-12 float-start me-1" />
                                            </div>                         
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <p className="font-xssss fw-500 mt-3 mb-0 text-grey-600 lh-28"> {value.feed}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        );
    }
}

export default Testimonial;