import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext.js';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Logout from './components/Logout/Logout.js';
import Create from './components/Create/Create.js';
import Catalog from './components/Catalog/Catalog.js';
import Details from './components/Details/Details.js';
import Edit from './components/Edit/Edit.js';
// import Footer from './components/Footer/Footer.js';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarProvider } from './contexts/CarContext.js';

function App() {
    return (
        <AuthProvider>
            <CarProvider>
                <div className="App">
                    <Header />

                    <main id="main-content">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path='/create' element={<Create />} />
                            <Route path='/catalog' element={<Catalog />} />
                            <Route path='/catalog/:carId' element={<Details />} />
                            <Route path='/catalog/:carId/edit' element={<Edit />} />
                        </Routes>
                    </main>

                    {/* <Footer /> */}
                </div>
            </CarProvider>
        </AuthProvider>
    );
}

export default App;
