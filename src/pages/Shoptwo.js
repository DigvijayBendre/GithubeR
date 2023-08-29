import React, { Component , Fragment } from "react";



import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheader from '../components/Lowerheader';
import Footer from '../components/Footer';
import Blog from '../components/Blog';
import Productlisting from '../components/Productlisting';



class Shoptwo extends Component {
    render() {
        return (
            <Fragment> 
                <Headermob />
                <Upperheader />
                <Header />
                <Lowerheader/ >

                <div className="listing-wrapper pt-3 pb-3 md-mt-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card d-flex flex-wrap flex-row w-100 p-lg-5 p-4 border-0 bg-image-cover bg-image-center mb-3" style={{backgroundImage: `url("assets/images/slider-12.jpg")`}} >
                                    <div className="col-lg-5 col-md-12">
                                        <h2 className="fw-700 display1-size display1-sm-size ls-0 text-grey-900 mb-0">Choose the best <span className="text-current">healthier way</span> of life</h2>
                                        <span className="text-grey-700 fw-500 font-xssss mt-1 d-block">All Natural Italian-Style Chicken Meatballs</span>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="col-lg-12">
                                <div className="row m-0">
                                    <div className="card d-flex flex-row justify-content-start p-3 bg-greylight border-0 mb-3">
                                        <a href="/" className="mt-1"><span className="feather-grid text-grey-600 font-xs"></span></a>
                                        <select className="form-select ms-auto float-end" aria-label="Default select example">
                                            <option >Sort by latest</option>
                                            <option defaultValue="1">Sort by popularity</option>
                                            <option defaultValue="2">Sort by price : low to high</option>
                                            <option defaultValue="3">Sort by price : high to low</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <Productlisting divClass="col-lg-4 col-md-4 col-xs-6 p-4 border-end border-bottom rounded-0 posr" />
                                

                                <div className="row">
                                    <div className="col-lg-12 mt-5 mb-4">
                                        <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item disabled"><a className="page-link" href="/"><i className="feather-chevron-left"></i></a></li>
                                            <li className="page-item active"><a className="page-link" href="/">1</a></li>
                                            <li className="page-item"><a className="page-link" href="/">2</a></li>
                                            <li className="page-item"><a className="page-link" href="/">3</a></li>
                                            <li className="page-item"><a className="page-link" href="/">4</a></li>
                                            <li className="page-item"><a className="page-link" href="/"><i className="feather-chevron-right"></i></a></li>
                                        </ul>
                                        </nav>
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

export default Shoptwo;