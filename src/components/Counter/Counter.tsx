import React from "react";
import { QuantityButton, QuantityControl } from "../Modal/styles";

interface Props {
  quantity;
  setQuantity;
}
const Counter: React.FC<Props> = ({ quantity, setQuantity }) => {
  return (
    <>
      <QuantityControl>
        <QuantityButton onClick={setQuantity} disabled={quantity === 1}>
          −
        </QuantityButton>
        <span>{quantity}</span>
        <QuantityButton onClick={setQuantity}>+</QuantityButton>
      </QuantityControl>
    </>
  );
};

export default Counter;
