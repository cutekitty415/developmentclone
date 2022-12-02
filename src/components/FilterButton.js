import React from "react";
import Button from 'react-bootstrap/Button';
import {useState} from "react";

function FilterButton(props) {

  const {selectFilterType, eventKey} = props;

  const [pressed, setPressed] = useState(false);
  const [variant, setVariant] = useState("success");

  function handleClick(eventKey, pressed) {
    if (pressed==false){
      selectFilterType(eventKey);
      setVariant("danger");
      setPressed(true);
    } else {
      selectFilterType("All");
      setVariant("success");
      setPressed(false);
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <Button variant={variant} onClick={() => handleClick(eventKey, pressed)}>{eventKey}</Button>
    </div>
  );

};
 
export default FilterButton;
