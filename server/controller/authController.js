import jwt from "jsonwebtoken";
import User from "../model/userModel.js";
import bcrypt from "bcrypt";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Utilisateur inconnu" });
    }
    const validMdp = await bcrypt.compare(password, user.password);
    if (!validMdp) {
      return res
        .status(400)
        .json({ success: false, message: "Mot de passe invalide" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }

 
};
