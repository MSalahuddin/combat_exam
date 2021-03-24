import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

import Header from "../../components/header";

import List from "./list";
import View from "./view";

import "./index.scss";

export default () => {
  return (
    <div className="book-page">
      <Container style={{ padding: "30px 0" }}>
        <h2 className="title">Books</h2>
        <Row>
          <Col md={3}>
            <ul className="sidebar">
              <li>
                <NavLink exact to="/books/FPSC">
                  FPSC
                </NavLink>
              </li>
              <li>
                <NavLink to="/books/PPSC">PPSC</NavLink>
              </li>
              <li>
                <NavLink to="/books/KPPSC">KPPSC</NavLink>
              </li>
              <li>
                <NavLink to="/books/SPSC">SPSC</NavLink>
              </li>
              <li>
                <NavLink to="/books/Miscellaneous">Miscellaneous</NavLink>
              </li>
            </ul>
          </Col>
          <Col>
            <Switch>
              <Route path="/books/:category/:bookId" component={View} />
              <Route path="/books/:category" component={List} />
              <Route path="/books" component={List} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
