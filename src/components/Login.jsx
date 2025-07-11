import React from "react";
import "../css/Login.css";
import LogoImg from "../assets/logo.jpg";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-bg">
      <div className="login-card">
        <img
          src={LogoImg}
          alt="Logo"
          className="login-logo"
        />
        <h2 className="login-title">QREATIONE</h2>
        <p className="login-welcome">Hoşgeldiniz</p>
        <div className="login-btn-group">
          <button className="login-btn primary" onClick={() => navigate('/home')}>Menüyü Göster</button>
          <button className="login-btn secondary">Garson Çağır</button>
        </div>
        <div className="login-footer-wrapper">
          <p className="login-footer">Qreatione.com.tr</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
