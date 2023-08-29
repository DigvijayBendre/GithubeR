import React,{Component} from 'react';
import { Modal , Button , Navbar , Nav , NavDropdown} from 'react-bootstrap';

const trendProduct = [
    { imageUrl: 'veg.png', title: 'Almonds Lightly Salted ', price: '29', weight: '300 gm'},
    { imageUrl: 'veg.png', title: 'Assorted Donuts Salted ', price: '79', weight: '5 Kg'},
    { imageUrl: 'veg.png', title: 'Natures Own 100% Wheat ', price: '29', weight: '500 gm'},
    { imageUrl: 'veg.png', title: 'Blue Diamond Almonds ', price: '40', weight: '400 gm'},
]


class Headermob extends Component {
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
            

            <div className="header-menu-mob pt-2 pb-2 shadow-xss position-fixed w-100 z-index-5 bg-white d-none d-block-md">
                <div className="container">
                    <div className="row">
                        <div className="col text-start"><button onClick={()=>{this.handleModel()}} className="navbar-toggler border-0" type="button"><span className="navbar-toggler-icon"></span></button></div>

                        <Modal {...this.props} size="sm" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.location} className="left">
                            <Button onClick={()=>{this.handleModel()}} className="btn-close z-index-5 posa right-0 top-0 mt-3 me-3 font-xss"></Button>
                            <Modal.Body className="text-center pt-2 pb-3">
                                <div className="card p-2 border-0 text-start h-100 ">
                                    <h4 className="fw-700 font-lg text-grey-900 text-start mb-3 d-block ls-0"> Menu</h4>

                                    <Navbar expand="lg" className="dropdown-navbar slide-navmenu">
                                        <Navbar id="basic-navbar-nav" className="w-100 d-block">
                                            <Nav>
                                                <NavDropdown title="Home" id="basic-nav-dropdown">
                                                    <NavDropdown.Item href="/g-1">Grocery One</NavDropdown.Item>
                                                    <NavDropdown.Item href="/g-2">Grocery Two</NavDropdown.Item>
                                                    {/* <NavDropdown.Item href="/g-3">Grocery Three</NavDropdown.Item>
                                                    <NavDropdown.Item href="/g-4"> Four</NavDropdown.Item>
                                                    <NavDropdown.Item href="/g-5">Grocery Five</NavDropdown.Item>
                                                    <NavDropdown.Item href="/g-5">Grocery Six</NavDropdown.Item> */}
                                                </NavDropdown>
                                                <NavDropdown title="Shop" id="basic-nav-dropdown">
                                                    <NavDropdown.Item href="/shop-1"> Shop One</NavDropdown.Item>
                                                    <NavDropdown.Item href="/shop-2"> Shop Two</NavDropdown.Item>
                                                    {/* <NavDropdown.Item href="/shop-3"> Shop Three</NavDropdown.Item>
                                                    <NavDropdown.Item href="/shop-4"> Shop Four</NavDropdown.Item>
                                                    <NavDropdown.Item href="/shop-5"> Shop Five</NavDropdown.Item> */}
                                                </NavDropdown>
                                                <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                                                    <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
                                                    <NavDropdown.Item href="/address">Saved Address </NavDropdown.Item>
                                                    {/* <NavDropdown.Item href="/orders">Orders </NavDropdown.Item>
                                                    <NavDropdown.Item href="/coupon">Coupon</NavDropdown.Item>
                                                    <NavDropdown.Item href="/payment">Payment </NavDropdown.Item> */}
                                                    {/* <NavDropdown.Item href="/notification">Notification </NavDropdown.Item> */}
                                                </NavDropdown>
                                                <NavDropdown title="Product" id="basic-nav-dropdown">
                                                    <NavDropdown.Item href="/single-product-1"> Single One</NavDropdown.Item>
                                                    <NavDropdown.Item href="/single-product-2"> Single Two </NavDropdown.Item>
                                                    {/* <NavDropdown.Item href="/single-product-3"> Single Three </NavDropdown.Item>
                                                    <NavDropdown.Item href="/single-product-4"> Single Four</NavDropdown.Item> */}
                                                </NavDropdown>
                                                <NavDropdown title="Pages" id="basic-nav-dropdown">
                                                    <NavDropdown.Item href="/about">About</NavDropdown.Item>
                                                    <NavDropdown.Item href="/contact">Contact </NavDropdown.Item>
                                                    <NavDropdown.Item href="/blog">Blog </NavDropdown.Item>
                                                    {/* <NavDropdown.Item href="/blog">Single Blog</NavDropdown.Item>
                                                    <NavDropdown.Item href="/faq">Faq</NavDropdown.Item>
                                                    <NavDropdown.Item href="/404">404</NavDropdown.Item> */}
                                                </NavDropdown>
                                            </Nav>
                                        </Navbar>
                                    </Navbar>
                                    

                                    <div className="card h-auto mt-auto p-4 w-100 rounded-10 theme-bg border-0 text-center bg-image-cover" style={{backgroundImage: `url("https://via.placeholder.com/351x430.png")`}}>
                                        <div className="card-body text-center p-2 mb-2">
                                            <h4 className="text-grey-900 white-text mb-3 font-sm fw-500">Become a <b className="text-grey-900 white-text">pro</b> <br /> Get more <b className="text-grey-900 white-text">features</b></h4>
                                            <a href="loginone" className="btn rounded-25 bg-current white-text text-white w-150">Upgrade</a>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <div className="col text-center"><a href="/"><img src="assets/images/logo1.png" alt="logo" className="logo w-110 pt-1" /></a></div>
                        <div className="col text-end"><button onClick={()=>{this.handleCart()}} className="nav-icon mt-1 d-inline-block border-0 bg-transparent" type="button"><i className="feather-shopping-bag text-grey-500 font-xl"></i></button></div>

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
                                                <h6 className="font-xs ls-3 fw-700 text-current float-start mt-1"><span className="font-xsssss text-grey-500">$</span>{value.price} </h6>
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
                                <div className="card w-100 p-0 pt-3 border-0 text-start mt-auto">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h4 className="text-grey-900 font-xssss fw-600 mb-2 d-flex">Subtotal <span className="ms-auto text-grey-500">₹. 59.99</span></h4>
                                            <h4 className="text-grey-900 font-xssss fw-600 mb-3 d-flex">Tax <span className="ms-auto text-grey-500">₹ 0.99</span></h4>
                                            <h4 className="text-grey-900 font-xss fw-600 mb-3 d-flex">Total <span className="ms-auto">₹ 60.99</span></h4>
                                            <h5 className="bg-greylight p-4 rounded-6 mt-3 mb-3 w-100 fw-600 text-grey-500 font-xssss d-flex">Apply Promo Code : <span className="ms-auto fw-700 text-grey-900">2 Promos</span></h5>
                                        </div>
                                    </div>

                                    <a href="/Checkout" className="w-100 bg-current text-white rounded-6 text-center btn" id="checkout">Checkout</a>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}

export default Headermob;