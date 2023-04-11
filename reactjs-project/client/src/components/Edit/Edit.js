import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { CarContext } from '../../contexts/CarContext.js';
import { useForm } from "../../hooks/useForm.js";
import { useService } from "../../hooks/useService.js";
import { carServiceFactory } from "../../services/carService.js";

import './Edit.css';

export default function Edit() {
    const { onCarEditSubmit } = useContext(CarContext);
    const { carId } = useParams();
    const carService = useService(carServiceFactory);
    
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        make: '',
        model: '',
        coverPhotoUrl: '',
        secondPhotoUrl: '',
        thirdPhotoUrl: '',
        description: ''
    }, onCarEditSubmit);

    useEffect(() => {
        carService.getOne(carId)
            .then(result => {
                changeValues(result);
            });
    }, [carId]);

    return (
        <div className="form-container">
            <Form className="edit-form" method="POST" onSubmit={onSubmit}>
                <Form.Label className="form-label">Edit Vehicle</Form.Label>

                <Form.Group className="mb-3">
                    {/* <Form.Label>Name</Form.Label> */}
                    <Form.Control
                        type="text"
                        placeholder="Make"
                        name="make"
                        value={values.make}
                        onChange={changeHandler}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    {/* <Form.Label>Model</Form.Label> */}
                    <Form.Control
                        type="text"
                        placeholder="Model"
                        name="model"
                        value={values.model}
                        onChange={changeHandler}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    {/* <Form.Label>Model</Form.Label> */}
                    <Form.Control
                        type="text"
                        placeholder="Cover Photo URL"
                        name="coverPhotoUrl"
                        value={values.coverPhotoUrl}
                        onChange={changeHandler}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    {/* <Form.Label>Image URL</Form.Label> */}
                    <Form.Control
                        type="text"
                        placeholder="Photo 2 URL"
                        name="secondPhotoUrl"
                        value={values.secondPhotoUrl}
                        onChange={changeHandler}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    {/* <Form.Label>Image URL</Form.Label> */}
                    <Form.Control
                        type="text"
                        placeholder="Photo 3 URL"
                        name="thirdPhotoUrl"
                        value={values.thirdPhotoUrl}
                        onChange={changeHandler}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Control
                        as="textarea"
                        placeholder="Description"
                        style={{ height: '100px', marginBottom: '15px' }}
                        name="description"
                        value={values.description}
                        onChange={changeHandler}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="submit-btn">
                    Edit
                </Button>
            </Form>
        </div>
    );
};