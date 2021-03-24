import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

import BookImg from "../../assets/reader.png";

export default () => {
  return (
    <div>
      <Row className="single-book">
        <Col md={5}>
          <div className="large-thumb">
            <img src={BookImg} />
          </div>
        </Col>
        <Col>
          <h2>Books title</h2>
          <p>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed
            to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
            type specimen book.
          </p>
          <div className="price">Price:- 1200 PKR</div>
          <div className="buttons">
            <button className="button">Buy</button>
          </div>
        </Col>
      </Row>
      <div className="related-products">
        <h2>Related books</h2>
        <Row>
          {data.map((e) => (
            <Col md={3}>
              <Book value={e} />
            </Col>
          ))}
        </Row>
      </div>
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
