import { Routes, Route } from "react-router-dom";
import Login from "./pages/users/login.js";
import Register from "./pages/users/register.js";
import Contacts from "./pages/contacts/contacts.js";
import Navbar from "./pages/navbar.js";
import CreationContact from "./pages/contacts/creationContact.js";
import ModificationContact from "./pages/contacts/modificationContact.js";
import SuppressionContact from "./pages/contacts/suppressionContact.js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/creerContact" element={<CreationContact />} />
        <Route path="/modifierContact/:id" element={<ModificationContact />} />
        <Route path="/supprimerContact/:id" element={<SuppressionContact />} />
      </Routes>
    </>
  );
}

export default App;
