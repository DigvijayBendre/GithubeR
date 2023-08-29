import React, { Component , Fragment } from "react";

import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheader from '../components/Lowerheader';
import Footerthree from '../components/Footerthree';
import Blog from '../components/Blog';
import Testimonial from '../components/Testimonial';
import Catagorysldier from '../components/Catagorysldier';
import Addbannerone from '../components/Addbannerone';
import Sliderone from '../components/Sliderone';

const dealProduct = [
    { imageUrl: 'veg.png', title: 'Blue Diamond Almonds ', price: '39', weight: '400 gm'},
    { imageUrl: 'veg.png', title: 'Natures Own Wheat ', price: '40', weight: '400 gm'},
    { imageUrl: 'veg.png', title: 'Tailgater Ham  Organic ', price: '40', weight: '1 Kg'},
    { imageUrl: 'veg.png', title: 'Kobita Almonds Salted ', price: '40', weight: '100 gm'},
    { imageUrl: 'veg.png', title: 'Assorted Donuts Salted ', price: '40', weight: '100 gm'},
    { imageUrl: 'veg.png', title: 'Assorted Donuts Salted ', price: '59', weight: '300 gm'},
    { imageUrl: 'veg.png', title: 'Natures Own Wheat ', price: '89', weight: '400 gm'},
    { imageUrl: 'veg.png', title: 'Tailgater Ham Sandwich ', price: '99', weight: '100 gm'},
    { imageUrl: 'veg.png', title: 'Kobita Almonds Salted ', price: '20', weight: '200 gm'},
    { imageUrl: 'veg.png', title: 'Apple Juice Organic Food ', price: '40', weight: '2 Kg'},
]

const trendProduct = [
    { imageUrl: 'veg.png', title: 'Apple Juice Organic Food ', price: '39', weight: '200 gm'},
    { imageUrl: 'veg.png', title: 'Almonds Lightly Salted ', price: '29', weight: '300 gm'},
    { imageUrl: 'veg.png', title: 'Assorted Donuts Salted ', price: '79', weight: '5 Kg'},
    { imageUrl: 'veg.png', title: 'Natures Own 100% Wheat ', price: '29', weight: '500 gm'},
]

class Homesix extends Component {
    render() {
        return (
            <Fragment> 
                <Headermob />
                <Upperheader divClass="bg-lightgrey" />
                <Header />
                <Lowerheader />

                <div className="banner-wrapper pb-3 md-mt-6 ovh">
                    <Sliderone />
                </div>

                <div className="content-wrap pt-4 pb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Catagorysldier />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-center pt-4">
                                <h2 className="fw-700 text-grey-900 font-xl lh-3">Best Seller</h2>
                                <p className="text-grey-500 font-xssss fw-500 lh-24">We believe everyone deserves to have a website or online. Innovation and simplicity makes us happy: our goal is to remove.</p>
                                <ul className="nav nav-tabs tabs-icon list-inline d-block w-100 text-center border-bottom-0 mb-4" id="myNavTabs" role="tablist">
                                    <li className="nav-item list-inline-item"><a href="/g-6" className="nav-link active" id="demo-tab">Fruits</a></li>
                                    <li className="nav-item list-inline-item"><a href="/g-6" className="nav-link" id="shop-tab">Drinks</a></li>
                                    <li className="nav-item list-inline-item"><a href="/g-6" className="nav-link" id="product-tab">Bakery</a></li>
                                    <li className="nav-item list-inline-item"><a href="/g-6" className="nav-link" id="page-tab">Meat</a></li>
                                    <li className="nav-item list-inline-item"><a href="/g-6" className="nav-link" id="dash-tab">Vegitable</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-12 mt-4 mb-4">
                                <div className="product-wrap product-wrap-six border rounded-6 ">
                                    <div className="row m-0">
                                        {dealProduct.map((value , index) => (
                                            <div key={index} className="p-3 posr card border-0">
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

                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-12">
                                <Addbannerone />
                            </div>
                            <div className="col-lg-4 col-md-4 mt-4 mb-lg-5 mb-3 product-wrap-bottom">
                                <h4 className="fw-700 font-xss mb-3 mt-2">Best Seller</h4>
                                
                                {trendProduct.map((value , index) => (
                                    <div key={index} className="card border-0 rounded-6">
                                        <div className="card-content p-3 border border-bottom-0 border-light border-size-md">
                                            <div className="row">
                                                <div className="col-sm-4 col-xs-4"><a href="/g-6" className="d-block text-center"><img src={`assets/images/${value.imageUrl}`} alt="product" className="w-100 d-inline-block pt-2 rounded-6" /></a></div>
                                                <div className="col-sm-8 col-xs-8 ps-0">
                                                    <span className="ms-auto text-grey-500 fw-500 lh-1 font-xsssss mt-0 w-100 mb-2">{value.weight}</span>
                                                    <a href="/single-product" className="text-grey-900 fw-600 font-xssss lh-20 d-block ls-0 mb-0">{value.title}</a>
                                                    <h6 className="font-xsss ls-3 fw-700 text-current float-start mt-1"><span className="font-xsssss text-grey-500">$</span>{value.price} </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                ))}
                                
                            </div>

                            <div className="col-lg-4 col-md-4 mt-4 mb-lg-5 mb-3 product-wrap-bottom">
                                <h4 className="fw-700 font-xss mb-3 mt-2">Trend Seller</h4>
                                
                                {trendProduct.map((value , index) => (
                                    <div key={index} className="card border-0 rounded-6">
                                        <div className="card-content p-3 border border-bottom-0 border-light border-size-md">
                                            <div className="row">
                                                <div className="col-sm-4 col-xs-4"><a href="/g-6" className="d-block text-center"><img src={`assets/images/${value.imageUrl}`} alt="product" className="w-100 d-inline-block pt-2 rounded-6" /></a></div>
                                                <div className="col-sm-8 col-xs-8 ps-0">
                                                    <span className="ms-auto text-grey-500 fw-500 lh-1 font-xsssss mt-0 w-100 mb-2">{value.weight}</span>
                                                    <a href="/single-product" className="text-grey-900 fw-600 font-xssss lh-20 d-block ls-0 mb-0">{value.title}</a>
                                                    <h6 className="font-xsss ls-3 fw-700 text-current float-start mt-1"><span className="font-xsssss text-grey-500">$</span>{value.price} </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                ))}
                                
                            </div>

                            <div className="col-lg-4 col-md-4 mt-4 mb-lg-5 mb-3 product-wrap-bottom">
                                <h4 className="fw-700 font-xss mb-3 mt-2">Feature Seller</h4>
                                
                                {trendProduct.map((value , index) => (
                                    <div key={index} className="card border-0 rounded-6">
                                        <div className="card-content p-3 border border-bottom-0 border-light border-size-md">
                                            <div className="row">
                                                <div className="col-sm-4 col-xs-4"><a href="/g-6" className="d-block text-center"><img src={`assets/images/${value.imageUrl}`} alt="product" className="w-100 d-inline-block pt-2 rounded-6" /></a></div>
                                                <div className="col-sm-8 col-xs-8 ps-0">
                                                    <span className="ms-auto text-grey-500 fw-500 lh-1 font-xsssss mt-0 w-100 mb-2">{value.weight}</span>
                                                    <a href="/single-product" className="text-grey-900 fw-600 font-xssss lh-20 d-block ls-0 mb-0">{value.title}</a>
                                                    <h6 className="font-xsss ls-3 fw-700 text-current float-start mt-1"><span className="font-xsssss text-grey-500">$</span>{value.price} </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                ))}
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="feedback-wrapper pt-4 pb-lg-5 pt-lg-5 pb-4" style={{backgroundImage: `url("https://via.placeholder.com/1900x530.png")`}}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-center">
                                <h2 className="fw-700 text-grey-900 font-xxl lh-3">We <span className="text-current">Care About</span> <br /> Our Customer Experience </h2>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-3">
                            <Testimonial />
                        </div>
                    </div>
                </div>


                <Blog />
                <Footerthree divClass="bg-black" />

            </Fragment>
        );
    }
}

export default Homesix;