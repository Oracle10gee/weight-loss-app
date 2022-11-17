import React from "react";
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";

const ModalHandler = () => {
  // Modal open state
  const [modal, setModal] = React.useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} modalTransition={{ timeout: 2000 }}>
        <ModalBody>Simple Modal with just ModalBody...</ModalBody>
      </Modal>
    </div>
  );
};

export default ModalHandler;
