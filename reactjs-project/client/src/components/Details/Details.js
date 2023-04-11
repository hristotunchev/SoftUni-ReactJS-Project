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
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(`Delete ${car.make} ${car.model}?`);
        // we should do like this: showDeleteDialog(true) + conditional rendering - check Todos demo with bootstrap

        if (result) {
            await carService.delete(car._id);

            // TODO: delete from state
            deleteCar(car._id);

            navigate('/catalog');
        };
    };

    const onEditClick = () => {
        navigate(`/catalog/${car._id}/edit`);
    };

    return (
        <div className="details-card">
            <Card className="details-card">

                <Carousel fade className="carousel">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={car.coverPhotoUrl}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={car.secondPhotoUrl}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={car.thirdPhotoUrl}
                        />
                    </Carousel.Item>
                </Carousel>

                {/* <Card.Img variant="top" src="https://www.concorsodeleganzavilladeste.com/wp-content/uploads/2022/05/88_BMWM1Procar-1200x900.jpg" /> */}

                <Card.Body>
                    <Card.Title>{car.make} {car.model}</Card.Title>
                    <Card.Text>
                        {car.description}
                    </Card.Text>

                    {isOwner && (
                        <div className="btn-container" style={{ justifyContent: "center" }}>
                            <Button variant="primary" className="edit-btn" onClick={onEditClick}>Edit</Button>
                            <Button variant="primary" className="delete-btn" onClick={onDeleteClick}>Delete</Button>
                        </div>
                    )}

                    <Card.Title style={{ fontSize: "1.7rem", marginTop: "1rem" }}>Comments</Card.Title>
                    <ListGroup as="ol">
                        {car.comments && car.comments.map(x => (
                            <Comment key={x._id} author={x.author.email} comment={x.comment} />
                        ))}

                        {/* <li key={x._id} className="comment">
                            <p>{x.author.email}: {x.comment}</p>
                        </li> */}
                        {!car.comments?.length && <p className="no-comment">No comments.</p>}

                    </ListGroup>

                    {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}

                </Card.Body>
            </Card>
        </div>
    );
}