import React,{Component} from 'react';

class Addbannerfour extends Component {
    render() {
        const {title} = this.props;
        const {tag} = this.props;
        const {bgimage} = this.props;
        return (
            <div className="card d-flex align-items-start flex-column border-0 h-200 w-100 rounded-6 mt-3 bg-image-cover p-4" style={{backgroundImage: `url("assets/images/${bgimage}")`}}>
                <div className="p-0 pe-3 mt-auto w-50">
                    <span className="fw-700 ls-3 text-current font-xsssss">{tag}</span>
                    <h4 className="font-sm fw-700 lh-2 text-grey-900 mb-3">{title}</h4>
                    <a href="/" className="fw-700 ls-3 text-grey-900 font-xsssss">SHOP NOW</a>
                </div>    
            </div>
        );
    }
}

export default Addbannerfour;