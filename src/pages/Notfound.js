import React, { Component , Fragment } from "react";

import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheader from '../components/Lowerheader';
import Footer from '../components/Footer';



class Notfound extends Component {
    render() {
        return (
            <Fragment> 
                <Headermob />
                <Upperheader />
                <Header />
                <Lowerheader />

                <div className="blog-wrapper pt-5 pb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-center pt-lg-5 pb-lg-5">
                                <img src="https://via.placeholder.com/225x225.png" alt="banner" className="mb-3" />
                                <h1 className="fw-700 text-grey-900 display3-size display4-md-size">Oops! It looks like you're lost.</h1>
                                <p className="text-grey-500 font-xsss ps-lg-5 pe-lg-5">The page you're looking for isn't available. Try to search again or use the go to.</p>
                                <a href="/" className="p-3 w-175 bg-current text-white d-inline-block text-center fw-600 font-xssss rounded-25 text-uppercase ls-3">Home Page</a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />

            </Fragment>
        );
    }
}

export default Notfound;