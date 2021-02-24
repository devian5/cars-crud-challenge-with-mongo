const { use } = require('../routers/carRouter');
const db = require('../db');
const userController = require('../controllers/userController');

(async () => {
    try {
        await db;
        let token = await userController.login('pepe@pe','1234');
        console.log(token)
    } catch (error) {
        console.log('error', error.message)
    }
})