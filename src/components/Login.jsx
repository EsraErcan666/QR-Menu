import React from "react";
import "../css/Login.css";
import KadirImg from "../assets/Kadir.jpg";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-bg">
      <div className="login-card">
        <img
          src={KadirImg}
          alt="Kadir"
          className="login-logo"
        />
        <h2 className="login-title">QREATIONE</h2>
        <p className="login-welcome">Hoşgeldiniz</p>
        <button className="login-btn primary" onClick={() => navigate('/home')}>Menüyü Göster</button>
        <button className="login-btn secondary">Garson Çağır</button>
        <p className="login-footer">Qreatione.com.tr</p>
      </div>
    </div>
  );
};

export default Login;
