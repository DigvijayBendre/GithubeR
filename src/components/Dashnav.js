import React,{Component} from 'react';

class Dashnav extends Component {
    render() {
        const {title} = this.props;
        return (
            <div className="das-nav md-mt-6 p-0 bg-current-shade bg-image-bottomcenter bg-image-cover" style={{backgroundImage: `url("https://marhabaworld.com/wp-content/uploads/2021/12/grocery-shopping.jpg")`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 ps-4 offset-lg-4 d-flex align-items-start flex-column h-250">
                            <h1 className="mt-lg-auto mb-4 mt-5 display3-size display1-sm-size text-grey-900 fw-700">{title}</h1>
                        </div>
                    </div>
                </div>
            </div>        
        );
    }
}

export default Dashnav;


