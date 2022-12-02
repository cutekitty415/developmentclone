import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import React from 'react';


function ProductItem(props) {

	const {onAddItem, onDeleteItem} = props;
    const [buttonTextFav, setButtonTextFav] = useState('Add to Favorites');
    const [pressedFavorites, setPressedFavorites] = useState(false);
    const [variantFavorites, setVariantFavorites] = useState("secondary");


    function addToFavorites(item, pressed){
        if (pressedFavorites == false) {
            onAddItem(item);
            setPressedFavorites(true);
            setButtonTextFav('Remove from Favorites');
            setVariantFavorites("primary");
        } else if (pressedFavorites == true) {
            onDeleteItem(item);
            setPressedFavorites(false);
            setButtonTextFav('Add to Favorites');
            setVariantFavorites("secondary");
        }
    }
	
    return (
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={props.image}/> 
            <Card.Body>
                <Card.Text>{props.name}</Card.Text>
                <Card.Title><h5>{props.brand}</h5></Card.Title>
                <Card.Text><h6>{props.color}</h6></Card.Text>
                <Card.Text><h5>${props.price}</h5></Card.Text>
                <Button variant={variantFavorites} onClick={()=> addToFavorites(props, pressedFavorites)}> {buttonTextFav}</Button> 
            </Card.Body>
        </Card>
    );
}

export default ProductItem;