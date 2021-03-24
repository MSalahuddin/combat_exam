import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CourseDetails = ({ showModal, toggle, onClosed, details }) => {
    return (
        <Modal isOpen={showModal} toggle={toggle} onClosed={onClosed} size="xl">
            <ModalHeader toggle={toggle}>Course Details</ModalHeader>
            {details && <ModalBody>
                <div className="d-md-flex">
                    <div className="d-flex align-items-center">
                        <span className="room__course-details-box mr-2"></span>
                        <p className="mb-0">{`Instructor: ${details.instructorName}`}</p>
                    </div>
                    <div className="d-flex ml-md-3 align-items-center">
                        <span className="room__course-details-box mr-2"></span>
                        <p className="mb-0">{`Start Date: ${details.startDate}`}</p>
                    </div>

                </div>
                <hr className="my-3 bg-success" />
                {details.details}
            </ModalBody>}
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>Close</Button>
            </ModalFooter>
        </Modal>
    )
}

export default CourseDetails;
