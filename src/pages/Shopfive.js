import React, { Component , Fragment } from "react";



import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheader from '../components/Lowerheader';
import Footer from '../components/Footer';
import Blog from '../components/Blog';
import Productfilterh from '../components/Productfilterh';
import Productlisting from '../components/Productlisting';



class Shopfive extends Component {
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
                            <div className="col-lg-12 pt-0 pb-4">
                                <Productfilterh divClass="card side-wrap border-0 p-lg-5 p-4 bg-lightgrey"  gird="col-lg-3 mb-3 mb-lg-0" />
                            </div>

                            
                            <div className="col-lg-12">
                                <div className="row m-0">
                                    <div className="card d-flex flex-row justify-content-start p-3 bg-greylight border-0 mb-3">
                                        <a href="/" className="mt-1"><span className="feather-grid text-grey-600 font-xs"></span></a>
                                        <select className="form-select ms-auto float-end" aria-label="Default select example">
                                            <option>Sort by latest</option>
                                            <option defaultValue="1">Sort by popularity</option>
                                            <option defaultValue="2">Sort by price : low to high</option>
                                            <option defaultValue="3">Sort by price : high to low</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <Productlisting divClass="col-lg-3 col-md-4 col-xs-6 p-4 border-end border-bottom rounded-0 posr" />
                                

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

export default Shopfive;