import React from "react";
import Header from "./components/header/Header";
import Todos from "./components/todos/Todos";
import styled from "styled-components";
import GlobalStyle from "./styles/globalStyles";

const StyledLayout = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledLayout>
        <Header />
        <Todos />
      </StyledLayout>
    </>
  );
}

export default App;
