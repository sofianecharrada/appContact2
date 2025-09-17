import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Erreur lors de l'inscription.");
        return;
      }

      setSuccess("Inscription réussie !");
      setError(null);

      setTimeout(() => {
        navigate("/contacts"); 
      }, 1500);
    } catch (err) {
      console.error("Erreur serveur :", err);
      setError("Erreur réseau. Veuillez réessayer.");
    }
  };

  return (
    <div
  style={{
    maxWidth: "400px",
    margin: "50px auto",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
  }}
>
  <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
    Créer un compte
  </h2>

  <form onSubmit={handleSubmit}>
    <div style={{ marginBottom: "15px" }}>
      <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}>
        Email :
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setError(null);
        }}
        required
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
    </div>

    <div style={{ marginBottom: "20px" }}>
      <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}>
        Mot de passe :
      </label>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError(null);
        }}
        required
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
    </div>

    <button
      type="submit"
      style={{
        width: "100%",
        padding: "12px",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      S'inscrire
    </button>
  </form>

  {error && (
    <p style={{ color: "red", marginTop: "15px", textAlign: "center" }}>{error}</p>
  )}
  {success && (
    <p style={{ color: "green", marginTop: "15px", textAlign: "center" }}>{success}</p>
  )}

  <p style={{ marginTop: "20px", textAlign: "center" }}>
    Déjà un compte ?{" "}
    <Link to="/login" style={{ color: "#007BFF", textDecoration: "none" }}>
      Se connecter
    </Link>
  </p>
</div>

  );
};

export default Register;
