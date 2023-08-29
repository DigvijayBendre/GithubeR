import React, { Component, Fragment } from "react";
import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheader from '../components/Lowerheader';
import Footer from '../components/Footer';
import Pagetitle from '../components/Pagetitle';

const blogList = [
    {
        imageUrl: 'salad.png',
        title: 'Aenean Dieting Strategies That Almost Always Backfire',
        meta: 'LIFESTYLE'
    },
    {
        imageUrl: 'salad.png',
        title: 'The doner is a Turkish creation of meat, often lamb.',
        meta: 'FOOD'
    },
    {
        imageUrl: 'salad.png',
        title: 'The doner is a Turkish creation of meat, often lamb.',
        meta: 'FOOD'
    }
]

class Blog extends Component {
    render() {
        return (
            <Fragment>
                <Headermob />
                <Upperheader />
                <Header />
                <Lowerheader />

                <Pagetitle title="Blog" />

                <div className="blog-wrapper pt-5 pb-3">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="d-flex justify-content-center">
                                    {blogList.map((value, index) => (
                                        <article key={index} className="blog-div mx-3">
                                            <div className="card border-0 bg-transparent">
                                                <div className="card-image mb-2 rounded-6 ovh">
                                                    <a href="/blog-single">
                                                        <img src={`assets/images/${value.imageUrl}`} alt="blog" className="w-100 hover-zoom" />
                                                    </a>
                                                </div>
                                                <div className="card-content text-center">
                                                    <span className="ls-3 mb-1 font-xssssss text-white text-uppercase bg-green fw-700 p-2 lh-1 d-inline-block rounded-10">{value.meta}</span>
                                                    <h2><a href="/blog-single" className="post-title fw-600 font-xss text-grey-900 lh-24">{value.title}</a></h2>

                                                    <h4 className="text-grey-500 fw-600 lh-20 font-xsssss mt-1"><i className="feather-user font-xss me-1"></i>By Admin</h4>
                                                    <h4 className="text-grey-500 fw-600 lh-20 font-xsssss mt-1"><i className="feather-message-circle font-xs me-1"></i>54 Comments</h4>
                                                    <h4 className="text-grey-500 fw-600 lh-20 font-xsssss mt-1"><i className="feather-calendar font-xss me-1"></i>22 Aug 2020</h4>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 mt-4 mb-4">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled"><a className="page-link" href="/"><i className="feather-chevron-left"></i></a></li>
                                        <li className="page-item active"><a className="page-link" href="/">1</a></li>
                                        <li className="page-item"><a className="page-link" href="/">2</a></li>
                                        <li className="page-item"><a className="page-link" href="/">3</a></li>
                                        <li className="page-item"><a className="page-link" href="/">4</a></li>
                                        <li className="page-item"><a className="page-link" href="/"><i className="feather-chevron-right"></i></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default Blog;
