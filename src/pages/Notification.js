import React, { Component , Fragment } from "react";

import Header from '../components/Header';
import Headermob from '../components/Headermob';
import Upperheader from '../components/Upperheader';
import Lowerheader from '../components/Lowerheader';
import Footer from '../components/Footer';
import Dashnav from '../components/Dashnav';
import Dashmenu from '../components/Dashmenu';

const notiList = [
    {
        imageUrl: 'c.png',
        name: 'Hurin Seary',
        status: 'feather-heart bg-red-gradiant',
        subject: 'Mobile App Design',
        des: 'UI/UX Community : Mobile Apps UI Designer is required for Tech… ',
        attach: 'attach',
        time: '12 minute ago',
        read: 'bg-lightblue theme-light-bg'
    },
    {
        imageUrl: 'c.png',
        name: 'Victor Exrixon',
        status: 'feather-thumbs-up bg-primary-gradiant',
        subject: 'Mobile App Design',
        des: 'UI/UX Community : Mobile Apps UI Designer is required for Tech… ',
        attach: 'attach',
        time: '45 minute ago',
        read: ''
    },
    {
        imageUrl: 'c.png',
        name: 'Surfiya Zakir',
        status: 'feather-thumbs-up bg-primary-gradiant',
        subject: 'Mobile App Design',
        des: 'UI/UX Community : Mobile Apps UI Designer is required for Tech… ',
        attach: 'attach',
        time: '1 hour ago',
        read: ''
    },
    {
        imageUrl: 'c.png',
        name: 'Goria Coast',
        status: 'feather-heart bg-red-gradiant',
        subject: 'Mobile App Design',
        des: 'UI/UX Community : Mobile Apps UI Designer is required for Tech… ',
        attach: 'attach',
        time: '2 hour ago',
        read: ''
    },
    {
        imageUrl: 'c.png',
        name: 'Hurin Seary',
        status: 'feather-heart bg-red-gradiant',
        subject: 'Mobile App Design',
        des: 'UI/UX Community : Mobile Apps UI Designer is required for Tech… ',
        attach: 'attach',
        time: '5 hour ago',
        read: ''
    },
    {
        imageUrl: 'c.png',
        name: 'David Goria',
        status: 'feather-heart bg-red-gradiant',
        subject: 'Mobile App Design',
        des: 'UI/UX Community : Mobile Apps UI Designer is required for Tech… ',
        attach: 'attach',
        time: '12 hour ago',
        read: ''
    },

    {
        imageUrl: 'c.png',
        name: 'Hurin Seary',
        status: 'feather-heart bg-red-gradiant',
        subject: 'Mobile App Design',
        des: 'UI/UX Community : Mobile Apps UI Designer is required for Tech… ',
        attach: 'attach',
        time: '12 minute ago',
        read: 'bg-lightblue theme-light-bg'
     }
    
]

class Notification extends Component {
    render() {
        return (
            <Fragment>
                <Headermob />
                <Upperheader />
                <Header />
                <Lowerheader />
                <Dashnav title="Notification" />

                <div className="main-div pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <Dashmenu />
                            </div>
                            {/* <div className="col-lg-8 pt-5 ps-4">
                                <ul className="notification-box">
                                    {notiList.map((value , index) => (

                                    <li key={index}>
                                        <a href="/defaultnotification" className={`d-flex align-items-center p-3 rounded-3 ${value.read}`}>
                                            <img src={`assets/images/${value.imageUrl}`} alt="user" className="w-45 me-3 rounded-circle" />
                                            <i className={`text-white me-2 font-xssss notification-react ${value.status}`}></i>
                                            <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>{value.name}</strong> posted in : {value.des}<span className="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 0l-auto"> {value.time}</span> </h6>
                                            <i className="ti-more-alt text-grey-500 font-xs ms-auto"></i>
                                        </a>
                                    </li>
                                    
                                    ))}

                                </ul>
                                
                            </div> */}
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default Notification;