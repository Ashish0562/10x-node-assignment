const router = require('express').Router();
const Blog = require('../models/Blog')


router.get('/blog', async (req,res)=>{
    try{
        const user = await Blog.find({topic: req.query.search})
        res.status(200).json({
            status: "Success",
            user
        })
    }catch(e){
        res.status(404).json({
            status: "failed",
            message: e.message
        })
    }
})


router.post('/blog',async (req,res)=>{
    try{
        const user = await Blog.create(req.body)
        res.status(200).json({
            status: "Success",
            user
        })
    }catch(e){
        res.status(404).json({
            status: "failed",
            message: e.message
        })
    }
})


router.put("/blog/:id", async (req, res) => {
    try {
        // Code to update the document
        console.log(req.body)
        const user = await Blog.updateOne({_id: req.params.id}, req.body);

        res.status(200).json({
            status: "Success",
            user
        })

    } catch (e) {
        res.status(404).json({
            status: "failed",
            message: e.message
        })
    }
});


router.delete("/blog/:id", async (req, res) => {
    try {
        // Code to update the document
        const user = await Blog.deleteOne({_id : req.params.id});

        res.status(200).json({
            status: "Success",
            user
        })

    } catch (e) {
        res.status(404).json({
            status: "failed",
            message: e.message
        })
    }
});


module.exports = router;