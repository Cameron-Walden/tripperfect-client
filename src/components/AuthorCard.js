import { Card } from 'react-bootstrap';

const AuthorCard = ({ author }) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={author.img} alt={author.name}/>
        <Card.Body>
          <Card.Title>{author.name}</Card.Title>
          <Card.Text>{author.bio}</Card.Text>
          <Card.Link href={author.linkedin}>LinkedIn</Card.Link>
          <Card.Link href={author.github}>GitHub</Card.Link>
        </Card.Body>
      </Card>
    );
  }

export default AuthorCard;
