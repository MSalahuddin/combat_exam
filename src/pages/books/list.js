import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";
import api from "../../services/api";
import { toastr } from "react-redux-toastr";

const imageURL = "http://panel.combatexam.com/public/book_images";

export default (props) => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(async () => {
    try {
      const res = await api.get(
        props?.location?.state?.categoryId
          ? `${"/books_category_wise"}/${props?.location?.state?.categoryId}`
          : "/get_books"
      );
      if (res.data) {
        setAllBooks(res.data);
      }
    } catch (e) {
      if (e.message) toastr.error(e.message);
    }
  }, [props?.location?.state?.categoryId]);

  if (!allBooks.length) return <Container>Loading...</Container>;

  return (
    <div>
      <Row>
        {allBooks.map((e) => (
          <Col md={3}>
            <Book value={e} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

const Book = ({ value }) => {
  let image = JSON.parse(value.book_images);

  return (
    <div className="card-wrapper">
      <div className="thumb">
        <Link to={{ pathname: `/books/${value.id}` }}>
          <img src={`${imageURL}/${image.cover}`} />
        </Link>
      </div>
      <h4>{value.title}</h4>
      <p>{value.short_description}</p>
      <span className="price">{value.price}</span>
      <div className="buttons">
        <Link to={{ pathname: `/books/${value.id}` }} className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};
