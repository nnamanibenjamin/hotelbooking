import { Router } from "express";

const router = Router()
import { updateUser, deleteUser, getUser, getAllUser} from '../controllers/userController.js'
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

// router.get('/checkauthentication', verifyToken, (req, res) => {
//     res.send('User is logged in')
// })

//update
router.put('/:id', verifyUser, updateUser)

//Delete
router.delete('/:id', verifyUser, deleteUser)

//Get
router.get('/:id', verifyUser, getUser)

//Get all
router.get('/', verifyAdmin, getAllUser)

export default router;