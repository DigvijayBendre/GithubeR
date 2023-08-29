import React, { Component , Fragment } from "react";

class Registertwo extends Component {
    render() {
        return (
            <Fragment>
                <div className="main-wrap min-vh-100">

                    <div className="nav-header bg-transparent shadow-none border-0 position-fixed zindex-900 w-100 p-3 text-center d-lg-block d-none">
                        <a href="/"><img src="assets/images/logo.png" alt="logo" className="w-125" /></a>
                    </div>
                    
                    <div className="row min-vh-100">
                        <div className="card shadow-lg border-0 ms-auto me-auto login-card mt-auto mb-auto zindex-100 rounded-10 theme-dark-bg">
                            <div className="card-body rounded-0 text-start p-3">
                                <h2 className="fw-700 display1-size display2-md-size mb-4 mt-3 white-text text-grey-900">Create <br />your account</h2>                        
                                <form>
                                    <div className="form-group icon-input mb-3">
                                        <i className="font-sm ti-user text-grey-500 pe-0"></i>
                                        <input type="text" className="style2-input ps-5 form-control text-grey-900 white-text font-xsss fw-600" placeholder="Your Name" />                         
                                    </div>
                                    <div className="form-group icon-input mb-3">
                                        <i className="font-sm ti-email text-grey-500 pe-0"></i>
                                        <input type="text" className="style2-input ps-5 form-control text-grey-900 white-text font-xsss fw-600" placeholder="Email Address" />                         
                                    </div>
                                    <div className="form-group icon-input mb-3">
                                        <input type="Password" className="style2-input ps-5 form-control text-grey-900 white-text font-xss ls-3" placeholder="Password" />
                                        <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                    </div>
                                    <div className="form-group icon-input mb-1">
                                        <input type="Password" className="style2-input ps-5 form-control text-grey-900 white-text font-xss ls-3" placeholder="Confirm Password" />
                                        <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                    </div>
                                    <div className="form-check text-start mb-3">
                                        <input type="checkbox" className="form-check-input mt-2" id="exampleCheck3" />
                                        <label className="form-check-label font-xssss text-grey-500 white-text" for="exampleCheck3">Accept Term and Conditions</label>
                                        
                                    </div>
                                </form>
                                
                                <div className="col-sm-12 p-0 text-start">
                                    <div className="form-group mb-1"><a href="/registerone" className="text-center font-xsss style2-input text-white fw-600 bg-current border-0 p-0 ">Register</a></div>
                                    <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32 white-text">Already have account <a href="login-one.html" className="fw-700 ms-1">Login</a></h6>
                                </div>
                            </div>
                        </div>  
                    </div>
                    
                </div>
            </Fragment>
        );
    }
}

export default Registertwo;