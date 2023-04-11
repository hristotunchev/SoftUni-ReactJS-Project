import ListGroup from 'react-bootstrap/ListGroup';
import './Comment.css';

export default function Comment({
    author,
    comment
}) {
    return (
        <ListGroup.Item
            as="li"
            style={{ justifyContent: "center" }}
            className="comment-container"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{author}</div>
                {comment}
            </div>
        </ListGroup.Item>
    );
};