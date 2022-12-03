const usersController = require('./users.controllers')

const getAllUsers = async (req, res) => { 
    /* try {
        const data = await usersController.findAllUsers()
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({message: error.message})
    } */
    usersController.findAllUsers()
        .then( (data) => {
            res.status(200).json(data)
        })
        .catch( (err) => {
            res.status(400).json({ message: err.message })
        })
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    usersController.findUserById(id)
        .then( (data) => {
            if(data){
                res.status(200).json(data)
            }else{
                res.status(404).json({ message: 'Invalid ID' })
            }
        })
        .catch( (err) => {
            res.status(400).json({ message: err.message })
        })
}

const postUser = (req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body
    usersController.createUser({ first_name, last_name, email, password, birthday })
        .then( (data) => {
            res.status(201).json(data)
        })
        .catch( (err) => {
            res.status(400).json({ message: err.message })
        })
}

const patchUser = (req, res) => {
    const { id } = req.params
    const { first_name, last_name, email, password, birthday } = req.body
    usersController.updateUser(id, { first_name, last_name, email, password, birthday })
        .then( (data) => {
            if(data){
                res.status(200).json({message: 'User updated succesfully with id: ' + id})
            }else{
                res.status(404).json({ message: 'Invalid ID' })
            }
        })
        .catch( (err) => {
            res.status(400).json({ message: err.message })
        })
}

const deleteUser = (req, res) => {
    const { id } = req.params
    usersController.deleteUser(id)
        .then( (data) => {
            if(data){
                res.status(200).json({message: 'Deleted succesfully'})
            }else{
                res.status(404).json({ message: 'Invalid ID' })
            }
        })
        .catch( (err) => {
            res.status(400).json({ message: err.message })
        })
}

module.exports = {
    getAllUsers,
    getUserById,
    postUser,
    patchUser,
    deleteUser
}
