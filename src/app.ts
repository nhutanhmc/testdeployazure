import express from 'express';
import authRoutes from './routes/auth.routes';

const app = express();

// Middleware để parse JSON body
app.use(express.json());

// Gắn các route API
app.use('/api/auth', authRoutes);

// Export app để server hoặc các file test có thể sử dụng
export default app;