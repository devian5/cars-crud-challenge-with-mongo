const router = require('express').Router();
const carRouter = require('./routers/carRouter');
const userRouter = require('./routers/userRouter');


router.use('/cars',carRouter);
router.use('/user',userRouter);


module.exports = router;