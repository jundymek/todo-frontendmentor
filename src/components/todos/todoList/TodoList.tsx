import React from "react";
import { SingleToDo } from "../Todos";
import styled from "styled-components";
import TodoListItem from "./todoListItem.tsx/TodoListItem";

interface TodoListProps {
  todos: SingleToDo[] | [];
  setTodos: React.Dispatch<React.SetStateAction<SingleToDo[] | []>>;
}

const StyledUl = styled.ul`
  list-style-type: none;
  background: hsl(237, 14%, 26%);
  width: 100%;
  margin: 0;
  padding: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const TodoList = React.memo<TodoListProps>(({ todos, setTodos }) => {
  return (
    <StyledUl>
      {todos.map((todo: SingleToDo, index: number) => (
        <TodoListItem todo={todo} key={index} todos={todos} setTodos={setTodos} />
      ))}
    </StyledUl>
  );
});

export default TodoList;
