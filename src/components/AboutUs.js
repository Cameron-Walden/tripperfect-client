import { Container, Row } from 'react-bootstrap'
import AuthorCard from "./AuthorCard";
import bios from '../teamBios.json';

const AboutUs = () => {
    return (
      <>
        <h1>Meet the Team!</h1>
        <Container
          fluid
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Row xs={1} sm={2} md={3} lg={5}>
            {bios.authors.map((author, idx) => (
              <AuthorCard
                key={idx}
                author={author}
              />
            ))}
          </Row>
        </Container>
      </>
    );
  }

export default AboutUs;
