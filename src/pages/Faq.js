import React, { Component , Fragment } from "react";

import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheader from '../components/Lowerheader';
import Footer from '../components/Footer';
import Pagetitle from '../components/Pagetitle';
import { Accordion } from 'react-bootstrap';



class Faq extends Component {
    render() {
        return (
            <Fragment> 
                <Headermob />
                <Upperheader divClass="bg-lightgrey" />
                <Header />
                <Lowerheader />

                <Pagetitle title="Frequently Asked Questions" />

                <div className="blog-wrapper pt-5 pb-5">
                    <div className="container">
                        <div className="row ">
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

export default Faq;