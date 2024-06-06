import React from 'react';
// import Data from './Data';

const Carddata = ({item , AddToCart}) => {
    // console.log(item);
    let {id , image , name , price} = item;

    return(
        <div className="card">
            <div className="product-image">
                <img src={image} alt="image"/>
            </div>
            <div className="product-details">
                <div className="product-name">{name}</div>
                    <div className="product-price"><i className="fa-solid fa-dollar-sign"></i> {price}.00</div>
                    <button onClick={() => AddToCart(item)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Carddata