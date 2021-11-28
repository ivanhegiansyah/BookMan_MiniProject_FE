import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import FormEdit from "./FormEdit";
import "./Form.css";

export default function Modals(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="btn text-white mt-2 btn-submit"
        style={{ backgroundColor: "#1f332b" }}
        onClick={handleShow}
      >
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormEdit datas={props.data} updateBook={props.updateBook} />
        </Modal.Body>
      </Modal>
    </>
  );
}
