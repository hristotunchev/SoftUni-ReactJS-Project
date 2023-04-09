import { useContext } from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useForm } from "../../hooks/useForm.js";
import { AuthContext } from "../../contexts/AuthContext.js";

import './Register.css';

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    RepeatPassword: 'repeatPassword'
};

export default function Register() {
    const { onRegisterSubmit } = useContext(AuthContext);

    const { values, changeHandler, onSubmit } = useForm({
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.RepeatPassword]: ''      // TODO notify user - authContext
    }, onRegisterSubmit);

    return (
        <div className="form-container">
            <Form className="register-form" method="POST" onSubmit={onSubmit}>
                <Form.Label className="form-label">Register</Form.Label>

                <Form.Group className="mb-3">
                    {/* <Form.Label>Email</Form.Label> */}
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name={RegisterFormKeys.Email}
                        value={values[RegisterFormKeys.Email]}
                        onChange={changeHandler}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name={RegisterFormKeys.Password}
                        value={values[RegisterFormKeys.Password]}
                        onChange={changeHandler}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    {/* <Form.Label>Repeat Password</Form.Label> */}
                    <Form.Control
                        type="password"
                        placeholder="Repeat Password"
                        name={RegisterFormKeys.RepeatPassword}
                        value={values[RegisterFormKeys.RepeatPassword]}
                        onChange={changeHandler}
                    />
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