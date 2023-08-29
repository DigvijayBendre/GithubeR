import React, { Component , Fragment } from "react";

class Verifytwo extends Component {
    render() {
        return (
            <Fragment>

                <div className="main-wrap min-vh-100">

                    <div className="nav-header bg-transparent shadow-none border-0 position-fixed zindex-900 w-100 p-3 text-center d-lg-block d-none">
                        <a href="/"><img src="assets/images/logo.png" alt="logo" className="w-125" /></a>
                    </div>
            
                    
                    <div className="row min-vh-100">
                        
                        
                        <div className="card shadow-lg border-0 ms-auto me-auto login-card mt-auto mb-auto zindex-100 rounded-10 theme-dark-bg">
                            <div className="card-body rounded-0 text-left">
                                <h2 className="fw-700 display1-size display2-md-size mb-4 mt-3 white-text">Email <br />verification</h2>                        
                                <form>
                                    
                                    <div className="row">
                                        <div className="col-3"><input type="text" className="style2-input text-center form-control fw-600 white-text font-xs ls-3" placeholder="2" /></div>
                                        <div className="col-3"><input type="text" className="style2-input text-center form-control fw-600 white-text font-xs ls-3" placeholder="3" /></div>
                                        <div className="col-3"><input type="text" className="style2-input text-center form-control fw-600 white-text font-xs ls-3" placeholder="5" /></div>
                                        <div className="col-3"><input type="text" className="style2-input text-center form-control fw-600 white-text font-xs ls-3" placeholder="9" /></div>
                                    </div>
                                    
                                    <div className="form-check text-left mb-3 mt-3">
                                        <input type="checkbox" className="form-check-input mt-2" id="exampleCheck4" />
                                        <label className="form-check-label white-text font-xssss text-grey-500" htmlFor="exampleCheck4">Accept Term and Conditions</label>
                                    </div>
                                </form>
                                
                                <div className="col-sm-12 p-0 text-left mb-3">
                                    <div className="form-group mb-1"><a href="/loginone" className="text-center style2-input text-white fw-600 bg-current border-0 p-0 font-xsss">Verify Email</a></div>
                                    <h6 className="text-grey-500 font-xssss white-text  fw-500 mt-0 mb-0 lh-32">Have not recieved code <a href="/loginone" className="fw-700 ms-1">Resend Code</a></h6>
                                    
                                </div>
                                
                            </div>
                        </div>  
                    </div>
                    
                </div>

            </Fragment>
        );
    }
}

export default Verifytwo;