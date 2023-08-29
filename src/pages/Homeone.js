import React, { Component , Fragment } from "react";
import Slider from "react-slick";

import Headertwo from '../components/Headertwo';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheadertwo from '../components/Lowerheadertwo';
import Footertwo from '../components/Footertwo';
import Blog from '../components/Blog';
import Productlisting from '../components/Productlisting';
import Addbannerone from '../components/Addbannerone';
import Addbannerthree from '../components/Addbannerthree';
import Productfilterh from '../components/Productfilterh';
import Sliderfour from '../components/Sliderfour';
import { Modal , Button , Navbar , Nav , NavDropdown, NavLink } from 'react-bootstrap';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const dealProduct = [
    { imageUrl: 'veg.png', title: 'Blue Diamond Almonds ', price: '39', weight: '400 gm'},
    { imageUrl: 'veg.png', title: 'Assorted Donuts Salted ', price: '29', weight: '2 Kg'},
    { imageUrl: 'veg.png', title: 'Natures Own Wheat ', price: '40', weight: '400 gm'},
    { imageUrl: 'veg.png', title: 'Tailgater Ham  Organic ', price: '40', weight: '1 Kg'},
    { imageUrl: 'veg.png', title: 'Kobita Almonds Salted ', price: '40', weight: '100 gm'},
]

// const Product = [
//     { imageUrl: 'p.png', title: 'Almonds Lightly Salted ', price: '29', weight: '300 gm'},
//     { imageUrl: 'p.png', title: 'Assorted Donuts Salted ', price: '79', weight: '5 Kg'},
//     { imageUrl: 'p.png', title: 'Natures Own 100% Wheat ', price: '29', weight: '500 gm'},
//     { imageUrl: 'p.png', title: 'Blue Diamond Almonds ', price: '40', weight: '400 gm'},
//     { imageUrl: 'p.png', title: 'Natures Own Wheat ', price: '40', weight: '400 gm'},
// ]

const discountProduct = [
    { imageUrl: 'veg.png', title: 'Assorted Donuts Salted ', price: '59', weight: '300 gm'},
    { imageUrl: 'veg.png', title: 'Natures Own Wheat ', price: '89', weight: '400 gm'},
    { imageUrl: 'veg.png', title: 'Tailgater Sandwich ', price: '99', weight: '100 gm'},
    { imageUrl: 'veg.png', title: 'Kobita Almonds Salted ', price: '20', weight: '200 gm'},
    { imageUrl: 'veg.png', title: 'Apple Juice Organic ', price: '40', weight: '2 Kg'},
    { imageUrl: 'veg.png', title: 'Tailgater Ham  Organic ', price: '40', weight: '1 Kg'},
]


class Homeone extends Component {
    render() {
        const discountProductsettings = {
            arrows: true,
            dots: false,
            infinite: false,
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
        return (
            <Fragment> 

                <div className="main-wrapper bg-greylight">


                    <Headermob />
                    <Upperheader divClass="bg-green" />
                    <Headertwo />
                    <Lowerheadertwo />
                    
                    

                    <div className="banner-wrapper pt-4 pb-3 md-mt-6">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 pe-lg-0 d-none d-lg-block lower-header z-index-2">
                                <div className="card w-100 p-2 pb-0 border-0 text-start">
                                                <h4 className="fw-700 font-lg text-grey-900 text-start mb-3 mt-n2 d-block ls-0"> Categories</h4>
                                                <Navbar expand="lg" className="dropdown-navbar">
                                                    <Navbar id="basic-navbar-nav" className="w-100 d-block">
                                                        <Nav>                                                          
                                                            <Nav.Link as={Link} to="/breads-bakery">Breads & Bakery</Nav.Link>
                                                            <Nav.Link as={Link} to="/Grocery-Staples">Grocery  Staples</Nav.Link>
                                                            <Nav.Link as={Link} to="/Household-Needs">Household Needs </Nav.Link>
                                                            <Nav.Link as={Link} to="/Meats-Seafood">Meats  Seafood </Nav.Link>
                                                        </Nav>
                                                    </Navbar>
                                                </Navbar>
                                                
                                            </div>
                                            
                                </div>

                                <div className="col-lg-9">
                                    <Sliderfour />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="content-wrap">
                        <div className="container">
                            <div className="row m-0">
                                <div className="col-lg-12 bg-white rounded-6 p-4 pb-3">
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
                            </div>
                        </div>
                    </div>

                    <div className="main-wrap pt-4">
                        <div className="container">
                            <div className="row">
                                {/* <div className="col-lg-3 pe-lg-0 d-none d-lg-block">

                                    {/* <div className="card bg-white rounded-6 mb-3 border-0 p-3">
                                        <div className="col-lg-12">
                                            <h4 className="fw-700 d-flex font-xsss mb-1 mt-2">roduct <i className="feather-chevrons-right text-grey-500 font-xs ms-auto"></i></h4>
                                        </div>

                                        {dealProduct.map((value , index) => (
                                        <div key={index} className="row mt-3">
                                            <div className="col-xs-5 col-sm-5"><a href="/g-1" className="d-block text-center"><img src={`assets/images/${value.imageUrl}`} alt="product" className="w-100 d-inline-block pt-3 pb-3 bg-greylight rounded-6" /></a></div>
                                            <div className="col-xs-7 col-sm-7 ps-0">
                                                <span className="ms-auto text-grey-500 fw-500 lh-1 font-xsssss mt-0 w-100 mb-2">{value.weight}</span>
                                                <a href="/single-product-1-1" className="text-grey-900 fw-600 font-xssss lh-20 d-block ls-0 mb-0">{value.title}</a>
                                                <h6 className="font-xsss ls-3 fw-700 text-current float-start mt-1"><span className="font-xsssss text-grey-500">₹</span>{value.price} </h6>
                                            </div>
                                        </div>
                                        ))}
                                    </div> */}

                                    <Addbannerthree />

                                    {/* <div className="card bg-white rounded-6 mb-3 border-0 p-3">
                                        <div className="col-lg-12">
                                            <h4 className="fw-700 d-flex font-xsss mb-1 mt-2">Featured Product <i className="feather-chevrons-right text-grey-500 font-xs ms-auto"></i></h4>
                                        </div>

                                        {Product.map((value , index) => (
                                        <div key={index} className="row mt-3">
                                            <div className="col-xs-5 col-sm-5"><a href="/g-1" className="d-block text-center"><img src={`assets/images/${value.imageUrl}`} alt="product" className="w-100 d-inline-block pt-3 pb-3 bg-greylight rounded-6" /></a></div>
                                            <div className="col-xs-7 col-sm-7 ps-0">
                                                <span className="ms-auto text-grey-500 fw-500 lh-1 font-xsssss mt-0 w-100 mb-2">{value.weight}</span>
                                                <a href="/single-product-1" className="text-grey-900 fw-600 font-xssss lh-20 d-block ls-0 mb-0">{value.title}</a>
                                                <h6 className="font-xsss ls-3 fw-700 text-current float-start mt-1"><span className="font-xsssss text-grey-500">₹</span>{value.price} </h6>
                                            </div>
                                        </div>
                                        ))}
                                    </div> 
                                        */}
 
                            {/* 
                                    <div className="card bg-lightblue rounded-6 mb-3 border-0">
                                        <img src="https://via.placeholder.com/260x420.png" alt="banner" className="w-100" />
                                    </div>
                                </div> */}
                                 


                                <div className="main-wrap pt-4 ">
                                    
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h4 className="fw-700 font-xs mb-4 mt-2">Deal of the day</h4>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="card border-0">
                                                <Slider {...discountProductsettings} className="slick-arrow-top">
                                                    {discountProduct.map((value , index) => (
                                                        <div key={index} className="p-3 posr">
                                                            <h4 className="ls-3 font-xsssss text-white text-uppercase bg-current fw-700 p-2 d-inline-block posa rounded-3">30% off</h4>
                                                            <span className="posa right-0 top-0 mt-3 me-3 z-index-5"><i className="ti-heart font-xs text-grey-500"></i></span>
                                                            <div className="clearfix"></div>
                                                            <a href="/single-product-1" className="d-block text-center p-2"><img src={`assets/images/${value.imageUrl}`} alt="product" className="w-100 mt-1 d-inline-block" /></a>
                                                            <div className="star d-inline text-left">
                                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                                <img src="assets/images/star-disable.png" alt="star" className="w-10 me-1 float-start" />
                                                            </div>
                                                            <div className="clearfix"></div>
                                                            <h2 className="mt-1"><a href="/single-product-1" className="text-grey-700 fw-600 font-xsss lh-2 ls-0">{value.title}</a></h2>
                                                            <h6 className="font-xss ls-3 fw-700 text-current d-flex"><span className="font-xsssss text-grey-500">₹</span>{value.price} <span className="ms-auto me-4 text-grey-500 fw-500 font-xsssss">{value.weight}</span></h6>
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

                                        <div className="col-lg-12 mt-3 product-filter-three">
                                            <Productfilterh divClass="card side-wrap border-0 p-lg-5 p-4 bg-white" gird="col-lg-4 mb-3 mb-lg-0" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 mt-3 mb-3"><Addbannerone /></div>
                                    </div>
                                    {/* <div className="row m-0">
                                        <div className="card d-flex flex-row justify-content-start p-3 bg-white border-0 mb-3">
                                            <a href="/" className="mt-1"><span className="feather-grid text-grey-600 font-xs"></span></a>
                                            <select className="form-select ms-auto float-end" aria-label="Default select example">
                                                <option>Sort by latest</option>
                                                <option defaultValue="1">Sort by popularity</option>
                                                <option defaultValue="2">Sort by price : low to high</option>
                                                <option defaultValue="3">Sort by price : high to low</option>
                                            </select>
                                        </div>
                                    </div> */}
                                    
                                    <Productlisting divClass="col-lg-3 col-md-4 col-xs-6 p-4 border-end border-bottom rounded-0 posr" />
                                    

                                    <div className="row">
                                        <div className="col-lg-12 mt-5 mb-4">
                                            <nav aria-label="Page navigation example">
                                            <ul className="pagination justify-content-center">
                                                <li className="page-item disabled"><a className="page-link" href="/"><i className="feather-chevron-left"></i></a></li>
                                                <li className="page-item active"><a className="page-link" href="/">1</a></li>
                                                <li className="page-item"><a className="page-link" href="/">2</a></li>
                                                <li className="page-item"><a className="page-link" href="/">3</a></li>
                                                <li className="page-item"><a className="page-link" href="/">4</a></li>
                                                <li className="page-item"><a className="page-link" href="/"><i className="feather-chevron-right"></i></a></li>
                                            </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Blog />
                    <Footertwo divClass="bg-white" />

                </div>
            </Fragment>
        );
    }
}

export default Homeone;