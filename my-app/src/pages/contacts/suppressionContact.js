import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SuppressionContact = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/contact/${params.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
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
  }, [params.id]);

  return (
    <div>
      {success && (
        <p style={{ color: "green", marginTop: "15px", textAlign: "center" }}>
          {success}
        </p>
      )}
    </div>
  );
};
export default SuppressionContact;
