import type { Story } from "@ladle/react";
import { Container } from "../Components/Container/Container";
import { DraggableContainer } from "../Components/Container/DraggableContainer/DraggableContainer";
import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
  height: "100%",
  margin: "20px 0",
};

const testData = [<div>a</div>, <Container>Container</Container>, <div>c</div>];

export const DraggableContainers = ({}) => {
  const [items, setItems] = useState(testData);

  const deleteDraggable = (e) => {
    console.log(e); //do something here
  };

  const handleDragDrop = (results) => {
    const { source, destination, type } = results;
    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reorderedItems = [...items];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedItem] = reorderedItems.splice(sourceIndex, 1);
      reorderedItems.splice(destinationIndex, 0, removedItem);
      console.log(reorderedItems);

      return setItems(reorderedItems);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        padding: "24px",
      }}
    >
      <DraggableContainer
        content={items}
        onDelete={deleteDraggable}
        onDragEnd={handleDragDrop}
      />
    </div>
  );
};
