const express = require('express');
const expressApp = require('./app.js');
// const { PORT } = require('./config');
// const expressApp = require('./express-app');
// dotenv.config();


const PORT = process.env.PORT || 6000;

const StartServer = async() => {

    const app = express();
    
    await expressApp(app);

    app.listen(PORT, () => {
        console.log(`listening to port ${PORT}`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
}

StartServer()