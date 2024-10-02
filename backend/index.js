import express from 'express';
import cors from 'cors';
import accountRouter from "./routes/account-routes.js";
import adminRouter from "./routes/admin-routes.js";
import cartRouter from './routes/cart-routes.js';
import productRouter from './routes/product-routes.js';
import orderRouter from './routes/order-routes.js';


const app = express()
const host = '127.0.0.1'
const port = 2024


app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET,PUT,POST,DELETE",
    credentials: true
}))
// Middlewares
app.use(express.json())


app.use('/account', accountRouter)
app.use('/admin', adminRouter)
app.use('/cart', cartRouter)
app.use('/order', orderRouter)
app.use('/product', productRouter)


app.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`)
})
