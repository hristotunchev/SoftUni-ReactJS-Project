import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './CatalogItem.css';

export default function CatalogItem({
    _id,
    make,
    model,
    coverPhotoUrl
}) {
    return (
        <Col>
            <Card className="catalogItem-card">
                <Card.Img variant="top" src={coverPhotoUrl} />
                <Card.Body>
                    <Card.Title className="ctlg-car-name">{make} {model}</Card.Title>
                </Card.Body>
                <Button as={Link} to={`/catalog/${_id}`} className="details-btn">Details</Button>
            </Card>
        </Col>
    );
};