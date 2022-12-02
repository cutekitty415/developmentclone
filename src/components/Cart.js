import React from 'react';

export default function Cart(props) {
    const {cartItems, onAddItem, onDeleteItem, itemsPrice} = props;
    // const itemsPrice = cartItems.reduce((a,c) => a + c.price, 0);

    return (
        <div>
            {cartItems.length !== -1 && (
                <div className="row">
                    <div classNamme="col-1 text-right">
                        <h5>${itemsPrice}</h5>
                    </div>
                </div>
                
            )}

        </div>
    );
}