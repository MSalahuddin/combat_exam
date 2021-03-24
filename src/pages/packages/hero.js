import React from "react";
import { Container } from "reactstrap";
import ShareButtons from "../../components/shareButtons";

export default () => (
  <div>
    <div className="hero">
      <Container>
        <h2>Mock Tests</h2>
        <p>Attempt our carefully curated mock tests that are closest to the actual exam.</p>
      </Container>
    </div>
    <div className="sub-hero">
      <ShareButtons link="https://bit.ly/3tfAtpz" />
    </div>
  </div>
);
