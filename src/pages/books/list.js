import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

import BookImg from "../../assets/reader.png";

export default () => {
  return (
    <div>
      <Row>
        {data.map((e) => (
          <Col md={3}>
            <Book value={e} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

const Book = ({ value }) => {
  return (
    <div className="card-wrapper">
      <div className="thumb">
        <Link to="/books/category/bookid">
          <img src={BookImg} />
        </Link>
      </div>
      <h4>{value.name}</h4>
      <p>{value.details}</p>
      <span className="price">{value.price}</span>
      <div className="buttons">
        <Link to="/books/category/bookid" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

const data = [
  {
    name: "Book Title",
    details: "Book ID",
    price: "Price:- 1200pkr",
  },
  {
    name: "Book Title",
    details: "Book ID",
    price: "Price:- 1200pkr",
  },
  {
    name: "Book Title",
    details: "Book ID",
    price: "Price:- 1200pkr",
  },
];
