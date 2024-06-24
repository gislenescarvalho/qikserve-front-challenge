// App.tsx
import React, { useState } from "react";
import {
  Overlay,
  Modal,
  ModalHeader,
  CloseButton,
  ModalImage,
  ModalContent,
  Title,
  Description,
  OptionsTitle,
  Option,
  QuantityControl,
  QuantityButton,
  OrderButton,
} from "./styles";
const App: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Overlay>
        <Modal>
          <ModalHeader>
            <CloseButton onClick={() => alert("Close modal")}>×</CloseButton>
          </ModalHeader>
          <ModalImage
            src="https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="Burger"
          />
          <ModalContent>
            <Title>Smash Brooks</Title>
            <Description>
              100g pressed hamburger, mozzarella cheese, pickles, red onion,
              grilled bacon and traditional Heinz mayonnaise.
            </Description>
            <OptionsTitle>Choose your size</OptionsTitle>
            <div>
              <Option>
                <span>1 meat</span>
                <span>R$33,00</span>
                <input type="radio" name="size" defaultChecked />
              </Option>
              <Option>
                <span>2 meats</span>
                <span>R$50,00</span>
                <input type="radio" name="size" />
              </Option>
            </div>
            <QuantityControl>
              <QuantityButton
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                disabled={quantity === 1}
              >
                −
              </QuantityButton>
              <span>{quantity}</span>
              <QuantityButton onClick={() => setQuantity((prev) => prev + 1)}>
                +
              </QuantityButton>
            </QuantityControl>
            <OrderButton onClick={() => alert(`Added ${quantity} to order`)}>
              Add to Order • $11.75
            </OrderButton>
          </ModalContent>
        </Modal>
      </Overlay>
    </>
  );
};

export default App;
