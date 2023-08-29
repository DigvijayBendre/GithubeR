import React, { Component , Fragment } from "react";

import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheader from '../components/Lowerheader';
import Footer from '../components/Footer';
import Dashnav from '../components/Dashnav';
import Dashmenu from '../components/Dashmenu';




class Coupon extends Component {
    render() {
        return (
            <Fragment>
                <Headermob />
                <Upperheader />
                <Header />
                <Lowerheader />
                <Dashnav title="Coupon" />

                <div className="main-div pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <Dashmenu />
                            </div>
                            <div className="col-lg-8 pt-5 ps-4">
                                <ul className="list-inline ">
                                    <li className="list-inline-item mb-2">
                                        <div className="card mb-1 border-0 w-200 h-125 pt-2 alert-warning rounded-6 ovh ps-5 posr">
                                            <span className="w-125 p-2 text-center ls-10 posa bg-warning w-30 rotate-90 text-uppercase font-xsssss fw-500 text-white" >CASHBACK</span>
                                            <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="logo" className="w-35 mt-0" />
                                            <h4 className="fw-700 text-grey-700 font-xsssss mt-2 ms-1 ls-10">MASTER CARD </h4>
                                            <div className="card-body p-1 mt-1">
                                                <h5 className="fw-500 font-xsssss text-grey-500">Date <span className="d-block fw-700 font-xsssss mt-1 text-grey-900">22 Dec 2022</span></h5>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="list-inline-item mb-2">
                                        <div className="card mb-1 border-0 w-200 h-125 pt-2 alert-info rounded-6 ovh ps-5 posr">
                                            <span className="w-125 p-2 text-center ls-10 posa bg-info w-30 rotate-90 text-uppercase font-xsssss fw-500 text-white" >REWARD</span>
                                            <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="logo" className="w-35 mt-0" />
                                            <h4 className="fw-700 text-grey-700 font-xsssss mt-2 ms-1 ls-10">PAYPAL</h4>
                                            <div className="card-body p-1 mt-1">
                                                <h5 className="fw-500 font-xsssss text-grey-500">Date <span className="d-block fw-700 font-xsssss mt-1 text-grey-900">22 Dec 2022</span></h5>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="list-inline-item mb-2">
                                        <div className="card mb-1 border-0 w-200 h-125 pt-2 alert-primary rounded-6 ovh ps-5 posr">
                                            <span className="w-125 p-2 text-center ls-10 posa bg-primary w-30 rotate-90 text-uppercase font-xsssss fw-500 text-white" >CASHBACK</span>
                                            <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="logo" className="w-35 mt-0" />
                                            <h4 className="fw-700 text-grey-700 font-xsssss mt-2 ms-1 ls-10">VISA CARD </h4>
                                            <div className="card-body p-1 mt-1">
                                                <h5 className="fw-500 font-xsssss text-grey-500">Date <span className="d-block fw-700 font-xsssss mt-1 text-grey-900">22 Dec 2022</span></h5>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="list-inline-item mb-2">
                                        <div className="card mb-1 border-0 w-200 h-125 pt-2 alert-success rounded-6 ovh ps-5 posr">
                                            <span className="w-125 p-2 text-center ls-10 posa bg-success w-30 rotate-90 text-uppercase font-xsssss fw-500 text-white" >CASHBACK</span>
                                            <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="logo" className="w-35 mt-0" />
                                            <h4 className="fw-700 text-grey-700 font-xsssss mt-2 ms-1 ls-10">PAYONEER </h4>
                                            <div className="card-body p-1 mt-1">
                                                <h5 className="fw-500 font-xsssss text-grey-500">Date <span className="d-block fw-700 font-xsssss mt-1 text-grey-900">22 Dec 2022</span></h5>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>            
        );
    }
}

export default Coupon;