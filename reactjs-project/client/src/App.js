import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext.js';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Logout from './components/Logout/Logout.js';
import Create from './components/Create/Create.js';
import Catalog from './components/Catalog/Catalog.js';
// import Footer from './components/Footer/Footer.js';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <Header />
                {/* <h1>Classic Cars Club</h1> */}

                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/create' element={<Create />} />
                        <Route path='/catalog' element={<Catalog />} />
                    </Routes>
                </main>
                {/* <Footer /> */}
            </div>
        </AuthProvider>
    );
}

export default App;
