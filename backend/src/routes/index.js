const productRoutes = require('../routes/products');
const orderRoutes = require('../routes/orders');
const cartRoutes = require("../routes/cart")
// const contectRoutes = require('../routes/contect')

const router = express()

app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);
app.use('/cart', cartRoutes)
// app.use('/api/contect',contectRoutes)

module.exports = router