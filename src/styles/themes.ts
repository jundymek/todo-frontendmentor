import bgImageDark from "../assets/images/bg-desktop-dark.jpg";
import bgImageLight from "../assets/images/bg-desktop-light.jpg";

export const lightTheme = {
  backgroundImage: `url(${bgImageLight})`,
  backgroundColor: `hsl(236, 33%, 92%)`,
  todosWrapper: `hsl(0, 0%, 98%)`,
  todoListItemBackground: `hsl(0, 0%, 98%)`,
  todoListItemBorder: `hsl(233, 11%, 84%)`,
  todoListItemColorCompleted: `hsl(234, 39%, 85%)`,
  todoListItemColor: `hsl(235, 19%, 35%)`,
  hoverOptionColor: `hsl(237, 14%, 26%)`,
  clearCompletedHoverColor: `hsl(235, 19%, 35%)`,
};
export const darkTheme = {
  backgroundImage: `url(${bgImageDark})`,
  backgroundColor: `hsl(235, 21%, 11%)`,
  todosWrapper: `hsl(235, 24%, 19%)`,
  todoListItemBackground: `hsl(235, 24%, 19%)`,
  todoListItemBorder: `hsl(237, 14%, 26%)`,
  todoListItemColorCompleted: `hsl(234, 11%, 52%)`,
  todoListItemColor: `hsl(234, 39%, 85%)`,
  hoverOptionColor: `hsl(236, 33%, 92%)`,
  clearCompletedHoverColor: `hsl(234, 39%, 85%)`,
};
