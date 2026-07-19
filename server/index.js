import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

//Payment routes
import paymentRoutes from './routes/paymentRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/payments', paymentRoutes);

const PORT = process.env.CLIENT_URL

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})