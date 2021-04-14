import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTitle = styled.h1``;

const Header = () => {
  return (
    <StyledHeader>
      <h1>TODO</h1>
      <button>*</button>
    </StyledHeader>
  );
};

export default Header;
