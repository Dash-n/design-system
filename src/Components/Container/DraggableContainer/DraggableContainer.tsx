import type { Story } from "@ladle/react";
import styles from "./DraggableContainer.module.css";
import { Draggable } from "react-beautiful-dnd";
import { MdOutlineOpenWith, MdClose } from "react-icons/md";
import { IconContext } from "react-icons";

type Props = {
  children: React.ReactNode;
  id: any;
  index: number;
};

export const DraggableContainer: Story<Props> = ({
  id,
  index,
  children,
}: Props) => {
  return (
    <Draggable draggableId={id} key={id} index={index}>
      {(provided) => (
        <div
          className={styles.dragContainer}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <IconContext.Provider value={{ size: "20px" }}>
            <div className={styles.dragHandle} {...provided.dragHandleProps}>
              <MdOutlineOpenWith />
            </div>
            <div className={styles.containerBody}>{children}</div>
            <div className={styles.deleteEnd}>
              <a href="">
                <MdClose />
              </a>
            </div>
          </IconContext.Provider>
        </div>
      )}
    </Draggable>
  );
};
