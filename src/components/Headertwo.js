import React,{Component} from 'react';
import { Link  } from 'react-router-dom';
import { Modal , Button } from 'react-bootstrap';

const trendProduct = [
    { imageUrl: 'g-16.png', title: 'Almonds Lightly Salted ', price: '29', weight: '300 gm'},
    { imageUrl: 'g-17.png', title: 'Assorted Donuts Salted ', price: '79', weight: '5 Kg'},
    { imageUrl: 'g-18.png', title: 'Natures Own 100% Wheat ', price: '29', weight: '500 gm'},
    { imageUrl: 'g-19.png', title: 'Blue Diamond Almonds ', price: '40', weight: '400 gm'},
]

class Header extends Component {
    constructor(){
        super();
        this.state={
            location:false,
            cart:false,
        }
    }
    handleModel(){
        this.setState({location:!this.state.location})
    }
    handleCart(){
        this.setState({cart:!this.state.cart})
    }
    render() {
        
        return (
            <div className={`header-wrapper pt-4 pb-4 z-index-5 ovh d-none d-lg-block bg-green`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 d-flex">
                            <Link to="/"><img src="assets/images/logo1.png" alt="logo" className="logo" /></Link>
                            <div className="header-search ms-auto me-2 d-flex">
                                <Button onClick={()=>{this.handleModel()}}  className="location me-3 bg-transparent border-0">
                                    <span className="fw-600 font-xssss text-grey-100">Delivery to</span>
                                    <i className="feather-map-pin text-white"></i>
                                    <h4 className="fw-600 font-xssss mt-0 text-white mb-0 ls-0">Downtown ..</h4>
                                </Button>
                                <Modal {...this.props} size="sm" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.location}>
                                    <Button onClick={()=>{this.handleModel()}} className="btn-close z-index-5 posa right-0 top-0 mt-3 me-3 font-xss"></Button>
                                    <Modal.Body className="text-center pt-4">
                                        <i className="feather-map-pin bg-greylight text-grey-900 btn-round-xxxl font-xl text-center rounded-6"></i>
                                        <h2 className="font-xss fw-700 text-grey-700 mt-4">Select your location</h2>
                                        <p className="text-grey-500 font-xsssss mt-1">Implementation of technologies to store <br /> unchange data based on specific</p>
                                        <div className="inner-addon left-addon">
                                            <input type="text" className="form-control ps-5 font-xssss border-sizelg rounded-6 bg-color-none fw-600 border text-grey-500" defaultValue="675 Camac Street Down" />
                                            <i className="ti-location-arrow text-current ps-3 font-xss posa left-15 mt-3"></i>
                                        </div>
                                        <Button className="border-0 btn rounded-6 w-100 lh-2 d-block p-3 mt-0 mb-2 text-white bg-current font-xssss text-uppercase fw-600 ls-3">Current Location </Button>
                                    </Modal.Body>
                                </Modal>
                                <div className="form-group mb-0 icon-input d-none d-xl-block me-2">
                                    <i className="feather-search font-sm text-grey-400"></i>
                                    <input type="text" placeholder="Start typing to search.." className="lh-38 pt-2 pb-2 ps-5 pe-3 font-xssss fw-500 rounded-xl posr" />
                                </div>
                                
                                {/* <a href="/Notification" className="nav-icon"><span className="dot-count bg-warning"></span><i className="feather-bell text-grey-500"></i></a> */}
                                {/* <a href="/Saved" className="nav-icon"><i className="feather-heart text-grey-500"></i></a> */}
                                <Button onClick={()=>{this.handleCart()}} className="nav-icon bg-transparent border-0 mt-n1 posr" ><i className="feather-shopping-bag text-grey-500"></i></Button>
                                <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter" centered show={this.state.cart} className="right">
                                    <Button onClick={()=>{this.handleCart()}} className="btn-close z-index-5 posa right-0 top-0 mt-3 me-3 font-xss"></Button>
                                    <Modal.Body className="text-center pt-3 m-0 pb-3">
                                        <div className="card w-100 p-2 pb-0 border-0 text-start">
                                            <h4 className="fw-700 font-lg text-grey-900 text-start mb-4 mt-n2 d-block"> Cart</h4>
                                            {trendProduct.map((value , index) => (
                                                <div key={index} className="row mb-3">
                                                    <div className="col-md-5 col-xs-5"><a href="/" className="d-block text-center"><img src={`assets/images/${value.imageUrl}`} alt="product" className="w-100 d-inline-block pt-3 pb-3 bg-greylight rounded-6" /></a></div>
                                                    <div className="col-md-7 col-xs-7 ps-0">
                                                        <span className="ms-auto text-grey-500 fw-500 lh-1 font-xsssss mt-0 w-100 mb-2">{value.weight}</span>
                                                        <a href="/" className="text-grey-900 fw-600 font-xsss lh-22 d-block ls-0 mb-2 pe-lg-4">{value.title}</a>
                                                        <h6 className="font-xs ls-3 fw-700 text-current float-start mt-1"><span className="font-xsssss text-grey-500">Rs.</span>{value.price} </h6>
                                                        <div className="cart-count float-end ">
                                                            <div className="number">
                                                                <span className="minus">-</span>
                                                                <input type="text" className="open-font ms-1 me-1" defaultValue="1" />
                                                                <span className="plus">+</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            
                                        </div>
                                        <div className="card w-100 p-3 pt-4 border-0 text-start mt-auto">
                                                
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <h4 className="text-grey-900 font-xssss fw-600 mb-2 d-flex">Subtotal <span className="ms-auto text-grey-500">₹ 59.99</span></h4>
                                                    <h4 className="text-grey-900 font-xssss fw-600 mb-3 d-flex">Tax <span className="ms-auto text-grey-500">₹ 0.99</span></h4>
                                                    <h4 className="text-grey-900 font-xss fw-600 mb-3 d-flex">Total <span className="ms-auto">₹ 60.99</span></h4>
                                                    <h5 className="bg-greylight p-4 rounded-6 mt-3 mb-3 w-100 fw-600 text-grey-500 font-xssss d-flex">Apply Promo Code : <span className="ms-auto fw-700 text-grey-900">2 Promos</span></h5>
                                                </div>
                                            </div>

                                            <a href="/Checkout" className="w-100 bg-current text-white rounded-6 text-center btn" id="checkout">Checkout</a>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                                <Link to="/dashboard" className="nav-icon p-0"><img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="user" className="w-40 mt-1  rounded-circle" /></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Header;