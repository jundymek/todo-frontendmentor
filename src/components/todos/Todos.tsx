import React, { useState } from "react";
import styled from "styled-components";
import TodoList from "./todoList/TodoList";

const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 100px;
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

const TodosWrapper = styled.div`
  border-radius: 10px;
  background: hsl(237, 14%, 26%);
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const OptionsWrapper = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: hsl(234, 11%, 52%);
`;

export interface SingleToDo {
  id: number;
  title: string;
  isCompleded: boolean;
}

const Todos = () => {
  const [newToDo, setNewToDo] = useState("");
  const [todos, setTodos] = useState<SingleToDo[] | []>([]);

  const setId = () => {
    if (todos.length) {
      return Math.max(...todos.map((todo: any) => todo.id)) + 1;
    }
    return 1;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos((prevState) => [...prevState, { title: newToDo, isCompleded: false, id: setId() }]);
  };

  const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setNewToDo(e.target.value);
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
      <TodosWrapper>
        <TodoList todos={todos} setTodos={setTodos} />
        <OptionsWrapper>
          <p>Items left</p>
          <div>
            <span>All</span>
            <span>Active</span>
            <span>Completed</span>
          </div>
          <p>Clear completed</p>
        </OptionsWrapper>
      </TodosWrapper>
    </StyledWrapper>
  );
};

export default Todos;
