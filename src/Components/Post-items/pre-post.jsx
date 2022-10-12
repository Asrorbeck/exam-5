import ratingImg from '../../images/rating.svg'
import { useEffect, useState } from "react";
import './Posts.scss'
import { Link } from 'react-router-dom';

function PrePosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
        .then(response => response.json())
        .then(data => {
            setPosts(data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return(
        <>
        {
            posts.slice(6,10).map((item) => (
                <li className="post" key={item.id}>
                    <Link className='post__main-link' to={`/product/${item.id}`}>
                        <img src={item.image} className="post__img" />

                        <h4 className="post__title">{item.title}</h4>

                        <div className="post__rating-wrapper">
                            <img src={ratingImg} className="post__rating-star" />

                            <p className="post__rating">Rating: {item.rating.rate}</p>
                        </div>

                        <p className="post__price">{item.price} $</p>
                    </Link>
                </li>
                ))
            }
            </>
    )
}

export default PrePosts