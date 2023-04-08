import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import './Catalog.css';

export default function Catalog() {
    return (
        <Row xs={3} md={4} className="g-4" style={{margin: '0px 15px 0px 15px'}}>
          {Array.from({ length: 5 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src="https://images.ams.bg/images/galleries/216382/bmw-seriya-5-2023-1636665662_big.jpg" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Button as={Link} to="/item/details" className="details-btn">Details</Button>
              </Card>
            </Col>
          ))}
        </Row>
      );
};