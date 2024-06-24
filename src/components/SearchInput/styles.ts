import styled from "styled-components";

export const SearchBar = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #f5f5f5;
  border-radius: 3px;
  padding: 0 10px;
  box-sizing: border-box;
  input {
    display: flex;
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    &::placeholder {
      color: #999;
    }
  }
  button {
    padding: 0 10px;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    color: #000;
  }
`;
