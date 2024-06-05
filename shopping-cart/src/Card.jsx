import React from 'react';
import Data from './Data';


const Card = () => {
    // console.log(item.image);
    return(
        <div className="card-container">
            {
                Data.map((item) => {
                    return(
                        <div className="card">
                            <div className="product-image">
                                <img src={item.image} alt="image"/>
                            </div>
                            <div className="product-details">
                                <div className="product-name">{item.name}</div>
                                <div className="product-price"><i className="fa-solid fa-dollar-sign"></i> {item.price}.00</div>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Card;