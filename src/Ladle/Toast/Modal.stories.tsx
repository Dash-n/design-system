import type { Story } from "@ladle/react";
import { Modal } from "../../Components/Modal/Modal.tsx";
import { useState } from "react";

type Props = {
  content: any;
  disabled?: boolean;
  variant?: string;
};

const exampleContent = [
  {
    title: "Appointment Cancelled",
    content: "Physio has cancelled your appointment",
  },
];

export const Modals: Story<Props> = ({}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      <Modal
        modal={modal}
        toggleModal={toggleModal}
        children={<p>Content</p>}
      />
    </div>
  );
};
