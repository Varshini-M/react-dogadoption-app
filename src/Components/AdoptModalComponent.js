import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
function AdoptModal(props) {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    let history = useHistory()
    const yesHandler = (event) => {
        event.preventDefault();
        history.push(`/Adopt/${props.pupDetails.id}`);
    };
    return (
        <React.Fragment>
            <Modal show={show} onHide={handleClose} keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.description}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="primary" onClick={yesHandler} >Yes</Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
};

export default AdoptModal;