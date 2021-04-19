import React, { useState } from "react";
import styled from "styled-components";
import TodoList from "./todoList/TodoList";
import FilterBySection from "./todoList/todoOptions/FilterBySection";
import TodoOptions from "./todoList/todoOptions/TodoOptions";

const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  @media (min-width: 800px) {
    margin-top: 40px;
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
  margin: 0;
  border: none;
  border-radius: 5px;
  color: hsl(234, 11%, 52%);
  font-size: 18px;
  background-color: ${({ theme }) => theme.todoListItemBackground};
  font-weight: 400;
  &::placeholder {
    color: hsl(234, 11%, 52%);
    font-size: 18px;
  }
`;

const TodosWrapper = styled.div`
  border-radius: 5px;
  background: ${({ theme }) => theme.todosWrapper};
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const StyledFilterMobile = styled.div`
  width: 100%;
  border-radius: 5px;
  margin-top: 30px;
  padding: 20px 0;
  background: ${({ theme }) => theme.todosWrapper};
  display: flex;
  justify-content: center;
  @media (min-width: 800px) {
    display: none;
  }
`;

const StyledDivMobile = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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

  const setId = () => {
    if (todos.length) {
      return Math.max(...todos.map((todo: any) => todo.id)) + 1;
    }
    return 1;
  };
  const handleSubmit = (e: React.FormEvent) => {
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
    </StyledWrapper>
  );
};

export default Todos;
