import type { Story } from "@ladle/react";
import { Container } from "../Components/Container/Container";
import { DraggableContainer } from "../Components/Container/DraggableContainer/DraggableContainer";
import { Button } from "../Components/Button/Button/Button";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

type Props = {
  width?: string;
  height?: string;
  margin?: string;
};

const Data = [
  {
    name: "One",
    color: "red",
  },
  {
    name: "Two",
    color: "Blue",
  },
];

// const testData = [
//   "one", "two"
// ]

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

export const DraggableContainers = ({ testData }) => {
  const [items, setItems] = useState(testData);

  const handleDragDrop = (results) => {
    // console.log(results);
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
      <DragDropContext onDragEnd={handleDragDrop}>
        <Droppable droppableId="ROOT" type="group">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) => (
                <div
                  style={{
                    margin: "8px",
                  }}
                >
                  <DraggableContainer id={item} index={index}>
                    {item}
                  </DraggableContainer>
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
DraggableContainers.args = {
  testData: ["red", "blue", "yellow"],
};
