import React from 'react';
import Data from './Data';
import Carddata from './Carddata'

const Card = ({AddToCart}) => {
    return(
            <section>
                <div className="card-container">
                {
                    Data.map((item) => {
                        return(
                            <Carddata item={item} key={item.id} AddToCart={AddToCart}/>
                        )
                    })
                }
                </div>
            </section>
    )
}
export default Card;