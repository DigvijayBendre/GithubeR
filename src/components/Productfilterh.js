import React,{Component} from 'react';

class Productfilterh extends Component {
    render() {
        const {divClass} = this.props;
        const {gird} = this.props;
        return (
            <div className={divClass}>
                <div className="row">
                    <div className={`${gird}`}>
                        <div className="form-group mb-3">
                            <h6 className="fw-600 text-grey-900 font-xsss mb-0 text-capitalize">Product Categoires</h6>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Drinks" id="flexCheckDrinks1" />
                            <label className="form-check-label" htmlFor="flexCheckDrinks1">Drinks</label>
                            <i className="feather-chevron-right mt-1 font-xsss text-grey-500 ms-auto"></i>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Snacks" id="flexCheckSnacks2" />
                            <label className="form-check-label" htmlFor="flexCheckSnacks2">Snacks &amp; Biscuits</label>
                            <i className="feather-chevron-right mt-1 font-xsss text-grey-500 ms-auto"></i>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Breads" id="flexCheckBreads3" />
                            <label className="form-check-label" htmlFor="flexCheckBreads3">Breads &amp; Bakery</label>
                            <i className="feather-chevron-right mt-1 font-xsss text-grey-500 ms-auto"></i>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Breakfast" id="flexCheckBreakfast5" />
                            <label className="form-check-label" htmlFor="flexCheckBreakfast5">Breakfast &amp; Dairy</label>
                            <i className="feather-chevron-right mt-1 font-xsss text-grey-500 ms-auto"></i>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Frozen" id="flexCheckFrozen5" />
                            <label className="form-check-label" htmlFor="flexCheckFrozen5">Frozen Foods</label>
                            <i className="feather-chevron-right mt-1 font-xsss text-grey-500 ms-auto"></i>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Fruits" id="flexCheckFruits6" />
                            <label className="form-check-label" htmlFor="flexCheckFruits6">Fruits &amp; Vegetables</label>
                            <i className="feather-chevron-right mt-1 font-xsss text-grey-500 ms-auto"></i>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Grocery" id="flexCheckGrocery6" />
                            <label className="form-check-label" htmlFor="flexCheckGrocery6">Grocery &amp; Staples</label>
                            <i className="feather-chevron-right mt-1 font-xsss text-grey-500 ms-auto"></i>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Household" id="flexCheckHousehold7" />
                            <label className="form-check-label" htmlFor="flexCheckHousehold7">Household Needs</label>
                            <i className="feather-chevron-right mt-1 font-xsss text-grey-500 ms-auto"></i>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Meats" id="flexCheckMeats8" />
                            <label className="form-check-label" htmlFor="flexCheckMeats8">Meats &amp; Seafood</label>
                            <i className="feather-chevron-right mt-1 font-xsss text-grey-500 ms-auto"></i>
                        </div>
                    </div> 
                    <div className={`${gird}`}>
                        <div className="form-group mb-3">
                            <h6 className="fw-600 text-grey-900 font-xsss mb-0 text-capitalize">Product Status</h6>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Drinks" id="flexCheckStock11" />
                            <label className="form-check-label" htmlFor="flexCheckStock11">In Stock</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Snacks" id="flexCheckSlae12" />
                            <label className="form-check-label" htmlFor="flexCheckSlae12">On Sale</label>
                        </div>

                        <div className="form-group mb-3 mt-3">
                            <h6 className="fw-600 text-grey-900 font-xsss mb-0 text-capitalize">Customer Ratings</h6>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Drinks" id="flexCheckStock1" />
                            <label className="form-check-label" htmlFor="flexCheckStock1"><img src="assets/images/star.png" alt="star" className="w-15 me-1 float-start mt-1" /><img src="assets/images/star.png" alt="star" className="w-15 me-1 float-start mt-1" /><img src="assets/images/star.png" alt="star" className="w-15 me-1 float-start mt-1" /><img src="assets/images/star.png" alt="star" className="w-15 me-1 float-start mt-1" /><img src="assets/images/star.png" alt="star" className="w-15 me-1 float-start mt-1" /> <span className="ms-auto text-grey-500">(13)</span></label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Drinks" id="flexCheckStock2" />
                            <label className="form-check-label" htmlFor="flexCheckStock2"><img src="assets/images/star.png" alt="star" className="w-15 me-1 float-start mt-1" /><img src="assets/images/star.png" alt="star" className="w-15 me-1 float-start mt-1" /><img src="assets/images/star.png" alt="star" className="w-15 me-1 float-start mt-1" /><img src="assets/images/star.png" alt="star" className="w-15 me-1 float-start mt-1" /><img src="assets/images/star-disable.png" alt="star" className="w-15 me-1 float-start mt-1" /> <span className="ms-auto text-grey-500">(22)</span></label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Drinks" id="flexCheckStock3" />
                            <label className="form-check-label" htmlFor="flexCheckStock3"><img src="assets/images/star.png" alt="star" className="w-15 me-1 float-start mt-1" /><img src="assets/images/star.png" alt="star" className="w-15 me-1 float-start mt-1" /><img src="assets/images/star.png" alt="star" className="w-15 me-1 float-start mt-1" /><img src="assets/images/star-disable.png" alt="star" className="w-15 me-1 float-start mt-1" /><img src="assets/images/star-disable.png" alt="star" className="w-15 me-1 float-start mt-1" /> <span className="ms-auto text-grey-500">(542)</span></label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Drinks" id="flexCheckStock5" />
                            <label className="form-check-label" htmlFor="flexCheckStock5"><img src="assets/images/star.png" alt="star" className="w-15 me-1 float-start mt-1" /><img src="assets/images/star.png" alt="star" className="w-15 me-1 float-start mt-1" /><img src="assets/images/star-disable.png" alt="star" className="w-15 me-1 float-start mt-1" /><img src="assets/images/star-disable.png" alt="star" className="w-15 me-1 float-start mt-1" /><img src="assets/images/star-disable.png" alt="star" className="w-15 me-1 float-start mt-1" /> <span className="ms-auto text-grey-500">(322)</span></label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Drinks" id="flexCheckStock4" />
                            <label className="form-check-label" htmlFor="flexCheckStock4"><img src="assets/images/star.png" alt="star" className="w-15 me-1 float-start mt-1" /><img src="assets/images/star-disable.png" alt="star" className="w-15 me-1 float-start mt-1" /><img src="assets/images/star-disable.png" alt="star" className="w-15 me-1 float-start mt-1" /><img src="assets/images/star-disable.png" alt="star" className="w-15 me-1 float-start mt-1" /><img src="assets/images/star-disable.png" alt="star" className="w-15 me-1 float-start mt-1" /> <span className="ms-auto text-grey-500">(342)</span></label>
                        </div>
                    </div>   
                    <div className={`${gird}`}>
                        <div className="form-group mb-3">
                            <h6 className="fw-600 text-grey-900 font-xsss mb-0 text-capitalize">Product Brand</h6>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Drinks" id="flexCheckDrinks" />
                            <label className="form-check-label" htmlFor="flexCheckDrinks">Vegetarian</label>
                            <span className="mt-1 font-xssss fw-500 text-grey-500 ms-auto">(1233)</span>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Snacks" id="flexCheckSnacks" />
                            <label className="form-check-label" htmlFor="flexCheckSnacks">Vegan</label>
                            <span className="mt-1 font-xssss fw-500 text-grey-500 ms-auto">(2231)</span>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Breads" id="flexCheckBreads" />
                            <label className="form-check-label" htmlFor="flexCheckBreads">Green Food</label>
                            <span className="mt-1 font-xssss fw-500 text-grey-500 ms-auto">(754)</span>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Breakfast" id="flexCheckBreakfast" />
                            <label className="form-check-label" htmlFor="flexCheckBreakfast">Milk Fess</label>
                            <span className="mt-1 font-xssss fw-500 text-grey-500 ms-auto">(27)</span>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Frozen" id="flexCheckFrozen" />
                            <label className="form-check-label" htmlFor="flexCheckFrozen">Frozen Foods</label>
                            <span className="mt-1 font-xssss fw-500 text-grey-500 ms-auto">(61)</span>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Fruits" id="flexCheckFruits" />
                            <label className="form-check-label" htmlFor="flexCheckFruits">Fruits &amp; Vegetables</label>
                            <span className="mt-1 font-xssss fw-500 text-grey-500 ms-auto">(76)</span>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Grocery" id="flexCheckGrocery" />
                            <label className="form-check-label" htmlFor="flexCheckGrocery">Grocery &amp; Staples</label>
                            <span className="mt-1 font-xssss fw-500 text-grey-500 ms-auto">(45)</span>
                        </div>
                    </div>  
                    <div className={`pe-0 ${gird}`}>
                        <div className="form-group mb-3">
                            <h6 className="fw-600 text-grey-900 font-xsss mb-0 text-capitalize">Popular Tag</h6>
                        </div>
                        <a href="/" className="tag-name">Grocery</a>
                        <a href="/" className="tag-name">Fruits</a>
                        <a href="/" className="tag-name">Vegetables</a>
                        <a href="/" className="tag-name">Milk</a>
                        <a href="/" className="tag-name">Drinks</a>
                        <a href="/" className="tag-name">Food</a>
                        <a href="/" className="tag-name">Grocery</a>
                        <a href="/" className="tag-name">Drinks</a>
                        <a href="/" className="tag-name">Chiness</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Productfilterh;