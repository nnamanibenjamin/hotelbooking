import Hotel from "../models/Hotel.js";

//create hotel
export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (err) {
        next(err)
    }
}

//update
export const updateHotel = async (req, res, next) => {

        try {
            const updateHotel = await 
            Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
            res.status(200).json(updateHotel)
        } catch (err) {
            res.status(500).json(err.message)
        }
    
}


//delete hotel
export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json('Hotel Deleted')
    } catch (err) {
        res.status(500).json(err.message)
    }
}

//get hotel
export const getHotel = async (req, res, next) => {
    try {
        const hotel = Hotel.findById(req.params.id);
        res.status(200).json(hotel)
    } catch (err) {
        res.status(500).json(err)
    }
}

//get all hotel
export const getAllHotel = async (req, res, next) => {
    try {
        const hotels = Hotel.find();
        res.status(200).json(hotels)
    } catch (err) {
        next(err)
    }
}

//get hot by location
export const getAllHotelsBycity = async (req, res, next) => {
    const cities = req.query.cities.split(',')
    try {
        const list = await Promise.all(cities.map((city) => {
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}

export const getAllHotelsByType = async (req, res, next) => {
    try {
        const hotels = Hotel.find();
        res.status(200).json(hotels)
    } catch (err) {
        next(err)
    }
}