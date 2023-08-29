import React,{Component} from 'react';
import Slider from "react-slick";

const categoryList = [
    {   
        imageUrl: 'veg.png',
        name: 'Meal',
    },
    {   
        imageUrl: 'veg.png',
        name: 'Meat',
    },
    {   
        imageUrl: 'veg.png',
        name: 'Vegi',
    },
    {   
        imageUrl: 'veg.png',
        name: 'Flower',
    },
    {   
        imageUrl: 'veg.png',
        name: 'Drinks',
    },
    {   
        imageUrl: 'veg.png',
        name: 'Fresh',
    },
    {   
        imageUrl: 'veg.png',
        name: 'Frozen',
    },
    {   
        imageUrl: 'veg.png',
        name: 'Wine',
    },
    {   
        imageUrl: 'veg.png',
        name: 'Barkery',
    },
    {   
        imageUrl: 'veg.png',
        name: 'Organic',
    },
   
    {   
        imageUrl: 'veg.png',
        name: 'Vegi',
    },
    
]

class Catagorysldiertwo extends Component {
    render() {
        const storysettings = {
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            centerMode: false,
            variableWidth: true
        };
        return (
            <Slider {...storysettings} className="slick-arrow-top">
                {categoryList.map((value , index) => (
                    <div key={index} className="me-1">
                        <div className="category-card style-three shadow-none text-center bg-transparent border-0">
                            <a href="/g-6" className="rounded-circle image-round"><img src={`assets/images/${value.imageUrl}`} className="w-110 rounded-circle" alt="category" /></a>
                            <h4 className="font-xssss text-grey-900 mt-0 fw-700 d-block">{value.name}</h4>
                        </div>
                    </div>
                ))}
            </Slider>
        );
    }
}

export default Catagorysldiertwo;