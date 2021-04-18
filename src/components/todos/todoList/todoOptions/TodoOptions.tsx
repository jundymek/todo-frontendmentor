import React from "react";
import styled from "styled-components";
import { SingleToDo } from "../../Todos";

const OptionsWrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: hsl(234, 11%, 52%);
`;

const StyledItemCounter = styled.span`
  font-size: 12px;
`;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 30%;
`;

const StyledFilterOption = styled.span<{ type: string; filterBy: "all" | "active" | "completed" }>`
  color: ${(props) => (props.filterBy === props.type ? "hsl(220, 98%, 61%)" : "hsl(234, 11%, 52%)")};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.hoverOptionColor};
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
    <OptionsWrapper>
      <StyledItemCounter>{leftItems} Items left</StyledItemCounter>
      <StyledDiv>
        <StyledFilterOption type="all" filterBy={filterBy} onClick={() => setFilterBy("all")}>
          All
        </StyledFilterOption>
        <StyledFilterOption type="active" filterBy={filterBy} onClick={() => setFilterBy("active")}>
          Active
        </StyledFilterOption>
        <StyledFilterOption type="completed" filterBy={filterBy} onClick={() => setFilterBy("completed")}>
          Completed
        </StyledFilterOption>
      </StyledDiv>
      <StyledSpan onClick={handleClearCompleted}>Clear completed</StyledSpan>
    </OptionsWrapper>
  );
});

export default TodoOptions;
