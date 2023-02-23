import { Router } from "express";

const router = Router()
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

//Create
router.post('/:hotelId',  verifyAdmin, createRoom)

//Update
router.put('/:id', verifyAdmin, updateRoom)

//Delete
router.delete('/:id/:hotelId', verifyAdmin, deleteRoom)

//Get
router.get('/:id', getRoom)

//Get all
router.get('/', getAllRooms)

export default router;