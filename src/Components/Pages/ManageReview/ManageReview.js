import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const ManageReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://arcane-ravine-56101.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])

 
    return (
        <div className="managereview-sec"> 
        <h1 className="" style={{backgroundColor: '#FCF6F6'}}>ALl Customer Review</h1>
           <div className="container">
           <div className="row review-sec">
           {
                reviews?.map(review => <SingleReview

                    key={review._id}
                    review={review}
                >

                </SingleReview>)
            }
           </div>
           </div>
        </div>
    );
};

export default ManageReview;