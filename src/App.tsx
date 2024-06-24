// App.tsx
import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
`;

const App: React.FC = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <GlobalStyle />
    </>
  );
};

export default App;
