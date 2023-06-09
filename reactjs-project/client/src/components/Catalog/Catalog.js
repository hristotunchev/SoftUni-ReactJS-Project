import { useContext } from 'react';

import { CarContext } from '../../contexts/CarContext.js'
import CatalogItem from './CatalogItem/CatalogItem.js';
import Row from 'react-bootstrap/Row';
import './Catalog.css';

export default function Catalog() {
    const { cars } = useContext(CarContext);

    return (
        <>
            {cars.length !== 0 && (
                <>
                <h2 className="all-cars">All Cars</h2>
                <Row xs={3} md={4} className="g-4" style={{ margin: '0px 15px 0px 15px' }}>
                    {cars.map(x => <CatalogItem key={x._id} {...x} />)}
                </Row>
                </>
            )}

            {cars.length === 0 && <h3 className="no-cars">No Cars Yet</h3>}
        </>
    );
};