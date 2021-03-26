import React, { useEffect, useState } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import api from "../../services/api";
import { toastr } from "react-redux-toastr";

import List from "./list";
import View from "./view";

import "./index.scss";

export default (props) => {
  const [bookCategories, setBookCategories] = useState([]);

  useEffect(async () => {
    try {
      const res = await api.get("/get_book_categories");
      if (res.data) {
        setBookCategories(res.data);
      }
    } catch (e) {
      if (e.message) toastr.error(e.message);
    }
  }, []);

  return (
    <div className="book-page">
      <Container style={{ padding: "30px 0" }}>
        <h2 className="title">Books</h2>
        <Row>
          <Col md={3}>
            <ul className="sidebar">
              {bookCategories.map((val) => {
                return (
                  <li>
                    <NavLink
                      exact
                      to={{
                        pathname: "/books",
                        state: {
                          categoryId: val.id,
                        },
                      }}
                    >
                      {val.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col>
            <Switch>
              <Route path="/books/:bookId" component={View} />
              <Route path="/books" component={List} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
