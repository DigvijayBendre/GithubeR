import React, { Component , Fragment } from "react";

import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheader from '../components/Lowerheader';
import Footer from '../components/Footer';



const blogList = [
    {
        imageUrl: 'salad.png',
        title: 'Aenean  Dieting Strategies That Almost Always Backfire',
        meta: 'LIFESTYLE'
    },
    {
        imageUrl: 'salad.png',
        title: 'The doner is a Turkish creation of meat, often lamb.',
        meta: 'FOOD'
    },
    {
        imageUrl: 'salad.png',
        title: 'The only nutrition program follow & supremely effective',
        meta: 'Freshveg'
    },
]

class Blogsingle extends Component {
    render() {
        return (
            <Fragment> 
                <Headermob />
                <Upperheader divClass="bg-lightgrey" />
                <Header />
                <Lowerheader />

                <div className="blog-single bg-image-center bg-gradiant-bottom posr" style={{backgroundImage: `url("https://via.placeholder.com/1925x500.png")`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 h-500 d-flex align-items-end flex-column">
                                <div className="card mt-auto z-index-5 w-100 bg-transparent border-0 mb-4">
                                    <div className="card-body text-center">
                                        <span className="ls-5 mb-1 font-xsssss text-white text-uppercase bg-green fw-700 px-3 py-2 lh-18 d-inline-block rounded-25">LIFESTYLE</span>
                                        <h2 className="post-title fw-600 text-white">Egg salad sandwich with avocado and watercress chip pancakes</h2>
                                        <h4 className="text-grey-400 d-inline-block fw-600 font-xsssss mt-1 me-3"><i className="float-start mt-n1 text-white feather-user font-xss me-1"></i>By Admin</h4>
                                        <h4 className="text-grey-400 d-inline-block fw-600 font-xsssss mt-1 me-3"><i className="float-start mt-n1 text-white feather-message-circle font-xs me-1"></i>34 Comments</h4>
                                        <h4 className="text-grey-400 d-inline-block fw-600 font-xsssss mt-1 me-0"><i className="float-start mt-n1 text-white feather-calendar font-xss me-1"></i>16 March 2020</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blog-single pt-lg-5 pb-lg-5 pb-3 pt-3">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-12 text-left">
                                <p className="blog-text drop-cap mb-lg-5 mb-3"> <span>B</span>est is because a brand, at it’s core, is immaterial. It’s about abstract attributes and values which present themselves in concrete ways:While a logo might be the most recognizable manifestation of a brand, it’s only one of many. Brands cut across media, and present themselves in colors, shapes, words, sounds, and even smells. That’s because a brand, at it’s core, is immaterial. It’s about abstract attributes and values which present themselves in concrete ways:</p>
                                <p className="blog-text mb-lg-5 mb-3">While a logo might be the most recognizable manifestation of a brand, it’s only one of many. Brands cut across media, and present themselves in colors, shapes, words, sounds, and even smells. That’s because a brand, at it’s core, is immaterial. It’s about abstract attributes and values which present themselves in concrete ways:While a logo might be the most recognizable manifestation of a brand, it’s only one of many. Brands cut across media, and present themselves in colors, shapes, words, sounds, and even smells. That’s because a brand, at it’s core, is immaterial. It’s about abstract attributes and values which present themselves in concrete ways:</p>
                                <div className="card shadow-none bg-greyblue w-100 p-4 border-0 mt-lg-5 mb-lg-5 mt-3 mb-3 rounded-lg">
                                    <div className="card-body">
                                        <i className="ti-quote-left display1-size text-grey-400 left-15"></i>
                                        <h3 className="fw-500 text-grey-800 font-xs lh-32 font-italic mb-3 mt-2">That’s because a brand, at it’s core, is immaterial. It’s about abstract attributes and values which present themselves in concrete ways</h3>
                                        <p className="fw-600 mb-0 text-grey-500 font-xsssss ls-2">Cabe Camaren</p>
                                    </div>  
                                </div>
                                <p className="blog-text mb-lg-5 mb-3">While a logo might be the most recognizable manifestation of a brand, it’s only one of many. Brands cut across media, and present themselves in colors, shapes, words, sounds, and even smells. That’s because a brand, at it’s core, is immaterial. It’s about abstract attributes and values which present themselves in concrete ways:While a logo might be the most recognizable manifestation of a brand, it’s only one of many. Brands cut across media, and present themselves in colors, shapes, words, sounds, and even smells. That’s because a brand, at it’s core, is immaterial. It’s about abstract attributes and values which present themselves in concrete ways:</p>
                                <img src="https://via.placeholder.com/500x200.png" alt="blog" className="w-100 rounded-6" />
                                <figcaption className="font-xssss text-grey-500 text-center mb-3">Suspendisse laoreet ut ligula et semper.</figcaption>
                                <p className="blog-text mb-lg-5 mb-3">Best is because a brand, at it’s core, is immaterial. It’s about abstract attributes and values which present themselves in concrete ways:While a logo might be the most recognizable manifestation of a brand, it’s only one of many. Brands cut across media, and present themselves in colors, shapes, words, sounds, and even smells. That’s because a brand, at it’s core, is immaterial. It’s about abstract attributes and values which present themselves in concrete ways:</p>
                                <div className="card shadow-none w-100 border-0 mb-5">
                                    <ul className="mt-0 list-inline">
                                        <li className="list-inline-item"><a href="/blog-single" className="btn-round-md bg-facebook"><i className="font-xs ti-facebook text-white"></i></a></li>
                                        <li className="list-inline-item"><a href="/blog-single" className="btn-round-md bg-twiiter"><i className="font-xs ti-twitter-alt text-white"></i></a></li>
                                        <li className="list-inline-item"><a href="/blog-single" className="btn-round-md bg-linkedin"><i className="font-xs ti-linkedin text-white"></i></a></li>
                                        <li className="list-inline-item"><a href="/blog-single" className="btn-round-md bg-instagram"><i className="font-xs ti-instagram text-white"></i></a></li>
                                        <li className="list-inline-item"><a href="/blog-single" className="btn-round-md bg-pinterest"><i className="font-xs ti-pinterest text-white"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blog-wrapper pt-2 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h4 className="fw-700 font-sm mb-4 mt-2 d-flex lh-18">Related Article <a href="/blog" className="ms-auto text-grey-500 fw-600 text-uppercase font-xsssss border-bottom ls-3">view all</a></h4>
                            </div>

                            {blogList.map((value , index) => (
                            <div key={index} className="col-lg-4 col-md-4">
                                <article className="blog-div sm-mb-3">
                                    <div className="card border-0 bg-transparent">
                                        <div className="card-image mb-2 rounded-6 ovh"><a href="/blog-single"><img src={`assets/images/${value.imageUrl}`} alt="blog" className="w-100 hover-zoom" /></a></div>
                                        <div className="card-content">
                                            <span className="ls-3 mb-1 font-xssssss text-white text-uppercase bg-green fw-700 p-2 lh-1 d-inline-block rounded-10">{value.meta}</span>
                                            <h2><a href="blog-single.html" className="post-title fw-600 font-xss text-grey-900 lh-24">{value.title}</a></h2>
                                        
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

                <Footer />

            </Fragment>
        );
    }
}

export default Blogsingle;