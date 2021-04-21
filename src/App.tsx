import React, { useState } from "react";
import Header from "./components/header/Header";
import Todos from "./components/todos/Todos";
import styled from "styled-components";
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes";

const StyledLayout = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <StyledLayout>
        <Header theme={theme} setTheme={setTheme} />
        <Todos />
      </StyledLayout>
    </ThemeProvider>
  );
}

export default App;
