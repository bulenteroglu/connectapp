const express = require('express');
const router = express.Router();

const Message = require('../../models/Message');

router.post('/message', async (req, res) => {
  const { name, text, latitude, longitude } = req.body;

  try {
    const newMessage = new Message({
      name,
      text,
      latitude,
      longitude
    });

    const message = await newMessage.save();

    res.json(message);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/message', async (req, res) => {
  try {
    const messages = await Message.find().populate();
    res.json(messages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
