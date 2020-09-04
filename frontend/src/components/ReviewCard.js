import React from 'react';

const ReviewCard = (props) =>{
    return(
        <div>
            <div>
                <p>{props.review.title}</p>
    <p><em>Description:</em> {props.review.description}</p>
            </div>
        </div>
    )
}

export default ReviewCard