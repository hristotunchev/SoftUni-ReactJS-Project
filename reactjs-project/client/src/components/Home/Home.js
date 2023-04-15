import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

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
        </>
    );
};