import dotenv from 'dotenv';
import connectDB from './db/db.js';
import app from './app.js';
dotenv.config({
    path: './.env'
});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server running on port ${process.env.PORT}`)
    });
    app.on('error', (err) => {
        console.log('Server is not running ', err)
    });
})
.catch((err) => {
    console.log('Server failed to connect: ', + err);
})