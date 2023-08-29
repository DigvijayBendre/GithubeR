import React, { Component , Fragment } from "react";

import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheader from '../components/Lowerheader';
import Footer from '../components/Footer';
import Blog from '../components/Blog';
import Slidertwo from '../components/Slidertwo';
import Catagorysldiertwo from '../components/Catagorysldiertwo';
import Addbannertwo from '../components/Addbannertwo';

const dealProduct = [
    { imageUrl: 'veg.png', title: 'Blue Diamond Almonds ', price: '39', weight: '400 gm'},
    { imageUrl: 'veg.png', title: 'Assorted Donuts Salted ', price: '29', weight: '2 Kg'},
    { imageUrl: 'veg.png', title: 'Natures Own Wheat ', price: '40', weight: '400 gm'},
    { imageUrl: 'veg.png', title: 'Tailgater Ham  Organic ', price: '40', weight: '1 Kg'},
    { imageUrl: 'veg.png', title: 'Kobita Almonds Salted ', price: '40', weight: '100 gm'},
    { imageUrl: 'veg.png', title: 'Assorted Donuts Salted ', price: '40', weight: '100 gm'},
]

const trendProduct = [
    { imageUrl: 'p.png', title: 'Apple Juice Organic Food ', price: '39', weight: '200 gm'},
    { imageUrl: 'p.png', title: 'Almonds Lightly Salted ', price: '29', weight: '300 gm'},
    { imageUrl: 'p.png', title: 'Assorted Donuts Salted ', price: '79', weight: '5 Kg'},
    { imageUrl: 'p.png', title: 'Natures Own 100% Wheat ', price: '29', weight: '500 gm'},
    { imageUrl: 'p.png', title: 'Blue Diamond Almonds ', price: '40', weight: '400 gm'},
    { imageUrl: 'p.png', title: 'Natures Own Wheat ', price: '40', weight: '400 gm'},
]

const discountProduct = [
    { imageUrl: 'veg.png', title: 'Assorted Donuts Salted ', price: '59', weight: '300 gm'},
    { imageUrl: 'veg.png', title: 'Natures Own Wheat ', price: '89', weight: '400 gm'},
    { imageUrl: 'p.png', title: 'Tailgater Ham Sandwich ', price: '99', weight: '100 gm'},
    { imageUrl: 'p.png', title: 'Kobita Almonds Salted ', price: '20', weight: '200 gm'},
    { imageUrl: 'p.png', title: 'Apple Juice Organic Food ', price: '40', weight: '2 Kg'},
    { imageUrl: 'p.png', title: 'Tailgater Ham  Organic ', price: '40', weight: '1 Kg'},
]

class Homefive extends Component {
    render() {
        return (
            <Fragment> 
                <Headermob />
                <Upperheader divClass="bg-lightgrey" />
                <Header />
                <Lowerheader />
                <div className="banner-wrapper pt-4 pb-4 md-mt-6" style={{backgroundImage: `url("assets/images/background.jpg")`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 pt-0 pb-3">
                                <Catagorysldiertwo />
                            </div>
                            <div className="col-lg-12">
                                <Slidertwo />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-wrapper pt-4 pb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h4 className="fw-700 font-sm mb-4 mt-2 d-flex lh-18">Best Products <a href="/g-4" className="ms-auto text-grey-500 fw-600 text-uppercase font-xsssss border-bottom ls-3">view all</a></h4>
                            </div>
                        </div>
                        <div className="border rounded-6 ovh bg-white">
                            <div className="row">
                                <div className="col-lg-4 pe-md-0 ps-xs-0">
                                    <div className="card w-100 border-0 rounded-0 shadow-none h-md-250">
                                        <div className="card-image"><img src="https://via.placeholder.com/351x430.png" className="w-100" alt="banner" /></div>
                                        <div className="p-4 posa bottom-0 w-100 z-index-5">
                                            <span className="fw-700 ls-3 text-white bg-current ps-2 pe-2 lh-24 rounded-6 d-inline-block font-xsssss">30% OFF</span>
                                            <h4 className="font-xs fw-700 lh-28 text-grey-900 mb-2 mt-2 ls-0">Daily <br /> Meal Discount</h4>
                                            <a href="/g-5" className="fw-700 ls-3 text-grey-900 font-xsssss border-bottom border-dark lh-22 d-inline-block">SHOP NOW</a>
                                        </div>  
                                    </div>
                                    <div className="card w-100 p-4 pb-0 border-0 rounded-0 bg-white border-bottom-sm">
                                        <ul className="list-group border-0 mt-0">
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Breads Bakery</a></li>
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Breakfast Dairy</a></li>
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Frozen Foods</a></li>
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Fruits Vegetables</a></li>
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Grocery Staples</a></li>
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Household Needs</a></li>
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Meats Seafood</a></li>
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Eggs Substitutes</a></li>
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Honey Vegetables</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="row">
                                    {dealProduct.map((value , index) => (
                                        <div key={index} className="col-lg-4 col-md-4 col-xs-6 p-4 border-start border-bottom rounded-0 posr">
                                            {/* <a href="/g-5" className="wishlist-btn posa right-0 top-0 mt-3 me-3"><i className="feather-heart font-md text-grey-500"></i></a> */}
                                            <div className="clearfix"></div>
                                            <a href="/g-5" className="d-block text-center"><img src={`assets/images/${value.imageUrl}`} alt="product" className="w-100 mt-3 mb-3 d-inline-block p-2 pt-0" /></a>
                                            <div className="star d-inline text-left">
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star-disable.png" alt="star" className="w-10 me-1 float-start" />
                                            </div>
                                            <div className="clearfix"></div>
                                            <h2 className="mt-2"><a href="/single-product" className="text-grey-700 fw-600 font-xsss lh-22 d-block ls-0">{value.title}</a></h2>
                                            <h6 className="font-xss ls-3 fw-700 text-current d-flex"><span className="font-xsssss text-grey-500">$</span>{value.price} <span className="ms-auto text-grey-500 fw-500 mt-1 font-xsssss">{value.weight}</span></h6>
                                            <div className="cart-count d-flex mt-4">
                                                <div className="number">
                                                    <span className="minus">-</span>
                                                    <input type="text" className="open-font" defaultValue="1" />
                                                    <span className="plus">+</span>
                                                </div>
                                            </div>
                                        </div>  
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-wrapper pt-4 pb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h4 className="fw-700 font-sm mb-4 mt-2 d-flex lh-18"> Products <a href="/g-4" className="ms-auto text-grey-500 fw-600 text-uppercase font-xsssss border-bottom ls-3">view all</a></h4>
                            </div>
                        </div>
                        <div className="border rounded-6 ovh bg-white">
                            <div className="row">
                                <div className="col-lg-4 pe-md-0 ps-xs-0">
                                    <div className="card w-100 border-0 rounded-0 shadow-none h-md-250">
                                        <div className="card-image"><img src="https://via.placeholder.com/351x430.png" className="w-100" alt="banner" /></div>
                                        <div className="p-4 posa bottom-0 w-100 z-index-5">
                                            <span className="fw-700 ls-3 text-white bg-current ps-2 pe-2 lh-24 rounded-6 d-inline-block font-xsssss">30% OFF</span>
                                            <h4 className="font-xs fw-700 lh-28 text-grey-900 mb-2 mt-2 ls-0">Daily <br /> Meal Discount</h4>
                                            <a href="/g-5" className="fw-700 ls-3 text-grey-900 font-xsssss border-bottom border-dark lh-22 d-inline-block">SHOP NOW</a>
                                        </div>  
                                    </div>
                                    <div className="card w-100 p-4 pb-0 border-0 rounded-0 bg-white border-bottom-sm">
                                        <ul className="list-group border-0 mt-0">
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Breads Bakery</a></li>
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Breakfast Dairy</a></li>
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Frozen Foods</a></li>
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Fruits Vegetables</a></li>
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Grocery Staples</a></li>
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Household Needs</a></li>
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Meats Seafood</a></li>
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Eggs Substitutes</a></li>
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Honey Vegetables</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="row">
                                    {trendProduct.map((value , index) => (
                                        <div key={index} className="col-lg-4 col-md-4 col-xs-6 p-4 border-start border-bottom rounded-0 posr">
                                            {/* <a href="/g-5" className="wishlist-btn posa right-0 top-0 mt-3 me-3"><i className="feather-heart font-md text-grey-500"></i></a> */}
                                            <div className="clearfix"></div>
                                            <a href="/g-5" className="d-block text-center"><img src={`assets/images/${value.imageUrl}`} alt="product" className="w-100 mt-3 mb-3 d-inline-block p-2 pt-0" /></a>
                                            <div className="star d-inline text-left">
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star-disable.png" alt="star" className="w-10 me-1 float-start" />
                                            </div>
                                            <div className="clearfix"></div>
                                            <h2 className="mt-2"><a href="/single-product" className="text-grey-700 fw-600 font-xsss lh-22 d-block ls-0">{value.title}</a></h2>
                                            <h6 className="font-xss ls-3 fw-700 text-current d-flex"><span className="font-xsssss text-grey-500">$</span>{value.price} <span className="ms-auto text-grey-500 fw-500 mt-1 font-xsssss">{value.weight}</span></h6>
                                            <div className="cart-count d-flex mt-4">
                                                <div className="number">
                                                    <span className="minus">-</span>
                                                    <input type="text" className="open-font" defaultValue="1" />
                                                    <span className="plus">+</span>
                                                </div>
                                            </div>
                                        </div>  
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-wrap pt-4 pb-4">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-12">
                                <Addbannertwo />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-wrapper pt-4 pb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h4 className="fw-700 font-sm mb-4 mt-2 d-flex lh-18">Discount  Products <a href="/g-4" className="ms-auto text-grey-500 fw-600 text-uppercase font-xsssss border-bottom ls-3">view all</a></h4>
                            </div>
                        </div>
                        <div className="border rounded-6 ovh bg-white">
                            <div className="row">
                                <div className="col-lg-4 pe-md-0 ps-xs-0">
                                    <div className="card w-100 border-0 rounded-0 shadow-none h-md-250">
                                        <div className="card-image"><img src="https://via.placeholder.com/351x430.png" className="w-100" alt="banner" /></div>
                                        <div className="p-4 posa bottom-0 w-100 z-index-5">
                                            <span className="fw-700 ls-3 text-white bg-current ps-2 pe-2 lh-24 rounded-6 d-inline-block font-xsssss">30% OFF</span>
                                            <h4 className="font-xs fw-700 lh-28 text-grey-900 mb-2 mt-2 ls-0">Daily <br /> Meal Discount</h4>
                                            <a href="/g-5" className="fw-700 ls-3 text-grey-900 font-xsssss border-bottom border-dark lh-22 d-inline-block">SHOP NOW</a>
                                        </div>  
                                    </div>
                                    <div className="card w-100 p-4 pb-0 border-0 rounded-0 bg-white border-bottom-sm">
                                        <ul className="list-group border-0 mt-0">
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Breads Bakery</a></li>
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Breakfast Dairy</a></li>
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Frozen Foods</a></li>
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Fruits Vegetables</a></li>
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Grocery Staples</a></li>
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Household Needs</a></li>
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Meats Seafood</a></li>
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Eggs Substitutes</a></li>
                                            <li className="list-group-item border-0 p-0 lh-30"><a href="/g-5" className="font-xssss text-grey-600 fw-500">Honey Vegetables</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="row">
                                    {discountProduct.map((value , index) => (
                                        <div key={index} className="col-lg-4 col-md-4 col-xs-6 p-4 border-start border-bottom rounded-0 posr">
                                            {/* <a href="/g-5" className="wishlist-btn posa right-0 top-0 mt-3 me-3"><i className="feather-heart font-md text-grey-500"></i></a> */}
                                            <div className="clearfix"></div>
                                            <a href="/g-5" className="d-block text-center"><img src={`assets/images/${value.imageUrl}`} alt="product" className="w-100 mt-3 mb-3 d-inline-block p-2 pt-0" /></a>
                                            <div className="star d-inline text-left">
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star.png" alt="star" className="w-10 me-1 float-start" />
                                                <img src="assets/images/star-disable.png" alt="star" className="w-10 me-1 float-start" />
                                            </div>
                                            <div className="clearfix"></div>
                                            <h2 className="mt-2"><a href="/single-product" className="text-grey-700 fw-600 font-xsss lh-22 d-block ls-0">{value.title}</a></h2>
                                            <h6 className="font-xss ls-3 fw-700 text-current d-flex"><span className="font-xsssss text-grey-500">$</span>{value.price} <span className="ms-auto text-grey-500 fw-500 mt-1 font-xsssss">{value.weight}</span></h6>
                                            <div className="cart-count d-flex mt-4">
                                                <div className="number">
                                                    <span className="minus">-</span>
                                                    <input type="text" className="open-font" defaultValue="1" />
                                                    <span className="plus">+</span>
                                                </div>
                                            </div>
                                        </div>  
                                    ))}
                                    </div>
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

export default Homefive;