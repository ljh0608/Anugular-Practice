const router =require('express').Router();
const tutorial=require('../controller/controller.ts');

router.post('/api/tutorial',tutorial.create);

router.get('/api/tutorial', tutorial.findAll);

router.get('/api/tutorial/:id',tutorial.findOne);

//추가한 것 
router.get('/api/tutorial/:keyword',tutorial.findOne);

router.put('/api/tutorial/:id',tutorial.update);

router.delete('/api/tutorial/:id',tutorial.delete);

module.exports=router;