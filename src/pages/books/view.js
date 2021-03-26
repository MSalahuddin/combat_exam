import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";
import { toastr } from "react-redux-toastr";
import api from "../../services/api";
const imageURL = "http://panel.combatexam.com/public/book_images";

export default (props) => {
  const [bookData, setBookData] = useState({});
  const [bookImage, setBookImage] = useState({});
  const [allBooks, setAllBooks] = useState([]);

  useEffect(async () => {
    try {
      const res = await api.get(
        `${"/get_book"}/${props?.match?.params?.bookId}`
      );
      if (res.data) {
        setBookData(res.data);
        setBookImage(JSON.parse(res.data.book_images));
      }
    } catch (e) {
      if (e.message) toastr.error(e.message);
    }
    try {
      const res = await api.get("/get_books");
      if (res.data) {
        setAllBooks(res.data);
      }
    } catch (e) {
      if (e.message) toastr.error(e.message);
    }
  }, [props?.match?.params?.bookId]);

  if (!bookData || !allBooks.length) return <Container>Loading...</Container>;

  return (
    <div>
      <Row className="single-book">
        <Col md={5}>
          <div className="large-thumb">
            <img src={`${imageURL}/${bookImage.cover}`} />
          </div>
        </Col>
        <Col>
          <h2>{bookData.title}</h2>
          <p>{bookData.short_description}</p>
          <div className="price">Price:- {bookData.price} PKR</div>
          <div className="buttons">
            <button className="button">Buy</button>
          </div>
        </Col>
      </Row>
      <div className="related-products">
        <h2>Related books</h2>
        <Row>
          {allBooks.map((e) => (
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
