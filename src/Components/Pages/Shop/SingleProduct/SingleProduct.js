import React from 'react';
import { Link } from 'react-router-dom';
const SingleProduct = ({ prodcut }) => {
    const { _id,title, price, image, rating } = prodcut;
    const ratingNumber = parseInt(rating.rate);

    return (
        
            <div className="SingleProduct">
                <div className="card" >
                  <Link to={`productview/${_id}`}><img src={image} className="card-img-top" alt={title} /></Link>
                    <div className="card-body">
                        <span>
                            {[...Array(ratingNumber)].map(star => {
                                return <i className="fas rating fa-star" />

                            })}
                        </span><span className="rating-count">({rating.count} Review)</span>
                        <h5 className="product-title">
                            <Link to={`productview/${_id}`}>{title}</Link>
                        </h5>
                        <span className="price">
                            <span className="new">${price}</span>
                        </span>
                    </div>
                </div>
            </div>
        
    );
};


export default SingleProduct;