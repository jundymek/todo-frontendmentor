import React from "react";
import { SingleToDo } from "../Todos";
import styled from "styled-components";
import TodoListItem from "./todoListItem.tsx/TodoListItem";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

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
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const TodoList = React.memo<TodoListProps>(({ todos, setTodos }) => {
  const handleDragList = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    const swappedTodos = [...todos];
    const [reorderedTodo] = swappedTodos.splice(source.index, 1);
    swappedTodos.splice(destination.index, 0, reorderedTodo);
    setTodos(swappedTodos);
  };

  return (
    <DragDropContext onDragEnd={handleDragList}>
      <Droppable droppableId="todos">
        {(provided) => (
          <StyledUl {...provided.droppableProps} ref={provided.innerRef}>
            {todos.map((todo: SingleToDo, index: number) => (
              <TodoListItem todo={todo} key={todo.id} todos={todos} setTodos={setTodos} index={index} />
            ))}
            {provided.placeholder}
          </StyledUl>
        )}
      </Droppable>
    </DragDropContext>
  );
});

export default TodoList;
