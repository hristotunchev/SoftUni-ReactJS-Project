import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

import './Home.css';

export default function Home() {
    return (
        <>
            <section className="home" id="home">

                <div className="row">

                    <div className="content">
                        <h3>Classic</h3>
                        <h3>cars</h3>
                        <h3>Club</h3>
                        <div className="btn-container">
                            <p>Show off your garage gold!</p>
                        </div>
                        <Link to="/catalog" className="homepage-btn">View Garage</Link>
                    </div>

                </div>
            </section>
            {/* ----- */}
            <div className="home-group">
                <CardGroup>
                    <Card className="card">
                        <Card.Img variant="top" src="https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/M4-Competition/8049/1644496825816/front-left-side-47.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            {/* <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text> */}
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card className="card">
                        <Card.Img variant="top" src="https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/M4-Competition/8049/1644496825816/front-left-side-47.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            {/* <Card.Text>
                        This card has supporting text below as a natural lead-in to
                        additional content.{' '}
                    </Card.Text> */}
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card className="card">
                        <Card.Img variant="top" src="https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/M4-Competition/8049/1644496825816/front-left-side-47.jpg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            {/* <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This card has even longer content than the
                        first to show that equal height action.
                    </Card.Text> */}
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        </>
    );
};