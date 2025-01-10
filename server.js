const express = require('express');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customerRoutes');
const placeRoutes = require('./routes/placeRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors'); // Import CORS

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
// Routes
app.use('/api/customers', customerRoutes);
app.use('/api/places', placeRoutes);
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
