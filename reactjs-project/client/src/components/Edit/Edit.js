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

    const { values, changeHandler, onSubmit, changeValues, errors } = useForm({
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

                <Form.Group className="form-group">
                    <Form.Label className="input-label">Make</Form.Label>
                    <Form.Control
                        type="text"
                        name="make"
                        value={values.make}
                        onChange={changeHandler}
                    />
                    {errors.make && <p className="input-err-msg">{errors.make}</p>}
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Label className="input-label">Model</Form.Label>
                    <Form.Control
                        type="text"
                        name="model"
                        value={values.model}
                        onChange={changeHandler}
                    />
                    {errors.model && <p className="input-err-msg">{errors.model}</p>}
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Label className="input-label">Cover Photo URL</Form.Label>
                    <Form.Control
                        type="text"
                        name="coverPhotoUrl"
                        value={values.coverPhotoUrl}
                        onChange={changeHandler}
                    />
                    {errors.coverPhotoUrl && <p className="input-err-msg">{errors.coverPhotoUrl}</p>}
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Label className="input-label">Photo 2 URL</Form.Label>
                    <Form.Control
                        type="text"
                        name="secondPhotoUrl"
                        value={values.secondPhotoUrl}
                        onChange={changeHandler}
                    />
                    {errors.secondPhotoUrl && <p className="input-err-msg">{errors.secondPhotoUrl}</p>}
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Label className="input-label">Photo 3 URL</Form.Label>
                    <Form.Control
                        type="text"
                        name="thirdPhotoUrl"
                        value={values.thirdPhotoUrl}
                        onChange={changeHandler}
                    />
                    {errors.thirdPhotoUrl && <p className="input-err-msg">{errors.thirdPhotoUrl}</p>}
                </Form.Group>

                <Form.Group className="description-area">
                    <Form.Label className="input-label">Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        style={{ height: '100px', resize: "none", marginBottom: '3px' }}
                        name="description"
                        value={values.description}
                        onChange={changeHandler}
                    />
                    {errors.description && <p className="input-err-msg">{errors.description}</p>}
                </Form.Group>

                <Button variant="primary" type="submit" className="submit-btn">
                    Edit
                </Button>
                {errors.emptyField && <p className="input-err-msg">{errors.emptyField}</p>}
            </Form>
        </div>
    );
};