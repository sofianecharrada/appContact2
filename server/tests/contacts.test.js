import Contact from '../model/contactModel.js';
import { createContact } from '../controller/contactController.js';

jest.mock('../model/contactModel.js');

describe('Contacts Controller', () => {
  test('Ajout d’un contact valide', async () => {
    const mockSave = jest.fn().mockResolvedValue({
      firstName: 'John',
      lastName: 'Doe',
      phone: '1234567890',
      userId: '64e1f5f0e3a7f4c91a2b1234',
      _id: '64e1f5f0e3a7f4c91a2b9999',
    });

    Contact.mockImplementation(() => ({
      save: mockSave,
    }));

    const req = {
      body: {
        firstName: 'John',
        lastName: 'Doe',
        phone: '1234567890',
      },
      user: { id: '64e1f5f0e3a7f4c91a2b1234' },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await createContact(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      firstName: 'John',
      lastName: 'Doe',
      phone: '1234567890',
      userId: '64e1f5f0e3a7f4c91a2b1234',
    }));
  });
});
