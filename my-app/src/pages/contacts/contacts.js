import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ContactsList = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch("http://localhost:8000/api/contacts", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Erreur lors du chargement des contacts");
        }
        const data = await response.json();
        setContacts(data);
      } catch (err) {
        setError(err.message);
        return;
      }
    };
    fetchContacts();
  }, []);
  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ textAlign: "center", margin: "30px auto" }}>
        <Link
          to="/creerContact"
          style={{
            display: "inline-block",
            backgroundColor: "#28a745",
            color: "white",
            padding: "12px 24px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#218838")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#28a745")}
        >
          ➕ Créer un contact
        </Link>
      </div>

      <h2>Liste des contacts</h2>

      {contacts.length === 0 ? (
        <p>Aucun contact trouvé.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#007BFF", color: "white" }}>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Prénom
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>Nom</th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Téléphone
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Modifier
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                Supprimer
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  {contact.firstName}
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  {contact.lastName}
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  {contact.phone}
                </td>

                <td style={{ padding: "10px", textAlign: "center" }}>
                  <Link
                    to={`/modifierContact/${contact._id}`}
                    style={{
                      backgroundColor: "#17a2b8",
                      color: "white",
                      padding: "5px",
                      borderRadius: "5px",
                      textDecoration: "none",
                    }}
                  >
                    Modifier le contact
                  </Link>
                </td>

                <td style={{ padding: "10px", textAlign: "center" }}>
                  <Link
                    to={`/supprimerContact/${contact._id}`}
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      padding: "5px",
                      borderRadius: "5px",
                      textDecoration: "none",
                    }}
                  >
                    Supprimer le contact
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ContactsList;
