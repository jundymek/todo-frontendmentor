import React, { useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledForm = styled.form`
  margin: 20px 0;
  width: 100%;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    display: block;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    border-radius: 50%;
    border: 1px solid hsl(234, 11%, 52%);
    opacity: 0.3;
    width: 24px;
    height: 24px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 20px 20px 20px 60px;
  margin: 0;
  border: none;
  border-radius: 5px;
  color: hsl(234, 11%, 52%);
  font-size: 18px;
  background-color: hsl(237, 14%, 26%);
  font-weight: 400;
  &::placeholder {
    color: hsl(234, 11%, 52%);
    font-size: 18px;
  }
`;

const Todo = () => {
  const [newToDo, setNewToDo] = useState("");
  const handleSubmit = () => {};

  const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setNewToDo(e.target.value);
    console.log(newToDo);
  };
  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          onChange={handleChange}
          placeholder="Create a new todo..."
          aria-label="Create a new todo..."
        />
      </StyledForm>
      To jest todo
    </StyledWrapper>
  );
};

export default Todo;
