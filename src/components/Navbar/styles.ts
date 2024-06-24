import styled from "styled-components";

const Header = styled.header`
  background-color: #5d4037;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
const MenuItem = styled.a`
  color: white;
  margin-right: 2rem;
  text-decoration: none;
  cursor: pointer;
`;

const Menu = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerButton = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    color: white;
    font-size: 2rem;
  }
`;

const MobileMenuContainer = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? "block" : "none")};
  background-color: #5d4037;
  color: white;
  padding: 1rem;

  ${MenuItem} {
    display: block;
    margin: 0.5rem 0;
  }
`;

export { Header, Menu, HamburgerButton, MobileMenuContainer, MenuItem };
