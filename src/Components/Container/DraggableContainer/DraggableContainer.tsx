import type { Story } from "@ladle/react";
import styles from "./DraggableContainer.module.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { MdOutlineOpenWith, MdClose } from "react-icons/md";
import { IconContext } from "react-icons";
import {
  ClassAttributes,
  HTMLAttributes,
  LegacyRef,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import { JSX } from "react/jsx-runtime";

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
        {(provided: {
          droppableProps: JSX.IntrinsicAttributes &
            ClassAttributes<HTMLDivElement> &
            HTMLAttributes<HTMLDivElement>;
          innerRef: LegacyRef<HTMLDivElement> | undefined;
          placeholder:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | null
            | undefined;
        }) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {content.map((item: React.ReactNode, index: number) => {
              return (
                <div
                  style={{
                    margin: "8px",
                  }}
                >
                  <Draggable draggableId={`${index}`} key={item} index={index}>
                    {(provided: {
                      draggableProps: JSX.IntrinsicAttributes &
                        ClassAttributes<HTMLDivElement> &
                        HTMLAttributes<HTMLDivElement>;
                      innerRef: LegacyRef<HTMLDivElement> | undefined;
                      dragHandleProps: JSX.IntrinsicAttributes &
                        ClassAttributes<HTMLDivElement> &
                        HTMLAttributes<HTMLDivElement>;
                    }) => (
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

                          {/* Content Body goes Here */}
                          <div className={styles.containerBody}>{item}</div>

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
