import type { Story } from "@ladle/react";
import { Container } from "../Components/Container/Container";
import { DraggableContainer } from "../Components/Container/DraggableContainer/DraggableContainer";
import { Button } from "../Components/Button/Button/Button";

type Props = {
  width?: string;
  height?: string;
  margin?: string;
};

export const Containers: Story<Props> = ({ width, height, margin }) => (
  <div>
    <Container>Test Content</Container>
    <Container width={width} height={height} margin={margin}>
      Test Content
    </Container>
  </div>
);
Containers.args = {
  width: "100%",
  height: "",
  margin: "24px",
};
// Toasts.argTypes

export const DraggableContainers = ({}) => (
  <DraggableContainer></DraggableContainer>
);
