import Contact from "../model/contactModel.js";

export const createContact = async (req, res) => {
  try {
    const { firstName, lastName, phone } = req.body;
    const userId = req.user.id;
    const newContact = new Contact({ firstName, lastName, phone, userId });
    const savedData = await newContact.save();
    res.status(201).json(savedData);
  } catch (error) {
    console.error("erreur createContact ", error);
    
    res.status(500).json({ errorMessage: error.message });
  }

};

export const getAllContacts = async (req, res) => {
  try {
    const userId = req.user.id;
    const contactData = await Contact.find({ userId: userId });
    if (!contactData || contactData.length === 0) {
      return res.status(404).json({ message: "Pas de contact pour cet utilisateur" });
    }
    res.status(200).json(contactData);
  } catch (error) {
    console.error("erreur dans getAllContacts :", error);
    
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getContactById = async (req, res) => {
  try {
    const id = req.params.id;
    const contactExist = await Contact.findById(id);
    if (!contactExist) {
      return res.status(404).json({ message: "Les données de contact n'ont pas été trouvées ." });
    }
    res.status(200).json(contactExist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const updateContact = async (req, res) => {
  try {
    const id = req.params.id;
    const contactExist = await Contact.findById(id);
    if (!contactExist) {
      return res.status(404).json({ message: "Ce contact n'existe pas." });
    }
    const updatedData = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const id = req.params.id;
    const contactExist = await Contact.findById(id);
    if (!contactExist) {
      return res.status(404).json({ message: "Ce contact n'existe pas." });
    }
    await Contact.findByIdAndDelete(id);
    res.status(200).json({ message: "Contact supprimé avec succés." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};


