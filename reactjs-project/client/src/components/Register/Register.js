import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './Register.css';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div className="form-container">
            <Form className="register-form">
            <Form.Label className="form-label">Register</Form.Label>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Email</Form.Label> */}
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Repeat Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Repeat Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit" className="submit-btn">
                    Create Account
                </Button>
                <div className="login-link-box">
                    <p>Already have an account?</p>
                    <Link to="/login" className="login-link">Click here to login</Link>
                </div>
            </Form>
        </div>
    );
};