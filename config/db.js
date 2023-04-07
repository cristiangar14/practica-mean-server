const mongoose = require('mongoose');
require('dotenv').config({
    path: 'dot.env'
})

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('Base de datos conecatda ');
    } catch (error) {
        console.log(error)
        process.exit(1) // Detenemos la app
    }
}

module.exports = connectDB