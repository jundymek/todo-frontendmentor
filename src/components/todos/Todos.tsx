import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoList from "./todoList/TodoList";
import FilterBySection from "./todoList/todoOptions/FilterBySection";
import TodoOptions from "./todoList/todoOptions/TodoOptions";

const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 800px) {
    margin-top: 20px;
  }
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
    border: 1px solid ${({ theme }) => theme.todoListItemBorder};
    width: 26px;
    height: 26px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 20px 20px 20px 80px;
  font-size: 18px;
  margin: 0;
  border: none;
  font-family: "Josefin Sans", sans-serif;
  border-radius: 5px;
  color: ${({ theme }) => theme.todoListItemTextColor};
  background-color: ${({ theme }) => theme.todoListItemBackground};
  font-weight: 400;
  &::placeholder {
    color: ${({ theme }) => theme.todoListItemTextColor};
    font-size: 18px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
    padding: 20px 20px 20px 60px;
    &::placeholder {
      font-size: 12px;
    }
  }
`;

const TodosWrapper = styled.div`
  border-radius: 5px;
  width: 100%;
  background: ${({ theme }) => theme.todosWrapper};
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const StyledFilterMobile = styled.div`
  width: 100%;
  border-radius: 5px;
  margin-top: 20px;
  padding: 20px 0;
  background: ${({ theme }) => theme.todosWrapper};
  display: none;
  justify-content: center;
  @media (max-width: 800px) {
    display: flex;
    font-size: 14px;
  }
`;

const StyledDivMobile = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
`;

const StyledDragInfo = styled.p`
  margin-top: 50px;
  font-size: 14px;
  color: ${({ theme }) => theme.dragInfoTextColor};
`;

export interface SingleToDo {
  id: number;
  title: string;
  isCompleted: boolean;
}

const Todos = () => {
  const [newToDo, setNewToDo] = useState("");
  const [todos, setTodos] = useState<SingleToDo[] | []>([]);
  const [filterBy, setFilterBy] = useState<"all" | "active" | "completed">("all");

  useEffect(() => {
    const localStorageTodos = localStorage.getItem("todos");
    if (localStorageTodos?.length) {
      setTodos(JSON.parse(localStorageTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const setId = () => {
    if (todos.length) {
      return Math.max(...todos.map((todo: any) => todo.id)) + 1;
    }
    return 1;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTodos((prevState) => [...prevState, { title: newToDo, isCompleted: false, id: setId() }]);
    setNewToDo("");
  };

  const filteredTodos = () => {
    switch (filterBy) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => todo.isCompleted === false);
      case "completed":
        return todos.filter((todo) => todo.isCompleted === true);
    }
  };

  const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setNewToDo(e.target.value);
  };
  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          value={newToDo}
          type="text"
          onChange={handleChange}
          placeholder="Create a new todo..."
          aria-label="Create a new todo..."
        />
      </StyledForm>
      <TodosWrapper>
        <TodoList todos={filteredTodos()} setTodos={setTodos} />
        <TodoOptions todos={todos} setTodos={setTodos} filterBy={filterBy} setFilterBy={setFilterBy} />
      </TodosWrapper>
      <StyledFilterMobile>
        <StyledDivMobile>
          <FilterBySection filterBy={filterBy} setFilterBy={setFilterBy} />
        </StyledDivMobile>
      </StyledFilterMobile>
      <StyledDragInfo>Drag and drop to reorder list</StyledDragInfo>
    </StyledWrapper>
  );
};

export default Todos;
