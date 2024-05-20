import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    const handleLogo = () => {
        navigate("/");
    }


    return (
        <div style={{ display: 'flex', justifyContent: "space-around", backgroundColor: "pink", padding: "20px", margin: "10px" }}>
            <div onClick={handleLogo}>Logo</div>
           
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/cart">Cart</Link>
        </div>
    );
}
