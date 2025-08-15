const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Sample route for payments
app.post('/payments', (req, res) => {
  // Assume secure processing logic here
  res.status(200).send({ success: true, message: 'Payment processed successfully' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`DevEx SecurePay server running on port ${port}`);
});