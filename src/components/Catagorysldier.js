import React,{Component} from 'react';
import Slider from "react-slick";

const categoryList = [
    {   
        imageUrl: 'c.png',
        name: 'Oils, Refined &  Ghee',
    },
    {   
        imageUrl: 'c.png',
        name: 'Chocolates & Sweets  Nuts',
    },
    {   
        imageUrl: 'c.png',
        name: 'Dry Fruits,  Nuts & Seeds',
    },
    {   
        imageUrl: 'c.png',
        name: 'Well Common  Pharma',
    },
    {   
        imageUrl: 'c.png',
        name: 'Instant Drink  Mixes',
    },
    {   
        imageUrl: 'c.png',
        name: 'Chips Namkeen &  Snacks',
    },
    {   
        imageUrl: 'c.png',
        name: 'Cooking Sauces  Vinegar',
    },
    {   
        imageUrl: 'c.png',
        name: 'Packaged Food &  Fruits',
    },
]

class Catagorysldier extends Component {
    render() {
        const storysettings = {
            arrows: false,
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
                    <div key={index} className="me-2">
                        <div className="category-card w-110 style-three shadow-none text-center bg-transparent border-0">
                            <a href="/g-6" className="rounded-circle hover-zoom pt-1 image-round after-none"><img src={`assets/images/${value.imageUrl}`} className="w-110 rounded-circle" alt="category" /></a>
                            <h4 className="font-xssss text-grey-600 mt-2 fw-700 d-block lh-18">{value.name}</h4>
                        </div>
                    </div>
                ))}
            </Slider>
        );
    }
}

export default Catagorysldier;