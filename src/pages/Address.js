import React, { Component , Fragment } from "react";

import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheader from '../components/Lowerheader';
import Footer from '../components/Footer';
import Dashnav from '../components/Dashnav';
import Dashmenu from '../components/Dashmenu';




class Address extends Component {
    render() {
        return (
            <Fragment>
                <Headermob />
                <Upperheader />
                <Header />
                <Lowerheader />
                <Dashnav title="Saved Address" />

                <div className="main-div pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <Dashmenu />
                            </div>
                            <div className="col-lg-8 pt-5 ps-4">

                                <div className="card border-0">
                                    <div className="card-body mb-3 bg-lightblue p-4 rounded-10">
                                        <h4 className="fw-700 mt-2 font-xss text-grey-900 d-flex mb-0">Hurin Seary <span className="bg-primary text-white font-xsssss fw-600 ls-3 p-2 rounded-6 ms-auto">HOME</span></h4>
                                        <h6 className="fw-500 font-xssss text-grey-600 lh-22 mb-0">Manikpur, Thakurpara PO Ital Gacha 2 no Airport Gate <br /> Thakur Para United Club, Kolkata <br /> West Bengal - 700079</h6>
                                    </div>
                                    <div className="card-body mb-3 bg-lightgreen p-4 rounded-10">
                                        <h4 className="fw-700 mt-2 font-xss text-grey-900 d-flex mb-0">Surfiya Zakir <span className="bg-success text-white font-xsssss fw-600 ls-3 p-2 rounded-6 ms-auto">OFFICE</span></h4>
                                        <h6 className="fw-500 font-xssss text-grey-600 lh-22 mb-0">Manikpur, Thakurpara PO Ital Gacha 2 no Airport Gate <br /> Thakur Para United Club, Kolkata <br /> West Bengal - 700079</h6>
                                    </div>

                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-6 mb-3">
                                                <div className="form-group">
                                                    <label className="mont-font fw-600 font-xssss mb-2 white-text">First Name</label>
                                                    <input type="text" className="form-control theme-black-bg rounded-10" />
                                                </div>        
                                            </div>

                                            <div className="col-lg-6 mb-3">
                                                <div className="form-group">
                                                    <label className="mont-font fw-600 font-xssss mb-2 white-text">Last Name</label>
                                                    <input type="text" className="form-control theme-black-bg rounded-10" />
                                                </div>        
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 mb-3">
                                                <div className="form-group">
                                                    <label className="mont-font fw-600 font-xssss mb-2 white-text">Email</label>
                                                    <input type="text" className="form-control theme-black-bg rounded-10" />
                                                </div>        
                                            </div>

                                            <div className="col-lg-6 mb-3">
                                                <div className="form-group">
                                                    <label className="mont-font fw-600 font-xssss mb-2 white-text">Phone</label>
                                                    <input type="text" className="form-control theme-black-bg rounded-10" />
                                                </div>        
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-12 mb-3">
                                                <div className="form-group">
                                                    <label className="mont-font fw-600 font-xssss mb-2 white-text">Country</label>
                                                    <input type="text" className="form-control theme-black-bg rounded-10" />
                                                </div>        
                                            </div>

                                            <div className="col-lg-12 mb-3">
                                                <div className="form-group">
                                                    <label className="mont-font fw-600 font-xssss mb-2 white-text">Address</label>
                                                    <input type="text" className="form-control theme-black-bg rounded-10" />
                                                </div>        
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 mb-3">
                                                <div className="form-group">
                                                    <label className="mont-font fw-600 font-xssss mb-2 white-text">Twon / City</label>
                                                    <input type="text" className="form-control theme-black-bg rounded-10" />
                                                </div>        
                                            </div>

                                            <div className="col-lg-6 mb-3">
                                                <div className="form-group">
                                                    <label className="mont-font fw-600 font-xssss mb-2 white-text">Postcode</label>
                                                    <input type="text" className="form-control theme-black-bg rounded-10" />
                                                </div>        
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input font-xs" type="checkbox" value="Drinks" id="flexCheckStock" />
                                                    <label className="form-check-label fw-600 font-xssss text-grey-600" for="flexCheckStock">Save default shipping address</label>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <a href="/address" className="w-100 p-3 bg-current font-xsss ls-1 fw-600 text-white rounded-10 d-block text-center">Save</a>
                                            </div>
                                        </div>

                                    </form>
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

export default Address;