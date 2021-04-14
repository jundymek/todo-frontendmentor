import React from "react";
import Header from "./components/header/Header";
import Todo from "./components/todo/Todo";
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
        <Todo />
      </StyledLayout>
    </>
  );
}

export default App;
