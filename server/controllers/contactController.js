const Contact = require('../models/Contact');

const submitContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).json({ message: 'Contact submitted successfully', contact: savedContact });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  submitContact
};
