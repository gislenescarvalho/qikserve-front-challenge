import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  width: 400px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  position: relative;
  padding: 16px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ModalContent = styled.div`
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 8px 0;
`;

const OptionsTitle = styled.div`
  font-weight: bold;
  margin: 16px 0 8px;
`;

const Option = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

const QuantityButton = styled.button`
  background: #8b4513;
  color: white;
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;
  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
`;

const OrderButton = styled.button`
  width: 100%;
  background: #8b4513;
  color: white;
  border: none;
  padding: 16px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
`;

export {
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
};
