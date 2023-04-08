import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Create from './components/Create/Create.js';
import Catalog from './components/Catalog/Catalog.js';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Header />
            <h1>Test Application</h1>

            <main id="main-content">
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/catalog' element={<Catalog />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
