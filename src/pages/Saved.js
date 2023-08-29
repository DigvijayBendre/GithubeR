import React, { Component , Fragment } from "react";

import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheader from '../components/Lowerheader';
import Footer from '../components/Footer';
import Pagetitle from '../components/Pagetitle';

const dealProduct = [
    { imageUrl: 'veg.png', title: 'Blue Diamond Almonds ', price: '39'},
    { imageUrl: 'veg.png', title: 'Natures Own Wheat ', price: '40'},
    { imageUrl: 'veg.png', title: 'Tailgater Ham  Organic ', price: '40'},
    { imageUrl: 'veg.png', title: 'Kobita Almonds Salted ', price: '40'},
]

class Saved extends Component {
    render() {
        return (
            <Fragment> 
                <Headermob />
                <Upperheader divclassName="bg-lightgrey" />
                <Header />
                <Lowerheader />

                <Pagetitle title="Saved" />

                <div className="content-wrap pt-lg-5 pb-lg-5 py-4 my-lg-3">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="card border-0">
                                    <div className="table-content table-responsive mb-2">
                                        <table className="table text-center mb-0">
                                            <thead className="bg-greylight rounded-10 ovh">
                                                <tr>
                                                    <th className="border-0 p-3">&nbsp;</th>
                                                    <th className="border-0 p-3">&nbsp;</th>
                                                    <th className="border-0 p-3 fw-600 font-xsss mb-2 white-text">Name</th>
                                                    <th className="border-0 p-3 fw-600 font-xsss mb-2 white-text">Price</th>
                                                    <th className="border-0 p-3 fw-600 font-xsss mb-2 white-text">Quantity</th>
                                                    <th className="border-0 p-3 fw-600 font-xsss mb-2 white-text">&nbsp;</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {dealProduct.map((value , index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <div className="form-check mt-1">
                                                                <input className="form-check-input" type="checkbox" value="option1" />
                                                                <label className="text-grey-500 font-xssss"></label>
                                                            </div>
                                                        </td>
                                                        <td className="product-thumbnail text-start ps-0">
                                                            <img src={`assets/images/${value.imageUrl}`} alt="product" className="w-80 d-inline-block pt-3 pb-3 bg-greylight rounded-6" />
                                                        </td>
                                                        
                                                        <td className="product-p">
                                                            <h6 className="text-grey-600 fw-600 font-xsss lh-22 d-block ls-0 mb-2">{value.title}</h6>
                                                        </td>
                                                        <td className="product-total-price">
                                                            <h6 className="font-xs ls-3 fw-700 text-current float-start mt-1"><span className="font-xsssss text-grey-500">₹</span> {value.price} </h6>
                                                        </td>
                                                        <td className="product-remove text-right">
                                                            <div className="cart-count float-end ">
                                                                <div className="number">
                                                                    <span className="minus">-</span>
                                                                    <input type="text" className="open-font me-1 ms-1" defaultValue="1" />
                                                                    <span className="plus">+</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="product-remove text-right">
                                                            <a href="/Cart" className="d-none d-xl-block text-uppercase font-xsssss text-white fw-700 ls-1 bg-danger float-end w-125 lh-24 ms-2 rounded-6 btn">Remove</a>
                                                            <a href="/Cart" className="d-none d-xl-block text-uppercase font-xsssss text-white fw-700 ls-1 bg-current float-end w-125 lh-24 rounded-6 btn">Add to cart</a>
                                                            <a href="/Cart" className="d-xl-none text-uppercase font-xs text-white fw-700 ls-1 float-end rounded-6 ms-2"><i className="feather-shopping-bag text-grey-500"></i></a>
                                                            <a href="/Cart" className="d-xl-none text-uppercase font-xs text-white fw-700 ls-1 float-end rounded-6 ms-2"><i className="feather-trash text-grey-500"></i></a>
                                                        </td>
                                                    </tr>
                                                ))}
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    <a href="/Cart" className="w-200 ms-auto bg-greylight text-grey-600 rounded-6 text-center btn fw-700 ls-3 font-xssss p-3 text-uppercase">Cart</a>                            
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

export default Saved;