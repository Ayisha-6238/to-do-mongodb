const express=require('express')
const userControll=require('../Controllers/userControll')



const router=express.Router()
router.use(express.json())



router.get('/',userControll.getItem)
router.post('/todo',userControll.postItem)
router.get('/todo/:id',userControll.getOneItem)
router.put('/todo/:id',userControll.updateItem)
router.delete('/todo/:id',userControll.deleteItem)


module.exports=router