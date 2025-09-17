import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SuppressionContact = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchContacts = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          `${API_URL}/api/contact/${params.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          setError("Erreur lors de la suppression du contact.");
          return;
        }
        setSuccess("Contact supprimé avec succès.");
        setTimeout(() => {
          navigate("/contacts");
        }, 1500);
      } catch (error) {
        console.error(error);

      }
    };
    fetchContacts();
  }, [navigate, params.id]);

  return (
    <div>
      {success && (
        <p style={{ color: "green", marginTop: "15px", textAlign: "center" }}>
          {success}
        </p>
        
      )}
       {error && (
        <p style={{ color: "red", marginTop: "15px", textAlign: "center" }}>
          {error}
        </p>
      )}
    </div>
  );
};
export default SuppressionContact;
