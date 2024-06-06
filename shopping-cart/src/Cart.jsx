import React , {useState} from 'react';
import { useEffect } from 'react';

const Cart = ({cart , Setcart , handleAmmount}) => {
    // console.log(cart.id);
    let [price , Setprice] = useState(0);

    let handalePrice = () => {
        let total = 0;
        cart.map((item) => {
            total += item.price * item.amount;
        })
        Setprice(total);
    }

    useEffect(() => {
        handalePrice();
    })

    const removeItem = (id) => {
        let arr = cart.filter((item) => {
            if(item.id != id){
                return item;
            }
        })
        Setcart(arr);  
    }

    return(
        <div className="cart-container">
            <div className="heading">Cart</div>
            {
                cart.map((item) => {
                    
                    return(
                        <div className="cart-items">
                            <div className="cart-image">
                                <img src={item.image} alt="" height="50vh"/>
                            </div>
                            <div className="cart-name-price">
                                <div className="cart-name">{item.name}</div>
                                <div className="cart-price"><i className="fa-solid fa-dollar-sign"></i> {item.price}.00</div>
                            </div>
                            <div className="buttons">
                                <button className="remove-btn" onClick={()=> handleAmmount(item , -1)}><i className="fa-solid fa-minus"></i></button>
                                <div className="amount">{item.amount}</div>
                                <button className="add-btn" onClick={() => handleAmmount(item , +1)}><i className="fa-solid fa-plus"></i></button>
                            </div>
                            <button className="remove"><i className="fa-regular fa-trash-can" onClick={() => removeItem(item.id)}></i></button>

                        </div>
                    )
                        
                })
            }
            <div className="total"><i className="fa-solid fa-dollar-sign"></i> {price}.00</div>
        </div>
    )
}

export default Cart;