import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Footertwo extends Component {
    render() {
        const {divClass} = this.props;
        return (
            
            <div className={`footer ${divClass}`}>

                {/* <div className={`upper-footer ${divClass}`}>
                    <div className="container pt-5 pb-4">
                        <div className="row">
                            <div className="col-lg-5 mb-3 text-center text-sm-start text-start">
                                <h4 className="fw-700 font-sm text-uppercase ls-0 mb-0 mt-2  lh-24">Subscribe to our newsletter </h4>
                        <span className="font-xsssss fw-500 text-grey-500">and receive ₹20 coupon for first shopping</span>
                            </div>                 
                            <div className="col-lg-7 mb-3 text-start">
                                <form className="w-100 float-left rounded-lg overflow-hidden">
                                    <input type="text" className="border-1 bg-white form-control w-xs-100 mb-xs-2 w-75 rounded-0 h60 float-left" placeholder="Enter your email address.." />
                                    <button className="border-0 bg-current text-white h60 form-control p-0 w-xs-100  rounded-0 float-end d-block w-25 font-xsssss fw-700 ls-3  text-uppercase">Submit</button>
                                </form>
                            </div>                 
                            
                        </div>
                    </div>
                </div> */}

                <div className={`upper-footer ${divClass}`}>
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
                            {/* <div className="col-md-6 text-center text-sm-end"><img src="https://via.placeholder.com/116x28.png" alt="payment" /></div> */}
                        </div>
                    </div>
                </div>


            </div>        
        );
    }
}

export default Footertwo;