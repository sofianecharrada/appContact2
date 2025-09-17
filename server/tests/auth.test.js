import { loginUser } from "../controller/authController.js";
import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

jest.mock("../model/userModel.js");
jest.mock("bcrypt");
jest.mock("jsonwebtoken");

describe('Auth Controller', () => {
  test('Login avec identifiants valides retourne un token', async () => {
    const mockUser = {
      _id: "user123",
      password: "hashedPassword",
    };

    // Mock User.findOne pour retourner un utilisateur
    User.findOne.mockResolvedValue(mockUser);

    // Mock bcrypt.compare pour retourner true (mot de passe valide)
    bcrypt.compare.mockResolvedValue(true);

    // Mock jwt.sign pour retourner un token fixe
    jwt.sign.mockReturnValue("mocked-token");

    const req = {
      body: {
        email: 'test@example.com',
        password: 'password123',
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await loginUser(req, res);

    expect(User.findOne).toHaveBeenCalledWith({ email: 'test@example.com' });
    expect(bcrypt.compare).toHaveBeenCalledWith('password123', mockUser.password);
    expect(jwt.sign).toHaveBeenCalledWith({ id: mockUser._id }, process.env.JWT_SECRET, { expiresIn: "2h" });

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ token: "mocked-token" });
  });
});
