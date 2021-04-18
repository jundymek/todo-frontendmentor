import React from "react";
import styled from "styled-components";
import { SingleToDo } from "../../Todos";
import FilterBySection from "./FilterBySection";

const OptionsWrapper = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: hsl(234, 11%, 52%);
  @media (max-width: 800px) {
    padding: 20px 20px;
  }
`;

const StyledItemCounter = styled.span`
  font-size: 12px;
`;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 30%;
  @media (max-width: 800px) {
    display: none;
  }
`;

const StyledSpan = styled.span`
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.clearCompletedHoverColor};
  }
`;

interface TodoOptionsProps {
  todos: SingleToDo[] | [];
  setTodos: React.Dispatch<React.SetStateAction<SingleToDo[] | []>>;
  setFilterBy: React.Dispatch<React.SetStateAction<"all" | "active" | "completed">>;
  filterBy: "all" | "active" | "completed";
}

const TodoOptions = React.memo<TodoOptionsProps>(({ todos, setTodos, filterBy, setFilterBy }) => {
  const leftItems = todos.filter((todo: SingleToDo) => todo.isCompleted === false).length;

  const handleClearCompleted = () => {
    const newTodos = todos.filter((todo) => todo.isCompleted === false);
    setTodos(newTodos);
  };
  return (
    <>
      <OptionsWrapper>
        <StyledItemCounter>{leftItems} Items left</StyledItemCounter>
        <StyledDiv>
          <FilterBySection filterBy={filterBy} setFilterBy={setFilterBy} />
        </StyledDiv>
        <StyledSpan onClick={handleClearCompleted}>Clear completed</StyledSpan>
      </OptionsWrapper>
    </>
  );
});

export default TodoOptions;
