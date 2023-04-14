import { useContext } from "react";

import { CarContext } from '../../contexts/CarContext.js';
import { useForm } from '../../hooks/useForm.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './Create.css';

export default function Create() {
    const { onCreateCarSubmit } = useContext(CarContext);
    const { values, changeHandler, onSubmit } = useForm({
        make: '',
        model: '',
        coverPhotoUrl: '',
        secondPhotoUrl: '',
        thirdPhotoUrl: '',
        description: ''
    }, onCreateCarSubmit);

    return (
        <div className="form-container">
            <Form className="create-form" method="POST" onSubmit={onSubmit}>
                <Form.Label className="form-label">Add New Vehicle</Form.Label>

                <Form.Group className="form-group">
                    <Form.Label className="input-label">Make</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Make"
                        name="make"
                        value={values.make}
                        onChange={changeHandler}
                    />
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Label className="input-label">Model</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Model"
                        name="model"
                        value={values.model}
                        onChange={changeHandler}
                    />
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Label className="input-label">Cover Photo URL</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Cover Photo URL"
                        name="coverPhotoUrl"
                        value={values.coverPhotoUrl}
                        onChange={changeHandler}
                    />
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Label className="input-label">Photo 2 URL</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Photo 2 URL"
                        name="secondPhotoUrl"
                        value={values.secondPhotoUrl}
                        onChange={changeHandler}
                    />
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Label className="input-label">Photo 3 URL</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Photo 3 URL"
                        name="thirdPhotoUrl"
                        value={values.thirdPhotoUrl}
                        onChange={changeHandler}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label className="input-label">Description</Form.Label>
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
                    Add Vehicle
                </Button>
            </Form>
        </div>
    );
};