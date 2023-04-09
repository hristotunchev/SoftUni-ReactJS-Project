import { useContext } from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { AuthContext } from "../../contexts/AuthContext.js";
import { useForm } from "../../hooks/useForm.js";

import './Login.css';

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

export default function Login() {
    const { onLoginSubmit } = useContext(AuthContext);

    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, onLoginSubmit);

    return (
        <div className="form-container">
            <Form className="login-form" method="POST" onSubmit={onSubmit}>
                <Form.Label className="form-label">Login</Form.Label>

                <Form.Group className="mb-3">
                    {/* <Form.Label>Email</Form.Label> */}
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name={LoginFormKeys.Email}
                        value={values[LoginFormKeys.Email]}
                        onChange={changeHandler}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name={LoginFormKeys.Password}
                        value={values[LoginFormKeys.Password]}
                        onChange={changeHandler}
                    />
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