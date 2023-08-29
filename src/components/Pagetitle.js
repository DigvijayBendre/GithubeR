import React,{Component} from 'react';

class Pagetitle extends Component {
    render() {
        const {title} = this.props;
        return (
            <div className="page-nav md-mt-6" style={{backgroundImage: `url("assets/images/bg-grocery-4.jpg")`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center"><h1>{title}</h1> <span>Home / {title}</span></div>
                    </div>
                </div>
            </div>           
        );
    }
}

export default Pagetitle;


