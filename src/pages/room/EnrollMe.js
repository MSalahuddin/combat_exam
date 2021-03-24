import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const EnrollMe = ({ isOpen, toggle }) => {
    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Enrollment</ModalHeader>
            <ModalBody>
                <div className="d-flex justify-content-between">
                    <a href="https://api.whatsapp.com/message/77YFI3AZSYBSM1" target="_blank" rel="noreferrer" >
                        <Button color="success" >Contact via whatsapp</Button>
                    </a>
                    <Link to="/contact" >
                        <Button color="success" >Open the ticket</Button>
                    </Link>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default EnrollMe;
