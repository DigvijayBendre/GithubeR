import React, { Component , Fragment } from "react";

class Verifyone extends Component {
    render() {
        return (
            <Fragment>
                <div className="main-wrap min-vh-100">

            
                    <div className="row min-vh-100">
                    <div className="col-xl-5 d-none d-xl-block p-0 min-vh-100 bg-image-cover bg-image-bottomcenter bg-no-repeat posr" style={{backgroundImage: `url("assets/images/login-bg2.jpg")`}}></div>
                        <div className="col-xl-7 min-vh-100 align-items-center d-flex bg-dark-black rounded-3 overflow-hidden">
                            <div className="card shadow-lg border-0 ms-auto me-auto login-card mt-auto mb-auto zindex-100 rounded-10 theme-dark-bg">
                                <div className="card-body rounded-0 text-left p-4">
                                    <h2 className="fw-700 display1-size display2-md-size mb-4 mt-0 white-text">Email <br />verification</h2>                        
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
                                    
                                    <div className="col-sm-12 p-0 text-left mb-0">
                                        <div className="form-group mb-1"><a href="/loginone" className="font-xsss text-center style2-input text-white fw-600 bg-current border-0 p-0 ">Verify Email</a></div>
                                        <h6 className="text-grey-500 font-xssss white-text fw-500 mt-0 mb-0 lh-32">Have not recieved code <a href="/loginone" className="fw-700 ms-1">Resend Code</a></h6>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Verifyone;