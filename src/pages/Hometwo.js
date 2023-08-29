import React, { Component , Fragment } from "react";
import Slider from "react-slick";

import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheadertwo from '../components/Lowerheadertwo';
import Footer from '../components/Footer';
import Blog from '../components/Blog';
import Catagorysldiertwo from '../components/Catagorysldiertwo';
import Addbannerone from '../components/Addbannerone';
import Sliderfour from '../components/Sliderfour';


const discountProduct = [
    { imageUrl: 'veg.png', title: 'Assorted Donuts Salted ', price: '59', weight: '300 gm'},
    { imageUrl: 'veg.png', title: 'Natures Own Wheat ', price: '89', weight: '400 gm'},
    { imageUrl: 'veg.png', title: 'Tailgater Sandwich ', price: '99', weight: '100 gm'},
    { imageUrl: 'veg.png', title: 'Kobita Almonds Salted ', price: '20', weight: '200 gm'},
    { imageUrl: 'veg.png', title: 'Apple Juice Organic ', price: '40', weight: '2 Kg'},
    { imageUrl: 'veg.png', title: 'Tailgater Ham  Organic ', price: '40', weight: '1 Kg'},
]


const Product = [
    { imageUrl: 'veg.png', title: 'Apple Juice Organic Food ', price: '39', weight: '200 gm'},
    { imageUrl: 'veg.png', title: 'Almonds Lightly Salted ', price: '29', weight: '300 gm'},
    { imageUrl: 'veg.png', title: 'Assorted Donuts Salted ', price: '79', weight: '5 Kg'},
    { imageUrl: 'veg.png', title: 'Natures Own 100% Wheat ', price: '29', weight: '500 gm'},
    { imageUrl: 'veg.png', title: 'Blue Diamond Almonds ', price: '40', weight: '400 gm'},
    { imageUrl: 'veg.png', title: 'Tailgater Ham  Organic ', price: '40', weight: '1 Kg'},
]

const bestProduct = [
    { imageUrl: 'veg.png', title: 'Assorted Donuts Salted ', price: '59', weight: '300 gm'},
    { imageUrl: 'veg.png', title: 'Natures Own Wheat ', price: '89', weight: '400 gm'},
    { imageUrl: 'veg.png', title: 'Tailgater Ham Sandwich ', price: '99', weight: '100 gm'},
    { imageUrl: 'veg.png', title: 'Kobita Almonds Salted ', price: '20', weight: '200 gm'},
    { imageUrl: 'veg.png', title: 'Apple Juice Organic Food ', price: '40', weight: '2 Kg'},
    { imageUrl: 'veg.png', title: 'Tailgater Ham  Organic ', price: '40', weight: '1 Kg'},
]

class Hometwo extends Component {
    render() {
        const discountProductsettings = {
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            centerMode: false,
            responsive: [
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

        const Productsettings = {
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 5,
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
                <Lowerheadertwo />

                <div className="banner-wrapper pt-4 pb-4 md-mt-6" style={{backgroundImage: `url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngall.com%2Fgrocery-png%2F&psig=AOvVaw0eXecTF27a2oG0ZCPVv52n&ust=1693368204444000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCPj3iKj-gIEDFQAAAAAdAAAAABAE.png")`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <Sliderfour />
                            </div>
                            {/* <div className="col-lg-3 ps-lg-0 d-none d-lg-block">
                                <div className="card w-100 border-0 shadow-none ovh rounded-6 hover-zoom-image">
                                    <img src="https://via.placeholder.com/260x485.png" alt="banner" className="w-100" />
                                    <div className="p-4 posa top-0 w-100">
                                        <span className="fw-700 ls-3 text-white bg-current ps-2 pe-2 lh-24 rounded-6 d-inline-block font-xsssss">30% OFF</span>
                                        <h4 className="font-md fw-700 lh-28 text-grey-900 mb-1 mt-3 ls-0">High Quality <br /> Products</h4>
                                        <a href="/g-2" className="fw-700 ls-1 border-bottom border-dark lh-20 d-inline-block text-grey-900 font-xsssss">SHOP NOW</a>
                                    </div>  
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="content-wrap pt-4 pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 pb-3">
                                <h4 className="fw-700 font-xs mb-4 mt-2">Categoris</h4>
                                <Catagorysldiertwo />
                            </div>

                            <div className="col-lg-12">
                                <h4 className="fw-700 font-xs mb-4 mt-2">Deal of the day</h4>
                            </div>

                            <div className="col-lg-12">
                                <div className="card rounded-6 mb-3">
                                    <Slider {...Productsettings} className="slick-arrow-top">
                                        {bestProduct.map((value , index) => (
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
                                <h4 className="fw-700 font-xs mb-4 mt-2">Best Products</h4>
                            </div>

                            <div className="col-lg-12">
                                <div className="card rounded-6 mb-3">
                                    <Slider {...Productsettings} className="slick-arrow-top">
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

                            <div className="col-lg-12 mt-3 mb-3">
                                <Addbannerone />
                            </div>
                            
                            <div className="col-lg-12">
                                <h4 className="fw-700 font-xs mb-4 mt-2">roducts</h4>
                            </div>
                            <div className="col-lg-3 mb-3 mb-lg-0">
                                <div className="card border-0 bg-lightgrey p-4 rounded-6">
                                    <div className="form-group mb-3">
                                        <h6 className="fw-600 text-grey-900 font-xsss mb-2 text-capitalize">Product Categoires</h6>
                                    </div>
                                    <h6 className="d-flex font-xssss lh-22 fw-500 text-grey-600">Drinks <i className="feather-chevron-right ms-auto"></i></h6>
                                    <h6 className="d-flex font-xssss lh-22 fw-500 text-grey-600">Snacks Biscuits <i className="feather-chevron-right ms-auto"></i></h6>
                                    <h6 className="d-flex font-xssss lh-22 fw-500 text-grey-600">Breads Bakery <i className="feather-chevron-right ms-auto"></i></h6>
                                    <h6 className="d-flex font-xssss lh-22 fw-500 text-grey-600">Breakfast Dairy <i className="feather-chevron-right ms-auto"></i></h6>
                                    <h6 className="d-flex font-xssss lh-22 fw-500 text-grey-600">Frozen Foods <i className="feather-chevron-right ms-auto"></i></h6>
                                    <h6 className="d-flex font-xssss lh-22 fw-500 text-grey-600">Fruits Vegetables <i className="feather-chevron-right ms-auto"></i></h6>
                                    <h6 className="d-flex font-xssss lh-22 fw-500 text-grey-600">Grocery Staples <i className="feather-chevron-right ms-auto"></i></h6>
                                    <h6 className="d-flex font-xssss lh-22 fw-500 text-grey-600 mb-0">Household Needs <i className="feather-chevron-right ms-auto"></i></h6>
                                </div>
                            </div>
                            <div className="col-lg-9 ps-lg-0">
                                <div className="card">
                                    <Slider {...discountProductsettings} className="slick-arrow-top">
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
                            
                        </div>
                    </div>
                </div>
                
                <Blog />
                <Footer />
            </Fragment>
                
        );
    }
}

export default Hometwo;