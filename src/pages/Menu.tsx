// App.tsx
import React, { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const Content = styled.div`
  display: flex;
  padding: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainSection = styled.div`
  flex: 3;
`;

const Sidebar = styled.div`
  flex: 1;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: fit-content;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
`;

const CategoryTab = styled.div`
  text-align: center;
  cursor: pointer;
`;

const ItemList = styled.div`
  padding: 1rem 0;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;
`;

const ItemInfo = styled.div``;

const ItemPrice = styled.div``;

const App: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <Content>
        <MainSection>
          <SearchInput type="text" placeholder="Search menu items" />
          <CategoryTabs>
            <CategoryTab>
              <img src="burger-icon.png" alt="Burgers" />
              <div>Burgers</div>
            </CategoryTab>
            <CategoryTab>
              <img src="drinks-icon.png" alt="Drinks" />
              <div>Drinks</div>
            </CategoryTab>
            <CategoryTab>
              <img src="desserts-icon.png" alt="Desserts" />
              <div>Desserts</div>
            </CategoryTab>
          </CategoryTabs>
          <CategoryHeader>
            <h2>Burgers</h2>
            <FaBars />
          </CategoryHeader>
          <ItemList>
            <Item>
              <ItemInfo>
                <h3>Hardcore</h3>
                <p>180g angus beef burger, plus ribs, gruyere cheese...</p>
              </ItemInfo>
              <ItemPrice>R$33,00</ItemPrice>
            </Item>
            <Item>
              <ItemInfo>
                <h3>Smash Brooks</h3>
                <p>Hamburger 100g prensado...</p>
              </ItemInfo>
              <ItemPrice>R$33,00</ItemPrice>
            </Item>
            <Item>
              <ItemInfo>
                <h3>Ogro burger</h3>
                <p>Burger de 180g de carne angus...</p>
              </ItemInfo>
              <ItemPrice>R$33,00</ItemPrice>
            </Item>
          </ItemList>
          <CategoryHeader>
            <h2>Drinks</h2>
            <FaBars />
          </CategoryHeader>
          <ItemList>
            <Item>
              <ItemInfo>
                <h3>Caipirinha</h3>
                <p>com cachaça</p>
              </ItemInfo>
              <ItemPrice>R$13,00</ItemPrice>
            </Item>
            <Item>
              <ItemInfo>
                <h3>Red Label</h3>
                <p></p>
              </ItemInfo>
              <ItemPrice>R$13,00</ItemPrice>
            </Item>
            <Item>
              <ItemInfo>
                <h3>Smirnoff</h3>
                <p></p>
              </ItemInfo>
              <ItemPrice>R$10,00</ItemPrice>
            </Item>
            <Item>
              <ItemInfo>
                <h3>Pink Lemonade</h3>
                <p>Limonada batida com cereja e frutas vermelhas</p>
              </ItemInfo>
              <ItemPrice>R$12,00</ItemPrice>
            </Item>
          </ItemList>
        </MainSection>
        <Sidebar>
          <h2>Carrinho</h2>
          <p>Caipirinha</p>
          <p>R$13,00</p>
          <p>1 item</p>
          <p>Smash Brooks</p>
          <p>R$35,00</p>
          <p>1 item</p>
          <h3>Total: R$48,00</h3>
        </Sidebar>
      </Content>
    </>
  );
};

export default App;
