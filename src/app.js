const express = require('express');
const app = express();

// Middleware lain (json, morgan, dll)
app.use(express.json());

// Route untuk Products
const productRoutes = require('./routes/products.routes');
app.use('/api/products', productRoutes);

// --- TAMBAHKAN BAGIAN INI DI SINI ---
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
});
// ------------------------------------

// Error Handler (biasanya di paling bawah sebelum listen)
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

// Jalankan server
app.listen(3000, () => console.log('Server running on port 3000'));