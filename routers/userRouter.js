const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/',async (req, res) => {   
    try{
        res.json(await userController.indexAll())
    } catch (error) {
        return res.sendStatus(500).json({
            message: 'Server Error'
        });
    }
});

router.post('/',async (req, res) => {
    try{
        const id = await userController.store(req.body);
        const status = 'success';
        res.json({status,id});
    } catch( error ){
        console.log(error)
        return res.status(500).json({
            message: error.message,
            date: new Date
        });

    }
})

router.put('/:id',async (req,res) => {
    try{
        const id = req.params.id;
        res.json(await userController.update(id,req.body));
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Server Error'
        });
    }
});

router.delete('/:id',async (req, res) => {
   try{
        const id = req.params.id;
        const status = 'deleted'
        await userController.destroy(id);
        res.json({status,id});
   } catch( error ) {
    return res.sendStatus(500).json({
        message: 'Server Error'
    });   
   }

});

router.post('/login',async (req, res) => {   
    try{
        const {email,password} = req.body;
        const jwt = await userController.login(email,password);
        res.json({jwt,date: new Date});
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});



module.exports = router;