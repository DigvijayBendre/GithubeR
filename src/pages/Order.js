import React, { Component , Fragment } from "react";

import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheader from '../components/Lowerheader';
import Footer from '../components/Footer';
import Dashnav from '../components/Dashnav';
import Dashmenu from '../components/Dashmenu';
import Dashorder from '../components/Dashorder';




class Order extends Component {
    render() {
        return (
            <Fragment>
                <Headermob />
                <Upperheader />
                <Header />
                <Lowerheader />
                <Dashnav title="Order" />

                <div className="main-div pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <Dashmenu />
                            </div>
                            <div className="col-lg-8 pt-5 ps-4">

                                <div className="col-lg-12 ps-2 pe-2">
                                    <div className="row">
                                        
                                        <div className="col-lg-12 ps-2 pe-2">
                                            <div className="card border-0 mt-3">
                                                <Dashorder />
                                                <nav aria-label="Page navigation example">
                                                    <ul className="pagination justify-content-end mt-4">
                                                        <li className="page-item disabled">
                                                        <a className="page-link" href="/dashboard"><i className="feather-chevrons-left"></i></a>
                                                        </li>
                                                        <li className="page-item"><a className="page-link" href="/dashboard">1</a></li>
                                                        <li className="page-item active"><a className="page-link" href="/dashboard">2</a></li>
                                                        <li className="page-item"><a className="page-link" href="/dashboard">3</a></li>
                                                        <li className="page-item">
                                                        <a className="page-link" href="/dashboard"><i className="feather-chevrons-right"></i></a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>


                                    </div>
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

export default Order;