import React from "react";
import { SingleToDo } from "../../Todos";
import styled from "styled-components";
import checkIcon from "../../../../assets/images/icon-check.svg";
import { Draggable } from "react-beautiful-dnd";

interface TodoListItemProps {
  todo: SingleToDo;
  todos: SingleToDo[] | [];
  setTodos: React.Dispatch<React.SetStateAction<SingleToDo[] | []>>;
  index: number;
}

const StyledLi = styled.li<{ isCompleted: boolean }>`
  width: 100%;
  box-sizing: border-box;
  padding: 20px 20px 20px 80px;
  margin: 0;
  color: ${(props) =>
    props.isCompleted ? `${props.theme.todoListItemColorCompleted}` : `${props.theme.todoListItemColor}`};
  font-size: 18px;
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
  background-color: ${({ theme }) => theme.todoListItemBackground};
  font-weight: 400;
  border-bottom: 1px solid ${({ theme }) => theme.todoListItemBorder};
  position: relative;
  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

const StyledAction = styled.a<{ isCompleted: boolean }>`
  position: absolute;
  content: "";
  top: 50%;
  padding: 0;
  margin: 0;
  left: 20px;
  transform: translateY(-50%);
  border-radius: 50%;
  border: ${(props) =>
    props.isCompleted
      ? "1px solid linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))"
      : `1px solid ${props.theme.todoListItemBorder}`};
  opacity: 1;
  width: ${(props) => (props.isCompleted ? "28px" : "26px")};
  height: ${(props) => (props.isCompleted ? "28px" : "26px")};
  cursor: pointer;
  background: ${(props) =>
    props.isCompleted ? "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))" : "none"};
  &:hover {
    transition: 1s;
    border: 4px solid linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    background: linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  }
  &::before {
    position: absolute;
    content: url(${checkIcon});
    text-align: center;
    top: 2px;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const StyledInnerButton = styled.div<{ isCompleted: boolean }>`
  position: absolute;
  display: ${(props) => (props.isCompleted ? "none" : "block")};
  content: "";
  width: 22px;
  height: 22px;
  background: ${({ theme }) => theme.todoListItemBackground};
  border-radius: 50%;
  top: 2px;
  left: 2px;
`;
const TodoListItem = React.memo<TodoListItemProps>(({ todo, todos, setTodos, index }) => {
  const handleComplete = () => {
    const newTodos = [...todos];
    console.log(newTodos);
    const x = newTodos.find((item) => item.id === todo.id);
    if (x) {
      x.isCompleted = !x.isCompleted;
    }
    setTodos(newTodos);
  };

  return (
    <Draggable key={todo.id} draggableId={todo.title} index={index}>
      {(provided) => (
        <StyledLi
          isCompleted={todo.isCompleted}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <StyledAction type="button" onClick={handleComplete} isCompleted={todo.isCompleted}>
            <StyledInnerButton isCompleted={todo.isCompleted}></StyledInnerButton>
          </StyledAction>
          {todo.title}
        </StyledLi>
      )}
    </Draggable>
  );
});

export default TodoListItem;
