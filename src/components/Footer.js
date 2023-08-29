import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            
            <div className="footer">

                <div className="upper-footer">
                    <div className="container pt-5 pb-4">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 xs-mb-4 md-mb-3 text-start">
                                <i className="ti-shopping-cart text-grey-900 display1-size float-start me-3"></i>
                                <h4 className="mt-0 fw-600 text-grey-900 font-xsss mb-0 ls-0">100% Secure Payments</h4>
                                <p className="font-xsssss fw-500 text-grey-500 lh-26 mt-0 mb-0">100% Payment Protection.</p>
                            </div>                 
                            
                            <div className="col-lg-3 col-md-6 xs-mb-4 md-mb-3 text-start">
                                <i className="ti-headphone-alt text-grey-900 display1-size float-start me-3"></i>
                                <h4 className="mt-0 fw-600 text-grey-900 font-xsss mb-0 ls-0">Support</h4>
                                <p className="font-xsssss fw-500 text-grey-500 lh-26 mt-0 mb-0">Alway online feedback 24/7</p>
                            </div>                 
                            <div className="col-lg-3 col-md-6 md-mb-3 text-start">
                                <i className="ti-lock text-grey-900 display1-size float-start me-3"></i>
                                <h4 className="mt-0 fw-600 text-grey-900 font-xsss mb-0 ls-0">Trust pay</h4>
                                <p className="font-xsssss fw-500 text-grey-500 lh-26 mt-0 mb-0">Easy Return Policy.</p>
                            </div> 
                            <div className="col-lg-3 col-md-6 text-start">
                                <i className="ti-reload text-grey-900 display1-size float-start me-3"></i>
                                <h4 className="mt-0 fw-600 text-grey-900 font-xsss mb-0 ls-0">Return and Refund</h4>
                                <p className="font-xsssss fw-500 text-grey-500 lh-26 mt-0 mb-0">100% money back guarantee</p>
                            </div>   
                        </div>
                    </div>
                </div>

                <div className="upper-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12"><hr /></div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 pt-5 mt-5"></div>
                            <div className="col-md-3 col-xs-6 sm-mb-3">
                                <h3>FRUIT  VEGETABLES</h3>
                                <ul className="menu">
                                    <li><Link to="/">Fresh Vegetables</Link></li>
                                    <li><Link to="/">Herbs  Seasonings</Link></li>
                                    <li><Link to="/">Fresh Fruits</Link></li>
                                    {/* <li><Link to="/">Cuts  Sprouts</Link></li>
                                    <li><Link to="/">Exotic Fruits  Veggies</Link></li>
                                    <li><Link to="/">Packaged Produce</Link></li>
                                    <li><Link to="/">Party Trays</Link></li> */}
                                </ul>
                            </div>
                            <div className="col-md-3 col-xs-6 sm-mb-3">
                                <h3>BREAKFAST  DAIRY</h3>
                                <ul className="menu">
                                    <li><Link to="/">Fresh Vegetables</Link></li>
                                    <li><Link to="/">Herbs  Seasonings</Link></li>
                                    <li><Link to="/">Fresh Fruits</Link></li>
                                    {/* <li><Link to="/">Cuts  Sprouts</Link></li>
                                    <li><Link to="/">Exotic Fruits  Veggies</Link></li>
                                    <li><Link to="/">Packaged Produce</Link></li>
                                    <li><Link to="/">Party Trays</Link></li> */}
                                </ul>
                            </div>
                            
                            <div className="col-md-3 col-xs-6 sm-mb-3">
                                <h3>BEVERAGES</h3>
                                <ul className="menu">
                                    <li><Link to="/">Packaged Produce</Link></li>
                                    <li><Link to="/">Party Trays</Link></li>
                                    <li><Link to="/">Fresh Vegetables</Link></li>
                                    {/* <li><Link to="/">Herbs  Seasonings</Link></li>
                                    <li><Link to="/">Fresh Fruits</Link></li>
                                    <li><Link to="/">Cuts  Sprouts</Link></li>
                                    <li><Link to="/">Exotic Fruits  Veggies</Link></li>
                                    <li><Link to="/">Packaged Produce</Link></li>
                                    <li><Link to="/">Party Trays</Link></li> */}
                                </ul>
                            </div>
                            <div className="col-md-3 col-xs-6 sm-mb-3">
                                <h3>FRUIT  VEGETABLES</h3>
                                <ul className="menu">
                                    <li><Link to="/">Fresh Vegetables</Link></li>
                                    <li><Link to="/">Herbs  Seasonings</Link></li>
                                    <li><Link to="/">Fresh Fruits</Link></li>
                                    {/* <li><Link to="/">Cuts  Sprouts</Link></li>
                                    <li><Link to="/">Exotic Fruits  Veggies</Link></li>
                                    <li><Link to="/">Packaged Produce</Link></li>
                                    <li><Link to="/">Party Trays</Link></li> */}
                                </ul>
                            </div>
                            <div className="col-lg-12 pt-5 mt-5"></div>
                        </div>
                    </div>
                </div>

                <div className="lower-footer bg-white pt-5 pb-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 text-center text-sm-start xs-mb-3"><Link to="/"><img src="assets/images/logo1.png" alt="logo" className="w-125" /></Link></div>
                            <div className="col-md-8 text-center text-sm-end xs-mb-3">
                                <Link to="/" className="d-none d-md-inline-block d-lg-inline-block me-2"><img src="assets/images/google-play.png" alt="play" /></Link>
                                <Link to="/" className="d-none d-md-inline-block d-lg-inline-block me-2"><img src="assets/images/app-store.png" alt="play" /></Link>
                                <Link to="/" className="btn-round btn-round-md z-index-1 me-1 bg-facebook"><i className="ti-facebook text-white"></i></Link>
                                <Link to="/" className="btn-round btn-round-md z-index-1 me-1 bg-twiiter"><i className="ti-twitter-alt text-white"></i></Link>
                                <Link to="/" className="btn-round btn-round-md z-index-1 me-1 bg-linkedin"><i className="ti-linkedin text-white"></i></Link>
                                <Link to="/" className="btn-round btn-round-md z-index-1 bg-instagram"><i className="ti-instagram text-white"></i></Link>
                            </div>
                            <div className="col-md-8 text-center d-none d-xs-block ">
                                {/* <Link to="/" className="me-2"><img src="https://via.placeholder.com/116x38.png" alt="play" /></Link>
                                <Link to="/" className="me-2"><img src="https://via.placeholder.com/116x38.png" alt="play" /></Link> */}
                            </div>
                            <div className="col-lg-12"><div className="border-bottom-light mt-5"></div></div>
                        </div>
                    </div>
                </div>


                <div className="lower-footer bg-white pb-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-sm-start xs-mb-3"><p className="text-grey-500 fw-500 font-xssss mb-0">@ Copyright 2021 All rights reserved.</p></div>
                            {/* <div className="col-md-6 text-center text-sm-end"><img src="https://via.placeholder.com/320x28.png" alt="payment" /></div> */}
                        </div>
                    </div>
                </div>


            </div>        
        );
    }
}

export default Footer;