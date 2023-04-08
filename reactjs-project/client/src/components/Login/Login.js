import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="form-container">
            <Form className="login-form">
                <Form.Label className="form-label">Login</Form.Label>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Email</Form.Label> */}
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className="submit-btn">
                    Login
                </Button>
                <div className="register-link-box">
                    <p>Don't have an account?</p>
                    <Link to="/register" className="register-link">Click here to register</Link>
                </div>
            </Form>
        </div>
    );
};