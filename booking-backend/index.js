const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/bookingDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Booking schema and model
const bookingSchema = new mongoose.Schema({
  email: String,
  phone: String,
  date: String,
  time: String,
  cardNumber: String,
  expDate: String,
  cvv: String,
});

const Booking = mongoose.model('Booking', bookingSchema);

// API Routes

// Get all bookings
app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new booking
app.post('/api/bookings', async (req, res) => {
  const booking = new Booking({
    email: req.body.email,
    phone: req.body.phone,
    date: req.body.date,
    time: req.body.time,
    cardNumber: req.body.cardNumber,
    expDate: req.body.expDate,
    cvv: req.body.cvv,
  });

  try {
    const newBooking = await booking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
