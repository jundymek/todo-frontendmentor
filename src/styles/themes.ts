import bgImageDark from "../assets/images/bg-desktop-dark.jpg";
import bgImageDarkMobile from "../assets/images/bg-mobile-dark.jpg";
import bgImageLight from "../assets/images/bg-desktop-light.jpg";
import bgImageLightMobile from "../assets/images/bg-mobile-light.jpg";

export const lightTheme = {
  backgroundImage: `url(${bgImageLight})`,
  backgroundMobile: `url(${bgImageLightMobile})`,
  backgroundColor: `hsl(236, 33%, 92%)`,
  todosWrapper: `hsl(0, 0%, 98%)`,
  todoListItemBackground: `hsl(0, 0%, 98%)`,
  todoListItemBorder: `hsl(236, 33%, 92%)`,
  todoListItemColorCompleted: `hsl(234, 39%, 85%)`,
  todoListItemColor: `hsl(235, 19%, 35%)`,
  hoverOptionColor: `hsl(237, 14%, 26%)`,
  clearCompletedHoverColor: `hsl(235, 19%, 35%)`,
  todosBoxShadowColor: `hsl(236, 33%, 91%)`,
  dragInfoTextColor: `hsl(236, 9%, 61%)`,
};
export const darkTheme = {
  backgroundImage: `url(${bgImageDark})`,
  backgroundMobile: `url(${bgImageDarkMobile})`,
  backgroundColor: `hsl(235, 21%, 11%)`,
  todosWrapper: `hsl(235, 24%, 19%)`,
  todoListItemBackground: `hsl(235, 24%, 19%)`,
  todoListItemBorder: `hsl(237, 14%, 26%)`,
  todoListItemColorCompleted: `hsl(234, 11%, 52%)`,
  todoListItemColor: `hsl(234, 39%, 85%)`,
  hoverOptionColor: `hsl(236, 33%, 92%)`,
  clearCompletedHoverColor: `hsl(234, 39%, 85%)`,
  todosBoxShadowColor: `hsl(235, 21%, 11%)`,
  dragInfoTextColor: `hsl(234, 11%, 52%)`,
};

export const media = {
  breakpoints: {
    mobile: { value: 450 },
    tablet: { value: 700 },
    desktop: { value: 900 },
  },
};
