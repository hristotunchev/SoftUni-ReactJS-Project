import { useForm } from '../../../hooks/useForm.js';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './AddComment.css';

export default function AddComment({
    onCommentSubmit
}) {
    const { values, changeHandler, onSubmit } = useForm({
        comment: ''
    }, onCommentSubmit);

    return (
        <Modal.Dialog className="comment-modal">
            <Modal.Header style={{ justifyContent: "center" }}>
                <Modal.Title style={{ fontSize: "1.7rem", marginTop: "1rem", marginBottom: "0.3rem" }}>Add Comment</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form method="POST" onSubmit={onSubmit}>
                    <Form.Group style={{ justifyContent: "center" }}>
                        <Form.Control
                            as="textarea"
                            placeholder="Enter comment"
                            style={{ height: '100px', marginBottom: '15px', fontFamily: "Verdana" }}
                            name="comment"
                            value={values.comment}
                            onChange={changeHandler}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="comment-btn">Add Comment</Button>
                </Form>
            </Modal.Body>

            <Modal.Footer style={{ justifyContent: "center" }}>
            </Modal.Footer>
        </Modal.Dialog >
    );
};