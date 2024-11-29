import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import peopleRoutes from './routes/peopleRoute.js';
import productsRoutes from './routes/productsRoutes.js';
import adjustmentsRoutes from './routes/adjustmentsRoutes.js';
import transfersRoutes from './routes/transfersRoutes.js';
import quotationsRoutes from './routes/quotationsRoutes.js';
import purchasesRoutes from './routes/purchasesRoutes.js';
import salesRoutes from './routes/salesRoutes.js';
import salesReturnRoutes from './routes/salesReturnRoutes.js';
import returnPurchasesRoutes from './routes/returnPurchasesRoutes.js';
import accountingRoutes from './routes/accountingRoutes.js';

//configure environment variables
dotenv.config();

//database configuration
connectDB();

//port 
const PORT = process.env.PORT || 5000;

//rest object 
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//*all routes
//auth routes
app.use('/api/v1/auth', authRoutes);

//people routes
app.use('/api/v1/people', peopleRoutes);

//product routes
app.use('/api/v1/product', productsRoutes);

//adjustments routes
app.use('/api/v1/adjustment', adjustmentsRoutes);

//transfers routes
app.use('/api/v1/transfers', transfersRoutes);

//quotations routes
app.use('/api/v1/quotation', quotationsRoutes);

//purchase routes
app.use('/api/v1/purchase', purchasesRoutes);

//sales routes
app.use('/api/v1/sales', salesRoutes);

//sales return routes
app.use('/api/v1/sales-return', salesReturnRoutes);

//return purchase routes
app.use('/api/v1/return-purchase', returnPurchasesRoutes);

//accounting routes
app.use('/api/v1/accounting', accountingRoutes);


//rest api
app.get('/', (req, res) =>
{
    res.send("<h1>welcome!</h1>")
})

//run listen
app.listen(PORT, () =>
{
    console.log(`Server running on ${PORT}`);
})