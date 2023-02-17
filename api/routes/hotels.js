import { Router } from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotelController.js";


const router = Router()

//Create
router.post('/', createHotel)

//Update
router.put('/:id', updateHotel)

//Delete
router.delete('/:id', deleteHotel)

//Get
router.get('/:id', getHotel)

//Get all
router.get('/', getAllHotel)

export default router;
