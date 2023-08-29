import React, { Component , Fragment } from "react";
import Slider from "react-slick";

import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheader from '../components/Lowerheader';
import Footertwo from '../components/Footertwo';
import Blog from '../components/Blog';
import Catagorysldier from '../components/Catagorysldier';
import Addbannertwo from '../components/Addbannertwo';
import Addbannerfour from '../components/Addbannerfour';

const dealProduct = [
    { imageUrl: 'veg.png', title: 'Blue Diamond Almonds ', price: '39', weight: '400 gm'},
    { imageUrl: 'veg.png', title: 'Assorted Donuts Salted ', price: '29', weight: '2 Kg'},
    { imageUrl: 'veg.png', title: 'Natures Own Wheat ', price: '40', weight: '400 gm'},
    { imageUrl: 'veg.png', title: 'Tailgater Ham  Organic ', price: '40', weight: '1 Kg'},
    { imageUrl: 'veg.png', title: 'Kobita Almonds Salted ', price: '40', weight: '100 gm'},
]
const Product = [
    { imageUrl: 'veg.png', title: 'Apple Juice Organic Food ', price: '39', weight: '200 gm'},
    { imageUrl: 'evg.png', title: 'Almonds Lightly Salted ', price: '29', weight: '300 gm'},
    { imageUrl: 'veg.png', title: 'Assorted Donuts Salted ', price: '79', weight: '5 Kg'},
    { imageUrl: 'veg.png', title: 'Natures Own 100% Wheat ', price: '29', weight: '500 gm'},
    { imageUrl: 'veg.png', title: 'Blue Diamond Almonds ', price: '40', weight: '400 gm'},
]

const discountProduct = [
    { imageUrl: 'veg.png', title: 'Assorted Donuts Salted ', price: '59', weight: '300 gm'},
    { imageUrl: 'veg.png', title: 'Natures Own Wheat ', price: '89', weight: '400 gm'},
    { imageUrl: 'veg.png', title: 'Tailgater Ham Sandwich ', price: '99', weight: '100 gm'},
    { imageUrl: 'veg.png', title: 'Kobita Almonds Salted ', price: '20', weight: '200 gm'},
    { imageUrl: 'veg.png', title: 'Apple Juice Organic Food ', price: '40', weight: '2 Kg'},
]



class Homethree extends Component {
    render() {
        const dealProductsettings = {
            arrows: true,
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            centerMode: false,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                  }
                },
                {
                  breakpoint: 749,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 0,
                  settings: {
                    slidesToShow: 2,
                  }
                }
            ]
        };
        return (
            <Fragment> 
                <Headermob />
                <Upperheader divClass="bg-lightgrey" />
                <Header />
                <Lowerheader />

                <div className="banner-wrapper pt-4 pb-4 md-mt-6" style={{backgroundImage: `url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphoto%2Fhealthy-food-shopping-concept-gm1132266853-300088403&psig=AOvVaw0eXecTF27a2oG0ZCPVv52n&ust=1693368204444000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCPj3iKj-gIEDFQAAAAAdAAAAABAJ.png")`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 sm-mb-3">
                                <div className="card border-0 p-4 bg-image-cover" style={{backgroundImage: `url("https://via.placeholder.com/260x485.png")`}}>
                                    <h4 className="fw-700 text-grey-900 font-xss mb-2">Dairy Products</h4>
                                    <ul className="menu-category">
                                        <li><a href="/g-3">Fresh Vegetables</a></li>
                                        <li><a href="/g-3">Herbs Seasonings</a></li>
                                        <li><a href="/g-3">Fresh Fruits</a></li>
                                        <li><a href="/g-3">Cuts Sprouts</a></li>
                                        <li><a href="/g-3">Exotic Fruits Veggies</a></li>
                                        <li><a href="/g-3">Packaged Produce</a></li>
                                        <li><a href="/g-3">Party Trays</a></li>
                                        
                                        <li><a href="/g-3">Fresh Fruits</a></li>
                                        <li><a href="/g-3">Cuts Sprouts</a></li>
                                        <li><a href="/g-3">Exotic Veggies</a></li>
                                        <li><a href="/g-3">Packaged Produce</a></li>
                                        <li><a href="/g-3">Party Trays</a></li>
                                        <li><a href="/g-3">Fresh Vegetables</a></li>
                                        <li><a href="/g-3">Herbs Seasonings</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 sm-mb-3">
                                <div className="card border-0 p-4 bg-image-cover" style={{backgroundImage: `url("https://via.placeholder.com/260x485.png")`}}>
                                    <h4 className="fw-700 text-grey-900 font-xss mb-2">Snacks Beverages</h4>
                                    <ul className="menu-category">
                                        
                                        <li><a href="/g-3">Cuts Sprouts</a></li>
                                        <li><a href="/g-3">Exotic Fruits Veggies</a></li>
                                        <li><a href="/g-3">Packaged Produce</a></li>
                                        <li><a href="/g-3">Fresh Vegetables</a></li>
                                        <li><a href="/g-3">Herbs Seasonings</a></li>
                                        <li><a href="/g-3">Fresh Fruits</a></li>
                                        <li><a href="/g-3">Party Trays</a></li>
                                        <li><a href="/g-3">Packaged Produce</a></li>
                                        <li><a href="/g-3">Party Trays</a></li>
                                        <li><a href="/g-3">Fresh Vegetables</a></li>
                                        <li><a href="/g-3">Herbs Seasonings</a></li>
                                        <li><a href="/g-3">Fresh Fruits</a></li>
                                        <li><a href="/g-3">Cuts Sprouts</a></li>
                                        <li><a href="/g-3">Exotic Veggies</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 sm-mb-3">
                                <div className="card border-0 p-4 bg-image-cover" style={{backgroundImage: `url("https://via.placeholder.com/260x485.png")`}}>
                                    <h4 className="fw-700 text-grey-900 font-xss mb-2">Home Kitchen</h4>
                                    <ul className="menu-category">
                                        <li><a href="/g-3">Fresh Vegetables</a></li>
                                        <li><a href="/g-3">Herbs Seasonings</a></li>
                                        <li><a href="/g-3">Fresh Fruits</a></li>
                                        <li><a href="/g-3">Cuts Sprouts</a></li>
                                        <li><a href="/g-3">Exotic Fruits Veggies</a></li>
                                        <li><a href="/g-3">Packaged Produce</a></li>
                                        <li><a href="/g-3">Party Trays</a></li>
                                        
                                        <li><a href="/g-3">Fresh Fruits</a></li>
                                        <li><a href="/g-3">Cuts Sprouts</a></li>
                                        <li><a href="/g-3">Exotic Veggies</a></li>
                                        <li><a href="/g-3">Packaged Produce</a></li>
                                        <li><a href="/g-3">Party Trays</a></li>
                                        <li><a href="/g-3">Fresh Vegetables</a></li>
                                        <li><a href="/g-3">Herbs Seasonings</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 sm-mb-3">
                                <div className="card border-0 p-4 bg-image-cover" style={{backgroundImage: `url("https://via.placeholder.com/260x485.png")`}}>
                                    <h4 className="fw-700 text-grey-900 font-xss mb-2">Drinks Care</h4>
                                    <ul className="menu-category">
                                        
                                        <li><a href="/g-3">Cuts Sprouts</a></li>
                                        <li><a href="/g-3">Exotic Fruits Veggies</a></li>
                                        <li><a href="/g-3">Packaged Produce</a></li>
                                        <li><a href="/g-3">Fresh Vegetables</a></li>
                                        <li><a href="/g-3">Herbs Seasonings</a></li>
                                        <li><a href="/g-3">Fresh Fruits</a></li>
                                        <li><a href="/g-3">Party Trays</a></li>
                                        <li><a href="/g-3">Packaged Produce</a></li>
                                        <li><a href="/g-3">Party Trays</a></li>
                                        <li><a href="/g-3">Fresh Vegetables</a></li>
                                        <li><a href="/g-3">Herbs Seasonings</a></li>
                                        <li><a href="/g-3">Fresh Fruits</a></li>
                                        <li><a href="/g-3">Cuts Sprouts</a></li>
                                        <li><a href="/g-3">Exotic Veggies</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-wrap pt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 bg-white rounded-6 pt-3">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 xs-mb-4 md-mb-3 text-start">
                                        <i className="ti-shopping-cart text-grey-900 display1-size float-start me-3"></i>
                                        <h4 className="mt-0 fw-600 text-grey-900 font-xsss mb-0 ls-0">100% Secure Payments</h4>
                                        <p className="font-xsssss fw-500 text-grey-500 lh-26 mt-0 mb-0">100% Payment Protection.</p>
                                    </div>                 
                                    
                                    <div className="col-lg-3 col-md-6 xs-mb-4 md-mb-3 text-start">
                                        <i className="ti-headphone-alt text-grey-900 display1-size float-start me-3"></i>
                                        <h4 className="mt-0 fw-600 text-grey-900 font-xsss mb-0 ls-0">Support</h4>
                                        <p className="font-xsssss fw-500 text-grey-500 lh-26 mt-0 mb-0">Alway online feedback 24/7</p>
                                    </div>                 
                                    <div className="col-lg-3 col-md-6 md-mb-3 text-start">
                                        <i className="ti-lock text-grey-900 display1-size float-start me-3"></i>
                                        <h4 className="mt-0 fw-600 text-grey-900 font-xsss mb-0 ls-0">Trust pay</h4>
                                        <p className="font-xsssss fw-500 text-grey-500 lh-26 mt-0 mb-0">Easy Return Policy.</p>
                                    </div> 
                                    <div className="col-lg-3 col-md-6 text-start">
                                        <i className="ti-reload text-grey-900 display1-size float-start me-3"></i>
                                        <h4 className="mt-0 fw-600 text-grey-900 font-xsss mb-0 ls-0">Return and Refund</h4>
                                        <p className="font-xsssss fw-500 text-grey-500 lh-26 mt-0 mb-0">100% money back guarantee</p>
                                    </div>   
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 pe-2">
                                <Addbannerfour title="Fresh vegitable" tag="30% OFF" bgimage="banner-7.jpg" />
                            </div>
                            <div className="col-lg-4 col-md-4 pe-2 ps-2">
                                <Addbannerfour title="Healty  vegitable" tag="50% OFF" bgimage="banner-4.jpg" />
                            </div>
                            <div className="col-lg-4 col-md-4 ps-2">
                                <Addbannerfour title="Bread 50% OFF" tag="20% OFF" bgimage="banner-5.jpg" />
                            </div>


                            <div className="col-lg-12 mt-4">
                                <h4 className="fw-700 font-xs mb-4 mt-2">Deal of the day</h4>
                            </div>

                            {/* <div className="col-lg-2 pe-0">
                                <div className="card w-100 border-0 shadow-none mb-3 d-none d-lg-block ovh rounded-6 hover-zoom-image" style={{maxHeight:'335px'}}>
                                    <img src="https://via.placeholder.com/225x500.png" alt="add" className="w-100" />
                                    <div className="p-4 posa bottom-0 w-100">
                                        <span className="fw-700 ls-3 text-white bg-current ps-2 pe-2 lh-24 rounded-6 d-inline-block font-xsssss">30% OFF</span>
                                        <h4 className="font-xss fw-700 lh-24 text-grey-900 mb-2 mt-2 ls-0">High Quality <br /> Products</h4>
                                        <a href="/g-3" className="fw-700 ls-3 text-grey-900 font-xsssss border-bottom border-dark">SHOP NOW</a>
                                    </div>  
                                </div>
                            </div> */}

                            <div className="col-lg-10">
                                <div className="banner-slider-4 rounded-6 bg-white border">
                                    <Slider {...dealProductsettings} className="slick-arrow-top">
                                        {dealProduct.map((value , index) => (
                                            <div key={index} className="p-3 posr">
                                                <h4 className="ls-3 font-xsssss text-white text-uppercase bg-current fw-700 p-2 d-inline-block posa rounded-3">30% off</h4>
                                                <span className="posa right-0 top-0 mt-3 me-3 z-index-5"><i className="ti-heart font-xs text-grey-500"></i></span>
                                                <div className="clearfix"></div>
                                                <a href="/single-product" className="d-block text-center p-2"><img src={`assets/images/${value.imageUrl}`} alt="product" className="w-100 mt-1 d-inline-block" /></a>
                                                <div className="star d-inline text-left">
                                                    <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                    <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                    <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                    <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                    <img src="assets/images/star-disable.png" alt="star" className="w-10 me-1 float-start" />
                                                </div>
                                                <div className="clearfix"></div>
                                                <h2 className="mt-1"><a href="/single-product" className="text-grey-700 fw-600 font-xsss lh-2 ls-0">{value.title}</a></h2>
                                                <h6 className="font-xss ls-3 fw-700 text-current d-flex"><span className="font-xsssss text-grey-500">$</span>{value.price} <span className="ms-auto me-4 text-grey-500 fw-500 font-xsssss">{value.weight}</span></h6>
                                                <div className="cart-count d-flex mt-4 mb-2">
                                                    <div className="number">
                                                        <span className="minus">-</span>
                                                        <input type="text" className="open-font me-1 ms-1" defaultValue="1" />
                                                        <span className="plus">+</span>
                                                    </div>
                                                </div>
                                            </div>  
                                        ))}
                                    </Slider>
                                </div>
                            </div>


                            <div className="col-lg-12 mt-4">
                                <h4 className="fw-700 font-xs mb-4 mt-2">Discount Products</h4>
                            </div>
{/* 
                            <div className="col-lg-2 pe-0">
                                <div className="card w-100 border-0 shadow-none mb-3 d-none d-lg-block ovh rounded-6 hover-zoom-image" style={{maxHeight:'335px'}}>
                                    <img src="https://via.placeholder.com/225x500.png" alt="add" className="w-100" />
                                    <div className="p-4 posa bottom-0 w-100">
                                        <span className="fw-700 ls-3 text-white bg-current ps-2 pe-2 lh-24 rounded-6 d-inline-block font-xsssss">30% OFF</span>
                                        <h4 className="font-xss fw-700 lh-24 text-grey-900 mb-2 mt-2 ls-0">High Quality <br /> Products</h4>
                                        <a href="/g-3" className="fw-700 ls-3 text-grey-900 font-xsssss border-bottom border-dark">SHOP NOW</a>
                                    </div>  
                                </div>
                            </div> */}

                            <div className="col-lg-10">
                                <div className="banner-slider-4 rounded-6 bg-white border">
                                    <Slider {...dealProductsettings} className="slick-arrow-top">
                                        {discountProduct.map((value , index) => (
                                            <div key={index} className="p-3 posr">
                                                <h4 className="ls-3 font-xsssss text-white text-uppercase bg-current fw-700 p-2 d-inline-block posa rounded-3">30% off</h4>
                                                <span className="posa right-0 top-0 mt-3 me-3 z-index-5"><i className="ti-heart font-xs text-grey-500"></i></span>
                                                <div className="clearfix"></div>
                                                <a href="/single-product" className="d-block text-center p-2"><img src={`assets/images/${value.imageUrl}`} alt="product" className="w-100 mt-1 d-inline-block" /></a>
                                                <div className="star d-inline text-left">
                                                    <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                    <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                    <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                    <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                    <img src="assets/images/star-disable.png" alt="star" className="w-10 me-1 float-start" />
                                                </div>
                                                <div className="clearfix"></div>
                                                <h2 className="mt-1"><a href="/single-product" className="text-grey-700 fw-600 font-xsss lh-2 ls-0">{value.title}</a></h2>
                                                <h6 className="font-xss ls-3 fw-700 text-current d-flex"><span className="font-xsssss text-grey-500">$</span>{value.price} <span className="ms-auto me-4 text-grey-500 fw-500 font-xsssss">{value.weight}</span></h6>
                                                <div className="cart-count d-flex mt-4 mb-2">
                                                    <div className="number">
                                                        <span className="minus">-</span>
                                                        <input type="text" className="open-font me-1 ms-1" defaultValue="1" />
                                                        <span className="plus">+</span>
                                                    </div>
                                                </div>
                                            </div>  
                                        ))}
                                    </Slider>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <Addbannertwo />
                            </div>

                            <div className="col-lg-12 mt-4">
                                <h4 className="fw-700 font-xs mb-4 mt-2">roduct</h4>
                            </div>

                            <div className="col-lg-2 pe-0">
                                <div className="card w-100 border-0 shadow-none mb-3 d-none d-lg-block ovh rounded-6 hover-zoom-image" style={{maxHeight:'335px'}}>
                                    <img src="https://via.placeholder.com/225x500.png" alt="add" className="w-100" />
                                    <div className="p-4 posa bottom-0 w-100">
                                        <span className="fw-700 ls-3 text-white bg-current ps-2 pe-2 lh-24 rounded-6 d-inline-block font-xsssss">30% OFF</span>
                                        <h4 className="font-xss fw-700 lh-24 text-grey-900 mb-2 mt-2 ls-0">High Quality <br /> Products</h4>
                                        <a href="/g-3" className="fw-700 ls-3 text-grey-900 font-xsssss border-bottom border-dark">SHOP NOW</a>
                                    </div>  
                                </div>
                            </div>

                            <div className="col-lg-10">
                                <div className="banner-slider-4 rounded-6 bg-white border">
                                    <Slider {...dealProductsettings} className="slick-arrow-top">
                                        {Product.map((value , index) => (
                                            <div key={index} className="p-3 posr">
                                                <h4 className="ls-3 font-xsssss text-white text-uppercase bg-current fw-700 p-2 d-inline-block posa rounded-3">30% off</h4>
                                                <span className="posa right-0 top-0 mt-3 me-3 z-index-5"><i className="ti-heart font-xs text-grey-500"></i></span>
                                                <div className="clearfix"></div>
                                                <a href="/single-product" className="d-block text-center p-2"><img src={`assets/images/${value.imageUrl}`} alt="product" className="w-100 mt-1 d-inline-block" /></a>
                                                <div className="star d-inline text-left">
                                                    <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                    <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                    <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                    <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                    <img src="assets/images/star-disable.png" alt="star" className="w-10 me-1 float-start" />
                                                </div>
                                                <div className="clearfix"></div>
                                                <h2 className="mt-1"><a href="/single-product" className="text-grey-700 fw-600 font-xsss lh-2 ls-0">{value.title}</a></h2>
                                                <h6 className="font-xss ls-3 fw-700 text-current d-flex"><span className="font-xsssss text-grey-500">$</span>{value.price} <span className="ms-auto me-4 text-grey-500 fw-500 font-xsssss">{value.weight}</span></h6>
                                                <div className="cart-count d-flex mt-4 mb-2">
                                                    <div className="number">
                                                        <span className="minus">-</span>
                                                        <input type="text" className="open-font me-1 ms-1" defaultValue="1" />
                                                        <span className="plus">+</span>
                                                    </div>
                                                </div>
                                            </div>  
                                        ))}
                                    </Slider>
                                </div>
                            </div>

                            <div className="col-lg-12 pt-4">
                                <Catagorysldier />
                            </div>
                        </div>
                    </div>
                </div>

                <Blog />
                <Footertwo />

            </Fragment>
        );
    }
}

export default Homethree;