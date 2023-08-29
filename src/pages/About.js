import React, { Component , Fragment } from "react";

import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheader from '../components/Lowerheader';
import Footer from '../components/Footer';
import Pagetitle from '../components/Pagetitle';
import { Accordion } from 'react-bootstrap';
import Testimonial from '../components/Testimonial';


class About extends Component {
    render() {
        return (
            <Fragment> 
                <Headermob />
                <Upperheader />
                <Header />
                <Lowerheader />

                <Pagetitle title="About" />

                <div className="blog-wrapper pt-lg-5 pb-lg-5 py-4 my-lg-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2 className="fw-700 text-grey-800 display1-size display1-sm-size lh-3 mb-3 pe-lg-5">We provide <span className="text-current">advanced solutions</span> to grow in your online business</h2>
                                <p className="text-grey-500 font-xssss fw-500 lh-26 pe-lg-5 me-lg-5"> believe everyone deserves to have a website or online store. Innovation and simplicity makes us happy: our goal is to remove any technical or financial barriers that can prevent business owners from making their own website.</p>
                                <p className="text-grey-500 font-xssss fw-500 lh-26 pe-lg-5 me-lg-5">We believe everyone deserves to have a website or online store. Innovation and simplicity makes us happy: our goal is to remove any technical or financial barriers that can prevent business.</p>
                            </div>
                            <div className="col-lg-6">
                                <img src="https://via.placeholder.com/520x350.png" alt="about" className="w-100 rounded-6" />
                            </div>
                            <div className="col-lg-3 text-center mt-lg-5 mt-4">
                                <i className="btn-round-md rounded-10 feather-heart border text-current font-md"></i>
                                <h2 className="display2-size fw-700 text-grey-900 mt-2">750k</h2>
                                <h6 className="text-grey-500 fw-500 font-xssss lh-18">Web pages created <br />by users</h6>
                            </div>
                            <div className="col-lg-3 text-center mt-lg-5 mt-4">
                                <i className="btn-round-md rounded-10 feather-home border text-current font-md"></i>
                                <h2 className="display2-size fw-700 text-grey-900 mt-2">14.5M</h2>
                                <h6 className="text-grey-500 fw-500 font-xssss lh-18">In house grocery <br />templates</h6>
                            </div>
                            <div className="col-lg-3 text-center mt-lg-5 mt-4">
                                <i className="btn-round-md rounded-10 feather-aperture border text-current font-md"></i>
                                <h2 className="display2-size fw-700 text-grey-900 mt-2">900K</h2>
                                <h6 className="text-grey-500 fw-500 font-xssss lh-18">Web pages created <br />by users</h6>
                            </div>
                            <div className="col-lg-3 text-center mt-lg-5 mt-4">
                                <i className="btn-round-md rounded-10 feather-box border text-current font-md"></i>
                                <h2 className="display2-size fw-700 text-grey-900 mt-2">4.7 <span className="font-sm">/ 5</span></h2>
                                <h6 className="text-grey-500 fw-500 font-xssss lh-18">Web pages created <br />by users</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="how-wrapper bg-lightgrey pt-lg-5 pb-lg-5 py-4 ">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-center">
                                <h2 className="fw-700 text-grey-900 font-xxl lh-3 pe-lg-5">Customer Feedback</h2>
                                <p className="text-grey-500 font-xssss fw-500 lh-26">We believe everyone deserves to have a website or online. Innovation and simplicity makes us happy: our goal is to remove.</p>
                            </div>

                        </div>
                        <div className="row justify-content-center mt-lg-4 mt-3 mb-3">
                        <Testimonial />
                        </div>
                        
                    </div>
                </div>

                <div className="how-wrapper pt-lg-5 pb-lg-5 py-4 ">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="fw-700 text-grey-900 font-xxl lh-3 pe-lg-5">Frequently Asked Questions</h2>
                            </div>
                            <div className="col-lg-6 text-center">
                                <p className="text-grey-500 font-xssss fw-500 lh-26">We believe everyone deserves to have a website or online. Innovation and simplicity makes us happy: our goal is to remove.</p>
                            </div>
                        </div>
                        <div className="row mt-lg-5">
                            <div className="col-lg-6 text-center">
                                <Accordion defaultActiveKey="0" className="accordian">
                                    <Accordion.Item eventKey="0" className="accordion-item border-0 mb-3 shadow-xss rounded-6">
                                    <Accordion.Header>How do I make a yearly payment?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>   Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services. </p>
                                    </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1" className="accordion-item border-0 mb-3 shadow-xss rounded-6">
                                    <Accordion.Header>How this technology works?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>   Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services. </p>
                                    </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3" className="accordion-item border-0 mb-3 shadow-xss rounded-6">
                                    <Accordion.Header>What is the comunity benefit? </Accordion.Header>
                                    <Accordion.Body>
                                        <p>   Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services. </p>
                                    </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4" className="accordion-item border-0 mb-3 shadow-xss rounded-6">
                                    <Accordion.Header>Technical or account support</Accordion.Header>
                                    <Accordion.Body>
                                        <p>   Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services. </p>
                                    </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <div className="col-lg-6 text-center">
                                <Accordion defaultActiveKey="5" className="accordian">
                                    <Accordion.Item eventKey="5" className="accordion-item border-0 mb-3 shadow-xss rounded-6">
                                    <Accordion.Header>Focus critical developer resources</Accordion.Header>
                                    <Accordion.Body>
                                        <p>   Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services. </p>
                                    </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6" className="accordion-item border-0 mb-3 shadow-xss rounded-6">
                                    <Accordion.Header>Improve conversion from international</Accordion.Header>
                                    <Accordion.Body>
                                        <p>   Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services. </p>
                                    </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="7" className="accordion-item border-0 mb-3 shadow-xss rounded-6">
                                    <Accordion.Header>Eget nunc scelerisque viverra mauris</Accordion.Header>
                                    <Accordion.Body>
                                        <p>   Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services. </p>
                                    </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="8" className="accordion-item border-0 mb-3 shadow-xss rounded-6">
                                    <Accordion.Header>How do I make a yearly payment?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>   Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services. </p>
                                    </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </Fragment>
        );
    }
}

export default About;