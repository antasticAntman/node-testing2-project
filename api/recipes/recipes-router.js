const router = require('express').Router()

const Recipe = require('./recipes-model')

// router.use('*', (req, res, next) => {
//     res.json({api:'up'})
// })
router.get('/', (req, res, next) => {
    res.status(200).json('hiiiii')
})
router.get("/:id", (req, res, next) => {
    Recipe.getRecipeId(req.params.id)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(next)
})
router.post('/', (req,res,next) => {
    res.status(201).json('he has been made')
})
router.delete('/:id', (req, res, next) => {
    res.status(200).json('person has been deleted')
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
       err: err.message,
       stack: err.stack
    })
})

module.exports = router