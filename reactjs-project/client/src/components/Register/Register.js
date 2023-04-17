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

    const { values, changeHandler, onSubmit, errors } = useForm({
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.RepeatPassword]: ''
    }, onRegisterSubmit);

    return (
        <div className="form-container">
            <Form className="register-form" method="POST" onSubmit={onSubmit}>
                <Form.Label className="form-label">Register</Form.Label>

                <Form.Group className="form-group">
                    <Form.Label className="input-label">Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name={RegisterFormKeys.Email}
                        value={values[RegisterFormKeys.Email]}
                        onChange={changeHandler}
                    />
                    {errors.email && <p className="input-err-msg">{errors.email}</p>}
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Label className="input-label">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        name={RegisterFormKeys.Password}
                        value={values[RegisterFormKeys.Password]}
                        onChange={changeHandler}
                    />
                    {errors.password && <p className="input-err-msg">{errors.password}</p>}
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Label className="input-label">Repeat Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Repeat password"
                        name={RegisterFormKeys.RepeatPassword}
                        value={values[RegisterFormKeys.RepeatPassword]}
                        onChange={changeHandler}
                    />
                    {errors.repeatPassword && <p className="input-err-msg">{errors.repeatPassword}</p>}
                </Form.Group>
                
                <div className="submit-btn-container">
                    <Button variant="primary" type="submit" className="submit-btn">
                        Create Account
                    </Button>
                    {errors.emptyField && <p className="input-err-msg">{errors.emptyField}</p>}
                </div>

                <div className="login-link-box">
                    <p>Already have an account?</p>
                    <Link to="/login" className="login-link">Click here to login</Link>
                </div>
            </Form>
        </div>
    );
};