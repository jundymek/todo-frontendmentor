import React from "react";
import styled from "styled-components";
import iconSun from "../../assets/images/icon-sun.svg";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
`;

const StyledTitle = styled.h1`
  letter-spacing: 18px;
  font-size: 48px;
  font-weight: 700;
  color: #fff;
`;

const StyledButton = styled.button`
  background: none;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
`;

const StyledIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle>TODO</StyledTitle>
      <StyledButton>
        <StyledIcon src={iconSun} alt="Sun icon" />
      </StyledButton>
    </StyledHeader>
  );
};

export default Header;
