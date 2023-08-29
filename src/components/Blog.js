import React,{Component} from 'react';
import { Link  } from 'react-router-dom';

const newDemoList = [
    {
        imageUrl: 'salad.png',
        title: 'Broad beans, tomato, garlic & mozzarella cheese bruschetta',
        meta: 'Lifestyle'
    },
    {
        imageUrl: 'salad.png',
        title: 'Steak salad with goat cheese and arugula for your family?',
        meta: 'Food'
    },
    {
        imageUrl: 'salad.png',
        title: 'Egg salad sandwich with avocado and watercress chip pancakes',
        meta: 'Lifestyle'
    },
]

class Blog extends Component {
    render() {
        return (
            <div className="blog-wrapper pt-4 pb-4 pt-lg-5 pb-lg-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4 className="fw-700 font-sm mb-4 mt-2 text-uppercase d-flex lh-18">Our Blog <a href="/blog" className="ms-auto text-grey-500 fw-600 text-uppercase font-xsssss border-bottom ls-3">view all</a></h4>
                        </div>
                        {newDemoList.map((value , index) => (
                        <div key={index}  className="col-lg-4 col-md-4">
                            <article className="blog-div sm-mb-3">
                                <div className="card border-0 bg-transparent">
                                    <div className="card-image mb-2 rounded-6 ovh"><Link to="/blog"><img src={`assets/images/${value.imageUrl}`} alt="blog" className="w-100 hover-zoom" /></Link></div>
                                    <div className="card-content">
                                        <span className="ls-3 mb-1 font-xssssss text-white text-uppercase bg-green fw-700 p-2 lh-1 d-inline-block rounded-10">{value.meta}</span>
                                        <h2><Link to="/blog" className="post-title fw-600 font-xss text-grey-900 lh-24">{value.title}</Link></h2>
                                    
                                        <h4 className="text-grey-500 float-start d-flex fw-600 lh-20 font-xsssss mt-1 me-3"><i className="feather-user font-xss me-1"></i>By Admin</h4>
                                        <h4 className="text-grey-500 float-start d-flex fw-600 lh-20 font-xsssss mt-1 me-3"><i className="feather-message-circle font-xs me-1"></i>34 Comments</h4>
                                        <h4 className="text-grey-500 float-start d-flex fw-600 lh-20 font-xsssss mt-1 me-0"><i className="feather-calendar font-xss me-1"></i>16 March 2020</h4>
                                    </div>
                                </div>
                            </article>
                        </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;