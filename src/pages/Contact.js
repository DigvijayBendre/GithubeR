import React, { Component , Fragment } from "react";

import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheader from '../components/Lowerheader';
import Footer from '../components/Footer';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    render() {
        return (
            <Fragment> 
                <Headermob />
                <Upperheader divClass="bg-lightgrey" />
                <Header />
                <Lowerheader />

                <div className="contact-wrapp pt-5 pb-5 mt-lg-3 mb-lg-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="card pt-4 bg-white border-0 mb-3">
                                    <div className="form-group mb-5">
                                        <h6 className="fw-700 text-grey-900 font-sm mb-0">Reach us</h6>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 mb-3 mb-lg-5">
                                            <h4 className="text-grey-700 fw-700 font-xss">New York</h4>
                                            <h5 className="font-xssss lh-22 fw-500 text-grey-500 mt-3">41 madison ave, floor 24 <br /> New Work,</h5>
                                            <h5 className="font-xssss lh-22 fw-500 text-grey-500 mt-3 mb-0">+4232 4234 3232</h5>
                                            <h5 className="font-xssss lh-22 fw-500 text-grey-500 mt-0">support@mail.com</h5>
                                        </div>

                                        <div className="col-lg-6">
                                            <h4 className="text-grey-700 fw-700 font-xss">Benjing</h4>
                                            <h5 className="font-xssss lh-24 fw-500 text-grey-500 mt-3">41 madison ave, floor 24 <br /> New Work,</h5>
                                            <h5 className="font-xssss lh-24 fw-500 text-grey-500 mt-3 mb-0">+4232 4234 3232</h5>
                                            <h5 className="font-xssss lh-24 fw-500 text-grey-500 mt-0">support@mail.com</h5>
                                            
                                        </div>

                                        <div className="col-lg-6 mb-3 mb-lg-5">
                                            <h4 className="text-grey-700 fw-700 font-xss">London</h4>
                                            <h5 className="font-xssss lh-22 fw-500 text-grey-500 mt-3">41 madison ave, floor 24 <br /> New Work,</h5>
                                            <h5 className="font-xssss lh-22 fw-500 text-grey-500 mt-3 mb-0">+4232 4234 3232</h5>
                                            <h5 className="font-xssss lh-22 fw-500 text-grey-500 mt-0">support@mail.com</h5>
                                        </div>

                                        <div className="col-lg-6">
                                            <h4 className="text-grey-700 fw-700 font-xss">Canada</h4>
                                            <h5 className="font-xssss lh-24 fw-500 text-grey-500 mt-3">41 madison ave, floor 24 <br /> New Work,</h5>
                                            <h5 className="font-xssss lh-24 fw-500 text-grey-500 mt-3 mb-0">+4232 4234 3232</h5>
                                            <h5 className="font-xssss lh-24 fw-500 text-grey-500 mt-0">support@mail.com</h5>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 ">
                                <div className="card p-lg-5 p-4 bg-lightgrey border-0">
                                    <div className="form-group mb-3">
                                        <h6 className="fw-700 text-grey-900 font-sm mb-0">Get in touch with us</h6>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="text" placeholder="Name" className="lh-38 p-2 ps-3 font-xssss fw-500 rounded-6 posr border border-light w-100" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="text" placeholder="Email" className="lh-38 p-2 ps-3 font-xssss fw-500 rounded-6 posr border border-light w-100" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="text" placeholder="Phone" className="lh-38 p-2 ps-3 font-xssss fw-500 rounded-6 posr border border-light w-100" />
                                    </div>
                                    <div className="form-group mb-1">
                                        <textarea className="border-light border font-xssss fw-500 text-grey-600 p-2 rounded-6 ovh w-100 ps-3 h-150">Message</textarea>
                                    </div>
                                    <a href="/contact" className="btn-lg rounded-6 font-xssss p-3 fw-600 ls-3 text-white  btn bg-current">SEND</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg overflow-hidden h-500">
                    <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                    </GoogleMapReact>
                </div>

                

                <Footer />
            </Fragment>
        );
    }
}

export default Contact;