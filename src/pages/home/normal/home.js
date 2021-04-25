import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Col,
    Container,
    Row,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button
} from "reactstrap";
import vector from '../../../assets/homeArt.png';
import Form from '../../../components/auth/Institute/signUp'

export default () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <section className="mainScreen">
            <Container>
                <Row>
                    <Col className="intro">
                        <h1>Online</h1>
                        <h2>Examination System</h2>
                        <hr />
                        <p>
                            Register your institute and power <br />
              your online examination
              <br /> system with us.
            </p>
                        <Link to="/Institute-SignUP">
                            <button>Sign Up</button>
                        </Link>
                    </Col>
                    <Col className="vectorArt">
                        <img src={vector} height={450} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};