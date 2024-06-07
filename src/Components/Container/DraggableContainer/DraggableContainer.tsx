import type { Story } from "@ladle/react";
import styles from "./DraggableContainer.module.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { MdOutlineOpenWith, MdClose } from "react-icons/md";
import { IconContext } from "react-icons";
import { ReactNode } from "react";

type Props = {
  content: any;
  onDragEnd: () => void;
  onDelete: () => void;
};

export const DraggableContainer: Story<Props> = ({
  content,
  onDragEnd,
  onDelete,
}: Props) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="ROOT" type="group">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {content.map((item: ReactNode, index: number) => {
              return (
                <div
                  key={index}
                  style={{
                    margin: "8px",
                  }}
                >
                  <Draggable draggableId={`${index}`} index={index}>
                    {(provided) => (
                      <div
                        className={styles.dragContainer}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <IconContext.Provider value={{ size: "20px" }}>
                          <div
                            className={styles.dragHandle}
                            {...provided.dragHandleProps}
                          >
                            <MdOutlineOpenWith />
                          </div>

                          <div className={styles.containerBody}>
                            {/* Content Body goes Here */}
                            {item}
                          </div>

                          <div className={styles.deleteEnd}>
                            <button
                              className={styles.deleteButton}
                              onClick={onDelete}
                            >
                              <MdClose />
                            </button>
                          </div>
                        </IconContext.Provider>
                      </div>
                    )}
                  </Draggable>
                </div>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
