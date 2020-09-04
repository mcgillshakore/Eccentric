import React, {useEffect} from 'react';
import { useParams } from 'react-router'
import ReviewCard from './ReviewCard';
import { useDispatch, useSelector } from 'react-redux';

const ReviewCollection = (props) => {
    let params = useParams()
    let dispatch = useDispatch()
    let allReviews = useSelector(state => state.reviews)
        // console.log(allReviews, "I'm all Reviews");
    useEffect( () => {
        fetch(`http://localhost:3000/group-info`,{
            credentials:"include",
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({slug: params.slug})
        })
        .then(resp => resp.json())
        .then(groups => {
            // console.log(groups, "fetchGroups");
            dispatch({type: "GET_REVIEWS", reviews:groups.reviews})
        })
    },[dispatch, params.slug])
        
    return(
        <div>
            <h2>Reviews</h2>
             {allReviews.map(review => <ReviewCard key={review.id} review={review}/>)}
        </div>
    )
}

export default ReviewCollection