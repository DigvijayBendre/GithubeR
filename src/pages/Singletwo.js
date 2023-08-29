import React, { Component , Fragment } from "react";
import Slider from "react-slick";

import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheader from '../components/Lowerheader';
import Footer from '../components/Footer';


const relatedProduct = [
    { imageUrl: 'veg.png', title: 'Apple Juice Organic Food ', price: '39', weight: '200 gm'},
    { imageUrl: 'veg.png', title: 'Almonds Lightly Salted ', price: '29', weight: '300 gm'},
    { imageUrl: 'veg.png', title: 'Assorted Donuts Salted ', price: '79', weight: '5 Kg'},
    { imageUrl: 'veg.png', title: 'Natures Own 100% Wheat ', price: '29', weight: '500 gm'},
    { imageUrl: 'veg.png', title: 'Kobita Almonds Salted ', price: '20', weight: '200 gm'},
    { imageUrl: 'veg.png', title: 'Apple Juice Organic Food ', price: '40', weight: '2 Kg'},
]


const singleProduct = [
    { imageUrl: 'veg.png', title: 'Apple Juice Organic Food ' },
    { imageUrl: 'veg.png', title: 'Almonds Lightly Salted ' },
    { imageUrl: 'veg.png', title: 'Apple Juice Organic Food ' },
]

class Singletwo extends Component {
    render() {
        const Productsettings = {
            arrows: true,
            dots: false,
            infinite: false,
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
        const singlesettings = {
            arrows: true,
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            centerMode: false
        };
        return (
            <Fragment> 
                <Headermob />
                <Upperheader divclassName="bg-greylight" />
                <Header />
                <Lowerheader />

                <div className="product-wrapper product-card pb-5 pt-lg-5 pt-3 md-mt-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6 col-sm-6 sm-mb-3">
                                <div className="card border-0 bg-current-shade p-5 text-center d-block me-0">
                                    <Slider {...singlesettings}>
                                        {singleProduct.map((value , index) => (
                                            <div key={index} className="text-center">
                                                <img src={`assets/images/${value.imageUrl}`} alt={value.title} className="w-150 d-inline-block" />
                                            </div>
                                        ))}
                                    </Slider> 
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product-card border-0">
                                    
                                    <ul className="breadcrumb-link list-inline"><li className="list-inline-item"><a href="https://klbtheme.com/bacola">Home</a></li><li className="list-inline-item"><a href="https://klbtheme.com/bacola/product-category/meats-seafood/">Meats &amp; Seafood</a></li><li className="list-inline-item">Wheat  Maida</li></ul>
                                    <h2 className="fw-700 text-grey-800 font-sm ls-0 mt-0 mb-2 tag-name lh-3">Organic Wheat Maida</h2>
                                    <div className="star d-inline text-left">
                                        <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start me-1 float-start"  />
                                        <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start me-1 float-start"  />
                                        <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start me-1 float-start"  />
                                        <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start me-1 float-start"  />
                                        <img src="assets/images/star-disable.png" alt="star" className="w-10 me-1 float-start me-2 float-start"  />
                                        <span className="fw-600 font-xssss text-grey-500 float-start lh-1">4.5 Rating </span>
                                    </div>
                                    <div className="clearfix"></div>
                                    <h6 className="font-lg ls-3 fw-700 text-current float-start mt-3 mb-3"><span className="font-xssss text-grey-500">$</span>49 <span className="tag-weight">500 gm</span></h6>
                                    <div className="clearfix"></div>
                                    <p className="font-xssss fw-500 mt-0 text-grey-500 lh-24">Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>
                                    
                                    <div className="alert-warning text-danger p-2 text-center w-100 font-xssss fw-600 rounded-6 mb-4">Out of Stock</div>

                                    <h5 className="font-xssss fw-500 text-grey-500 mb-2 mt-2 lh-3"><b className="text-grey-700">Brand:</b> <a href="/" className="text-current fw-600">Orgomart</a> </h5>
                                    <h5 className="font-xssss fw-500 text-grey-500 mb-2 mt-2 lh-3"><b className="text-grey-700">Vendor:</b> <a href="/" className="text-current fw-600">Local Store</a> </h5>
                                    <h5 className="font-xssss fw-500 text-grey-500 mb-2 mt-2 lh-3"><b className="text-grey-700">Category:</b> Meats &amp; Seafood </h5>
                                    <h5 className="font-xssss fw-500 text-grey-500 mb-2 mt-2 lh-3"><b className="text-grey-700">Tags:</b> chicken, natural, organic</h5>

                                    <h5 className="font-xssss fw-500 text-grey-500 mt-4 d-flex"><i className="feather-bookmark font-xs text-current me-2 mt-n1"></i> <b className="text-grey-700 me-1">2 Month</b> Brand Warranty </h5>
                                    <h5 className="font-xssss fw-500 text-grey-500 mt-3 d-flex"><i className="feather-help-circle font-xs text-current me-2 mt-n1"></i> <b className="text-grey-700 me-1">100% </b> Organic Product</h5>
                                    <h5 className="font-xssss fw-500 text-grey-500 mt-3 d-flex mb-4"><i className="feather-alert-triangle font-xs text-current me-2 mt-n1"></i> <b className="text-grey-700 me-1">30 Days </b> Money back Return</h5>
                                    <div className="cart-card d-flex border-0">
                                        <div className="cart-count float-end me-2">
                                            <div className="number">
                                                <span className="minus">-</span>
                                                <input type="text" className="open-font cart-input mx-1" defaultValue="1" /> 
                                                <span className="plus">+</span>
                                            </div>
                                        </div>
                                        <a href="/" className="bg-current text-white rounded-6 btn-cart">ADD to Cart</a>    
                                    </div>
                                    <div className="share-card d-flex mt-lg-5 mt-3">
                                        <h5 className="fw-600 text-grey-700 me-3 mt-2 lh-26 font-xssss">Share :</h5>
                                        <a href="/" className="btn-round btn-round-md ms-1 z-index-1 bg-facebook"><i className="ti-facebook text-white"></i></a>
                                        <a href="/" className="btn-round btn-round-md ms-1 z-index-1 bg-twiiter"><i className="ti-twitter-alt text-white"></i></a>
                                        <a href="/" className="btn-round btn-round-md ms-1 z-index-1 bg-linkedin"><i className="ti-linkedin text-white"></i></a>
                                        <a href="/" className="btn-round btn-round-md ms-1 z-index-1 bg-instagram"><i className="ti-instagram text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-5 ps-3">
                                <div className="section full mt-4 mb-4 p-4 bg-light theme-light-bg rounded-6">
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <h2 className="font-xxl lh-1 m-0 text-grey-900 fw-700">4.3</h2>
                                        </div>
                                        <div className="col-12 text-center">
                                            <h4 className="font-xssss text-grey-500 fw-600 mt-2">Based on 433 rating</h4>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-7 pr-1 mt-0">
                                            <div className="star d-inline text-left">
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                            </div>
                                        </div>
                                        <div className="col-5 ps-0 text-right"><h4 className="font-xssss mt-0 mb-0 fw-600 text-grey-600">Support</h4></div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-7 pr-1 mt-0">
                                            <div className="star d-inline text-left">
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star-disable.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star-disable.png" alt="star" className="w-10 me-1 float-start" />
                                            </div>
                                        </div>
                                        <div className="col-5 ps-0 text-right"><h4 className="font-xssss mt-0 mb-0 fw-600 text-grey-600">Performance</h4></div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-7 pr-1 mt-0">
                                            <div className="star d-inline text-left">
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star-disable.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star-disable.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star-disable.png" alt="star" className="w-10 me-1 float-start" />
                                            </div>
                                        </div>
                                        <div className="col-5 ps-0 text-right"><h4 className="font-xssss mt-0 mb-0 fw-600 text-grey-600">Speed</h4></div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-7 pr-1 mt-0">
                                            <div className="star d-inline text-left">
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star-disable.png" alt="star" className="w-10 me-1 float-start" />
                                            </div>
                                        </div>
                                        <div className="col-5 ps-0 text-right"><h4 className="font-xssss mt-0 mb-0 fw-600 text-grey-600">Quality</h4></div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-7 pr-1 mt-0">
                                            <div className="star d-inline text-left">
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star-disable.png" alt="star" className="w-10 me-1 float-start" />
                                            </div>
                                        </div>
                                        <div className="col-5 ps-0 text-right"><h4 className="font-xssss mt-0 mb-0 fw-600 text-grey-600">Delivery</h4></div>
                                    </div>
                                </div>
                                <div className="section full mb-3">
                                    <div className="row">
                                        <div className="col-2 text-left">
                                            <figure className="avatar float-left mb-0"><img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="user" className="shadow-none w-40" /></figure>
                                        </div>
                                        <div className="col-10 ps-4">
                                            <div className="content">
                                                <h6 className="author-name font-xsss fw-700 mb-0 text-grey-800">Hurin Seary</h6>
                                                <h5 className="time font-xsssss fw-500 text-grey-500 mt-1 mb-1">July 26 at 8:20 PM</h5>
                                                <div className="star float-none">
                                                    <img src="assets/images/star.png" alt="star" className="w-12 float-start me-1" />
                                                    <img src="assets/images/star.png" alt="star" className="w-12 float-start me-1" />
                                                    <img src="assets/images/star.png" alt="star" className="w-12 float-start me-1" />
                                                    <img src="assets/images/star.png" alt="star" className="w-12 float-start me-1" />
                                                    <img src="assets/images/star-disable.png" alt="star" className="w-12 float-start me-1" />
                                                </div>                         
                                                <div className="clearfix"></div>   
                                                <p className="font-xssss fw-500 mt-3 text-grey-500 lh-22">Enjoyed this a lot and well done. We are an early stage digitally native vertical. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="section full mb-3">
                                    <div className="row">
                                        <div className="col-2 text-left">
                                            <figure className="avatar float-left mb-0"><img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="user" className="shadow-none w-40" /></figure>
                                        </div>
                                        <div className="col-10 ps-4">
                                            <div className="content">
                                                <h6 className="author-name font-xsss fw-700 mb-0 text-grey-800">Goria Coast</h6>
                                                <h5 className="time font-xsssss fw-500 text-grey-500 mt-1 mb-1">July 26 at 8:20 PM</h5>
                                                <div className="star float-none">
                                                    <img src="assets/images/star.png" alt="star" className="w-12 float-start me-1" />
                                                    <img src="assets/images/star.png" alt="star" className="w-12 float-start me-1" />
                                                    <img src="assets/images/star.png" alt="star" className="w-12 float-start me-1" />
                                                    <img src="assets/images/star.png" alt="star" className="w-12 float-start me-1" />
                                                    <img src="assets/images/star-disable.png" alt="star" className="w-12 float-start me-1" />
                                                </div>                         
                                                <div className="clearfix"></div>   
                                                <p className="font-xssss fw-500 mt-3 text-grey-500 lh-22">Enjoyed this a lot and well done. We are an early stage digitally native vertical. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-0">
                                    <a href="/" className="bg-greylight text-grey-900 fw-700 rounded-6 btn-cart text-center ">Add Review</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="related-product pb-5 mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h4 className="fw-700 font-xss mb-4 mt-2">Related Products</h4>
                            </div>

                            <div className="col-lg-12">
                            <div className="card">
                                <Slider {...Productsettings} className="slick-arrow-top">
                                    {relatedProduct.map((value , index) => (
                                        <div key={index} className="p-3 posr">
                                            <h4 className="ls-3 font-xsssss text-white text-uppercase bg-current fw-700 p-2 d-inline-block posa rounded-3">30% off</h4>
                                            <span className="posa right-0 top-0 mt-3 me-3 z-index-5"><i className="ti-heart font-xs text-grey-500"></i></span>
                                            <div className="clearfix"></div>
                                            <a href="/single-product" className="d-block text-center p-2"><img src={`assets/images/${value.imageUrl}`} alt="product" className="w-100 mt-1 d-inline-block" /></a>
                                            <div className="star d-inline text-left">
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start"  />
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start"  />
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start"  />
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start"  />
                                                <img src="assets/images/star-disable.png" alt="star" className="w-10 me-1 float-start"  />
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

                <Footer />
            </Fragment>
        );
    }
}

export default Singletwo;