const router = require('express').Router();
const carRouter = require('./routers/carRouter');
const userRouter = require('./routers/userRouter');
const auth = require('./middlewares/auth');


router.use('/cars',auth,carRouter);//o también puedes pasarselo en routers uno por uno por donde te interese.
router.use('/users',userRouter);


module.exports = router;