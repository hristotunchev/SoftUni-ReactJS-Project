import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './Create.css';

export default function Create() {
    return (
        <div className="form-container">
            <Form className="create-form">
                <Form.Label className="form-label">Add New Vehicle</Form.Label>

                <Form.Group className="mb-3">
                    {/* <Form.Label>Name</Form.Label> */}
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    {/* <Form.Label>Model</Form.Label> */}
                    <Form.Control type="text" placeholder="Model" />
                </Form.Group>

                <Form.Group className="mb-3">
                    {/* <Form.Label>Image URL</Form.Label> */}
                    <Form.Control type="text" placeholder="Image URL" />
                </Form.Group>

                <Form.Group>
                    <Form.Control
                        as="textarea"
                        placeholder="Description"
                        style={{ height: '100px', marginBottom: '15px' }}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="submit-btn">
                    Add Vehicle
                </Button>
            </Form>
        </div>
    );
};