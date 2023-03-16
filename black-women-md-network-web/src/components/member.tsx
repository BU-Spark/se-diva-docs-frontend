import React from 'react';
import Card from 'react-bootstrap/Card';

interface MemberProps {
  id: string;
  first_name: string;
  last_name: string;
}

const Member: React.FC<MemberProps> = ({ id, first_name, last_name }) => {
  /*return (
    <div>
      <h2>{id}</h2>
      <p>Email: {first_name}</p>
      <p>Phone: {last_name}</p>
    </div>
  );*/
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{first_name} {last_name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Member;
