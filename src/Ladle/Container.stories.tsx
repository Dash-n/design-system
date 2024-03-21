import type { Story } from "@ladle/react";
import { Container } from "../Components/Container/Container";
import { DraggableContainer } from "../Components/Container/DraggableContainer/DraggableContainer";
import { useState } from "react";
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
  margin: "24px",
};

const testData = [
  {
    id: "one",
    items: ["Johnny", "Billy", "Tom"],
  },
  {
    id: "two",
    items: ["Jimmy"],
  },
];

export const DraggableContainers = ({}) => {
  const [items, setItems] = useState(testData);

  const handleDragDrop = (results) => {
    const { source, destination, type } = results;
    console.log(results);
    console.log(destination, source);
    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;
    const sourceIndex = source.index;
    const destinationIndex = destination.index;

    if (type === "group") {
      const reorderedItems = [...items];

      const [removedItem] = reorderedItems.splice(sourceIndex, 1);
      reorderedItems.splice(destinationIndex, 0, removedItem);

      return setItems(reorderedItems);
    }

    const itemSourceIndex = items.findIndex(
      (item) => item.id === source.droppableId
    );
    const itemDestinationIndex = items.findIndex(
      (item) => item.id === destination.droppableId
    );
    const newSourceItems = [...items[itemSourceIndex].items];
    const newDestinationItems =
      source.droppableId !== destination.droppableId
        ? [...items[itemDestinationIndex].items]
        : newSourceItems;

    const [deletedItem] = newSourceItems.splice(sourceIndex, 1);
    newDestinationItems.splice(destinationIndex, 0, deletedItem);

    const newItems = [...items];

    newItems[itemSourceIndex] = {
      ...items[itemSourceIndex],
      items: newSourceItems,
    };
    newItems[itemDestinationIndex] = {
      ...items[itemDestinationIndex],
      items: newDestinationItems,
    };

    setItems(newItems);
  };

  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        padding: "24px",
      }}
    >
      <DraggableContainer content={testData} onDragEnd={handleDragDrop} />
    </div>
  );
};
// DraggableContainers.args = {
//   testData: ["red", "blue", "yellow"],
// };
