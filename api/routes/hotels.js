import { Router } from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel, getHotelsBycity, getHotelsByType } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = Router()

//Create
router.post('/',  verifyAdmin, createHotel)

//Update
router.put('/:id', verifyAdmin, updateHotel)

//Delete
router.delete('/:id', verifyAdmin, deleteHotel)

//Get
router.get('/find/:id', getHotel)

//Get all
router.get('/', getAllHotel);

//Get all by city
router.get('/countbycity', getHotelsBycity)

//GET by type
router.get('/countbytype', getHotelsByType )

export default router;
