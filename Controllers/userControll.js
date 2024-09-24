const todo=require('../models/todo')

module.exports.getItem= async(req,res)=>{
    const todos=await todo.find()
    res.json(todos)
}

module.exports.postItem= async(req,res)=>{
    const todos=await todo.create(req.body)
    res.json(todos)
}
module.exports.getOneItem= async(req,res)=>{
    const Id=req.params.id
    const todosItem=await todo.findOne({id:Id})
    res.json(todosItem)
}
module.exports.updateItem= async(req,res)=>{
    const Id=req.params.id
    const newText=req.body.task
    const updateItem=await todo.updateOne({id:Id},{$set:{task:newText}})
    res.json(updateItem)
}
module.exports.deleteItem= async(req,res)=>{
    const Id=req.params.id
    await todo.deleteOne({id:Id})
    const todos=await todo.find()
    res.json(todos)
}
