import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Headermob extends Component {
    render() {
        const {divClass} = this.props;
        return (
            <div className={`upper-header pt-2 pb-2 d-none d-lg-block ${divClass}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="nav">
                                <li className="nav-item"><Link className=" ps-0" to="/about">About Us</Link></li>
                                <li className="nav-item"><Link to="/dashboard">My account</Link></li>
                                {/* <li className="nav-item"><Link to="/saved">Wishlist</Link></li> */}
                                <li className="nav-item"><Link to="/">Order Tracking</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Headermob;