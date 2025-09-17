import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav
      style={{
        backgroundColor: "#1E2A38",
        padding: "12px 24px",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          MonApp
        </Link>
      </div>

      <div style={{ display: "flex", gap: "16px" }}>
        <Link to="/" style={linkStyle}>
          Accueil
        </Link>
        {token && (
          <Link to="/contacts" style={linkStyle}>
            Contacts
          </Link>
        )}
        {!token ? (
          <>
            <Link to="/register" style={linkStyle}>
              S'inscrire
            </Link>
            <Link to="/login" style={linkStyle}>
              Se connecter
            </Link>
          </>
        ) : (
          <button onClick={handleLogout} style={buttonStyle}>
            Se déconnecter
          </button>
        )}
      </div>
    </nav>
  );
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  transition: "color 0.3s",
};

const buttonStyle = {
  background: "transparent",
  border: "none",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  textDecoration: "underline",
  fontSize: "1rem",
};

export default Navbar;
