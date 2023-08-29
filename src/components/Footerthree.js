import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Footerthree extends Component {
    render() {
        const {divClass} = this.props;
        return (
            
            <div className={`footer ${divClass}`}>

                <div className={`upper-footer ${divClass}`}>
                    <div className="container pt-5 pb-4">
                        <div className="row">
                            <div className="col-lg-5 mb-3 text-center text-sm-start text-start">
                                <h4 className="fw-700 font-sm text-uppercase ls-0 mb-0 mt-2  lh-24">ribe to our newsletter </h4>
                                <span className="font-xsssss fw-500 text-grey-500">and receive $20 coupon for first shopping</span>
                            </div>                 
                            <div className="col-lg-7 mb-3 text-start">
                                <form className="w-100 float-left rounded-lg overflow-hidden">
                                    <input type="text" className="border-1 bg-white form-control w-xs-100 mb-xs-2 w-75 rounded-0 h60 float-left" placeholder="Enter your email address.." />
                                    <button className="border-0 bg-current text-white h60 form-control p-0 w-xs-100  rounded-0 float-end d-block w-25 font-xsssss fw-700 ls-3  text-uppercase">Submit</button>
                                </form>
                            </div>                 
                            
                        </div>
                    </div>
                </div>

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

                <div className="lower-footer bg-black pb-2 pt-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-sm-start xs-mb-3"><p className="text-grey-500 fw-500 font-xssss mb-0">@ Copyright 2021 All rights reserved.</p></div>
                            <div className="col-md-6 text-center text-sm-end">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><a href="/"><i className="ti-facebook text-white"></i></a></li>
                                    <li className="list-inline-item"><a href="/"><i className="ti-twitter-alt text-white"></i></a></li>
                                    <li className="list-inline-item"><a href="/"><i className="ti-instagram text-white"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </div>        
        );
    }
}

export default Footerthree;