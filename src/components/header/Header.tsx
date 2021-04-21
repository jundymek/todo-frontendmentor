import React from "react";
import styled from "styled-components";
import iconSun from "../../assets/images/icon-sun.svg";
import iconMoon from "../../assets/images/icon-moon.svg";
import whatInput, { InputMethod } from "what-input";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  @media (max-width: 800px) {
    margin-top: 26px;
  }
`;

const StyledTitle = styled.h1`
  letter-spacing: 18px;
  font-size: 48px;
  font-weight: 700;
  color: #fff;
  @media (max-width: 800px) {
    font-size: 24px;
  }
`;

const StyledButton = styled.button<{ input: InputMethod }>`
  background: none;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  &:focus {
    outline: ${(props) => props.input === "mouse" && "none"};
  }
`;

const StyledIcon = styled.img`
  width: 30px;
  height: 30px;
  @media (max-width: 800px) {
    width: 22px;
    height: 22px;
  }
`;

interface HeaderProps {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

const Header = React.memo<HeaderProps>(({ theme, setTheme }) => {
  console.log(whatInput.ask("intent"));
  const handleChangeTheme = () => {
    setTheme((prevState) => {
      if (prevState === "light") {
        return "dark";
      }
      return "light";
    });
  };

  const icon = theme === "light" ? iconMoon : iconSun;

  return (
    <StyledHeader>
      <StyledTitle>TODO</StyledTitle>
      <StyledButton input={whatInput.ask()}>
        <StyledIcon src={icon} alt="Sun icon" onClick={handleChangeTheme} />
      </StyledButton>
    </StyledHeader>
  );
});

export default Header;
