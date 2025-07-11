import React, { useState } from "react";
import "../css/Login.css";
import LogoImg from "../assets/logo.jpg";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [lang, setLang] = useState("tr");

  const texts = {
    tr: {
      title: "QREATIONE",
      welcome: "Hoşgeldiniz",
      showMenu: "Menüyü Göster",
      callWaiter: "Garson Çağır",
      footer: "Qreatione.com.tr",
    },
    en: {
      title: "QREATIONE",
      welcome: "Welcome",
      showMenu: "Show Menu",
      callWaiter: "Call Waiter",
      footer: "Qreatione.com.tr",
    },
  };

  const t = texts[lang];

  const flags = {
    tr: "https://flagcdn.com/w40/tr.png",
    en: "https://flagcdn.com/w40/gb.png",
  };

  return (
      <div className="login-bg">
        <div className="login-card">

          {/* Bayraklar - Ortalanmış */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "12px",
            marginTop: "-8px",
          }}>
            {Object.entries(flags).map(([code, url]) => (
                <img
                    key={code}
                    src={url}
                    alt={code.toUpperCase()}
                    title={code === "tr" ? "Türkçe" : "English"}
                    style={{
                      width: "32px",
                      height: "22px",
                      cursor: "pointer",
                      borderRadius: "5px",
                      boxShadow: lang === code ? "0 0 5px 2px #007bff66" : "0 0 2px #ccc",
                      border: lang === code ? "2px solid #007bff" : "1px solid #ccc",
                      opacity: lang === code ? 1 : 0.7,
                      transition: "all 0.2s ease-in-out",
                      transform: "translate(-100px, -10px)",
                    }}
                    onClick={() => setLang(code)}
                />
            ))}
          </div>

          {/* Logo */}
          <img src={LogoImg} alt="Logo" className="login-logo" />
          <h2 className="login-title">{t.title}</h2>
          <p className="login-welcome">{t.welcome}</p>

          {/* Butonlar */}
          <div className="login-btn-group">
            <button className="login-btn primary" onClick={() => navigate('/home')}>
              {t.showMenu}
            </button>
            <button className="login-btn secondary">{t.callWaiter}</button>
          </div>

          {/* Footer */}
          <div className="login-footer-wrapper">
            <p className="login-footer">{t.footer}</p>
          </div>
        </div>
      </div>
  );
};

export default Login;
