import { useState } from "react";
import { omit } from 'lodash';

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const validate = (e, name, value) => {
        switch (name) {
            case 'email':
                if (!new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)) {
                    setErrors({
                        ...errors,
                        email: 'Please enter a valid email.'
                    });
                } else {
                    let newObj = omit(errors, 'email');
                    setErrors(newObj);
                }
                break;
            case 'password':
                if (value.length < 6) {
                    setErrors({
                        ...errors,
                        password: 'Password should be at least 6 characters.'
                    });
                } else {
                    let newObj = omit(errors, 'password');
                    setErrors(newObj);
                }
                break;
            case 'repeatPassword':
                if (value !== values.password) {
                    setErrors({
                        ...errors,
                        repeatPassword: 'Passwords don\'t match.'
                    });
                } else {
                    let newObj = omit(errors, 'repeatPassword');
                    setErrors(newObj);
                }
                break;
            case 'make':
                if (value.length < 2) {
                    setErrors({
                        ...errors,
                        make: 'Make should be at least 2 characters.'
                    });
                } else {
                    let newObj = omit(errors, 'make');
                    setErrors(newObj);
                }
                break;
            case 'model':
                if (value.length < 2) {
                    setErrors({
                        ...errors,
                        model: 'Model should be at least 2 characters.'
                    });
                } else {
                    let newObj = omit(errors, 'model');
                    setErrors(newObj);
                }
                break;
            case 'coverPhotoUrl':
                if (!new RegExp(/(https?:\/\/.*\.(?:png|jpg|jpeg))/igm).test(value)) {
                    setErrors({
                        ...errors,
                        coverPhotoUrl: 'Please enter a valid URL.'
                    });
                } else {
                    let newObj = omit(errors, 'coverPhotoUrl');
                    setErrors(newObj);
                }
                break;
            case 'secondPhotoUrl':
                if (!new RegExp(/(https?:\/\/.*\.(?:png|jpg|jpeg))/igm).test(value)) {
                    setErrors({
                        ...errors,
                        secondPhotoUrl: 'Please enter a valid URL.'
                    });
                } else {
                    let newObj = omit(errors, 'secondPhotoUrl');
                    setErrors(newObj);
                }
                break;
            case 'thirdPhotoUrl':
                if (!new RegExp(/(https?:\/\/.*\.(?:png|jpg|jpeg))/igm).test(value)) {
                    setErrors({
                        ...errors,
                        thirdPhotoUrl: 'Please enter a valid URL.'
                    });
                } else {
                    let newObj = omit(errors, 'thirdPhotoUrl');
                    setErrors(newObj);
                }
                break;
            case 'description':
                if (value.length < 10) {
                    setErrors({
                        ...errors,
                        description: 'Description should be at least 10 characters.'
                    });
                } else {
                    let newObj = omit(errors, 'description');
                    setErrors(newObj);
                }
                break;
        };
    };

    const changeHandler = (e) => {
        validate(e, e.target.name, e.target.value);

        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (Object.values(values).some(x => x === "")) {
            setErrors({
                ...errors,
                emptyField: 'All fields are required.'
            })
            setTimeout(() => {
                let newObj = omit(errors, 'emptyField');
                setErrors(newObj);
            }, 1250);
        }

        if (Object.keys(errors).length === 0 && !Object.values(values).some(x => x === "")) {
            onSubmitHandler(values);
            setValues(initialValues);
        }
    };

    const changeValues = (newValues) => {
        // TODO: Validate newValues shape (has to be like initialValues)

        setValues(newValues);
    };

    return {
        values,
        changeHandler,
        onSubmit,
        changeValues,
        errors
    };
};