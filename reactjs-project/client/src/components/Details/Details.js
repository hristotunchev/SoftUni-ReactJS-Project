import { useEffect, useState, useReducer, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import { carServiceFactory } from '../../services/carService.js';
import { useService } from "../../hooks/useService.js";
import * as commentService from '../../services/commentService.js';
import { carReducer } from "../../reducers/carReducer.js";
import { AuthContext } from "../../contexts/AuthContext.js";
import { CarContext } from "../../contexts/CarContext.js";

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';

import Comment from './Comment/Comment.js';
import AddComment from './AddComment/AddComment.js';
import './Details.css';

export default function Details() {
    const { carId } = useParams();
    const { userId, isAuthenticated, userEmail } = useContext(AuthContext);
    const { deleteCar } = useContext(CarContext);
    const [car, dispatch] = useReducer(carReducer, {});
    const carService = useService(carServiceFactory);
    const navigate = useNavigate();
    const [showDeleteVehicle, setShowDeleteVehicle] = useState(false);

    useEffect(() => {
        Promise.all([
            carService.getOne(carId),
            commentService.getAll(carId)
        ])
            .then(([carData, comments]) => {
                const carState = {
                    ...carData,
                    comments
                };

                dispatch({ type: 'CAR_FETCH', payload: carState });
            });
    }, [carId]);

    const onCommentSubmit = async (values) => {
        const response = await commentService.create(carId, values.comment);

        dispatch({
            type: 'COMMENT_ADD',
            payload: response,
            userEmail
        });
    };

    const isOwner = car._ownerId === userId;

    const onDeleteClick = async () => {
            await carService.delete(car._id);

            deleteCar(car._id);

            navigate('/catalog');
    };

    const onEditClick = () => {
        navigate(`/catalog/${car._id}/edit`);
    };

    const handleClose = () => setShowDeleteVehicle(false);
    const handleShow = () => setShowDeleteVehicle(true);

    return (
        <div className="details-card">
            <Card className="details-card">

                <Carousel fade className="carousel">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={car.coverPhotoUrl}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={car.secondPhotoUrl}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={car.thirdPhotoUrl}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

                <Card.Body>
                    <Card.Title className="car-name">{car.make} {car.model}</Card.Title>
                    <Card.Text className="car-info">
                        {car.description}
                    </Card.Text>

                    {isOwner && (
                        <div className="btn-container" style={{ justifyContent: "center" }}>
                            <Button variant="primary" className="edit-btn" onClick={onEditClick}>Edit</Button>
                            <Button variant="primary" className="delete-btn" onClick={handleShow}>Delete</Button>
                        </div>
                    )}

                    <Card.Title style={{ fontSize: "1.7rem", marginTop: "1rem" }}>Comments</Card.Title>
                    <ListGroup as="ol">
                        {car.comments && car.comments.map(x => (
                            <Comment key={x._id} author={x.author.email} comment={x.comment} />
                        ))}

                        {!car.comments?.length && <p className="no-comment">No comments yet.</p>}

                    </ListGroup>

                    {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}

                </Card.Body>
            </Card>

            <Modal className="delete-modal" show={showDeleteVehicle} onHide={handleClose}>
                <Modal.Header className="mdheader" closeButton>
                    <Modal.Title><span style={{fontSize: "30px"}}>Delete vehicle</span></Modal.Title>
                </Modal.Header>
                <Modal.Body className="mdb">Are you sure you want to delete <span style={{fontWeight: "bold"}}>{car.make} {car.model}</span>?</Modal.Body>
                <Modal.Footer className="mdfooter">
                    <Button variant="secondary" className="mdcb" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" className="mddb" onClick={onDeleteClick}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
