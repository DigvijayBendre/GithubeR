import React, { Component , Fragment } from "react";

import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheader from '../components/Lowerheader';
import Footer from '../components/Footer';
import Dashnav from '../components/Dashnav';
import Dashmenu from '../components/Dashmenu';
import Dashorder from '../components/Dashorder';




class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <Headermob />
                <Upperheader />
                <Header />
                <Lowerheader />
                <Dashnav title="Dashboard" />

                <div className="main-div pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <Dashmenu />
                            </div>
                            <div className="col-lg-8 pt-5 ps-4">

                                <div className="col-lg-12 ps-2 pe-2">
                                    <div className="row">
                                        <div className="col-lg-3 ps-2 pe-2 mb-3">
                                            <div className="card border-0 pt-4 pb-4 text-center alert-warning align-items-center rounded-10">
                                                <i className="psor mt-n5 feather-hard-drive text-white btn-round-md bg-warning font-xs"></i>
                                                <h3 className="fw-700 font-xl text-grey-900 mt-2 ls-3 mb-0">3252</h3>
                                                <span className="font-xssss ls-0 text-grey-700 fw-600 mt-0">Order complete</span>
                                                <span className="mt-2 text-success font-xsssss fw-700 ls-6">+ 20% </span>
                                            </div>  
                                        </div>
                                        <div className="col-lg-3 ps-2 pe-2 mb-3">
                                            <div className="card border-0 pt-4 pb-4 text-center alert-success align-items-center rounded-10">
                                                <i className="psor mt-n5 feather-box text-white btn-round-md bg-success font-xs"></i>
                                                <h3 className="fw-700 font-xl text-grey-900 mt-2 ls-3 mb-0">43K</h3>
                                                <span className="font-xssss ls-0 text-grey-700 fw-600 mt-0">Fat burn</span>
                                                <span className="mt-2 text-warning font-xsssss fw-700 ls-6">+ 40% </span>
                                            </div>  
                                        </div>
                                        <div className="col-lg-3 ps-2 pe-2 mb-3">
                                            <div className="card border-0 pt-4 pb-4 text-center alert-info align-items-center rounded-10">
                                                <i className="psor mt-n5 feather-award text-white btn-round-md bg-info font-xs"></i>
                                                <h3 className="fw-700 font-xl text-grey-900 mt-2 ls-3 mb-0">54M</h3>
                                                <span className="font-xssss ls-0 text-grey-700 fw-600 mt-0">Calories gain</span>
                                                <span className="mt-2 text-danger font-xsssss fw-700 ls-6">+ 44% </span>
                                            </div>  
                                        </div>
                                        <div className="col-lg-3 ps-2 pe-2 mb-3">
                                            <div className="card border-0 pt-4 pb-4 text-center alert-secondary align-items-center rounded-10">
                                                <i className="psor mt-n5 feather-flag text-white btn-round-md bg-secondary font-xs"></i>
                                                <h3 className="fw-700 font-xl text-grey-900 mt-2 ls-3 mb-0">354</h3>
                                                <span className="font-xssss ls-0 text-grey-700 fw-600 mt-0">Calories gain</span>
                                                <span className="mt-2 text-danger font-xsssss fw-700 ls-6">+ 44% </span>
                                            </div>  
                                        </div>

                                        <div className="col-lg-12 ps-2 pe-2">
                                            <div className="card border-0  bg-lightblue rounded-10">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-6 p-5">
                                                        <h2 className="text-grey-900 fw-700 ls-0 font-xl lh-3 m-0">Organic  Store<br />Green Salad</h2>
                                                        <p className="text-grey-500 font-xssss mt-2 fw-500">Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt.</p>
                                                        <a href="/dashboarddashboard" className="bg-current text-white rounded-25 btn-cart w-125 d-inline-block text-center font-xsssss p-3 fw-600 ls-6">ANALYTICS</a>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 p-4"><img src="https://www.thespruceeats.com/thmb/rG5-NhsQxmhQwJ9Q8OMdJuBnYgU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/green-salad-recipe-ensalada-verde-3083556-hero-01-256ac7f4162b45e5a1f82a5234a0708c.jpg" alt="flame" className="w-100 pe-3" /></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 ps-2 pe-2">
                                            <div className="card border-0 mt-3">
                                                <Dashorder />
                                                <nav aria-label="Page navigation example">
                                                    {/* <ul className="pagination justify-content-end mt-4">
                                                        <li className="page-item disabled">
                                                        <a className="page-link" href="/dashboard"><i className="feather-chevrons-left"></i></a>
                                                        </li>
                                                        <li className="page-item"><a className="page-link" href="/dashboard">1</a></li>
                                                        <li className="page-item active"><a className="page-link" href="/dashboard">2</a></li>
                                                        <li className="page-item"><a className="page-link" href="/dashboard">3</a></li>
                                                        <li className="page-item">
                                                        <a className="page-link" href="/dashboard"><i className="feather-chevrons-right"></i></a>
                                                        </li>
                                                    </ul> */}
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

export default Dashboard;