import React from "react";
import styled from "styled-components";

interface FilterBySectionProps {
  setFilterBy: React.Dispatch<React.SetStateAction<"all" | "active" | "completed">>;
  filterBy: "all" | "active" | "completed";
}

const StyledFilterOption = styled.span<{ type: string; filterBy: "all" | "active" | "completed" }>`
  color: ${(props) => (props.filterBy === props.type ? "hsl(220, 98%, 61%)" : "hsl(234, 11%, 52%)")};
  cursor: pointer;
  font-size: 14px;
  padding: 0 10px;
  &:hover {
    color: ${({ theme }) => theme.hoverOptionColor};
  }
`;

const FilterBySection = React.memo<FilterBySectionProps>(({ filterBy, setFilterBy }) => {
  return (
    <>
      <StyledFilterOption type="all" filterBy={filterBy} onClick={() => setFilterBy("all")}>
        All
      </StyledFilterOption>
      <StyledFilterOption type="active" filterBy={filterBy} onClick={() => setFilterBy("active")}>
        Active
      </StyledFilterOption>
      <StyledFilterOption type="completed" filterBy={filterBy} onClick={() => setFilterBy("completed")}>
        Completed
      </StyledFilterOption>
    </>
  );
});

export default FilterBySection;
