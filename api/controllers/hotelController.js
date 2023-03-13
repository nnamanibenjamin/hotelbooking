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
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel)
    } catch (err) {
        res.status(500).json(err)
    }
}

//get all hotel
export const getAllHotel = async (req, res, next) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels)
    } catch (err) {
        next(err)
    }
}

//get hot by location
export const getHotelsBycity = async (req, res, next) => {
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

//get by type
export const getHotelsByType = async (req, res, next) => {
    try {
        const hotel = await Hotel.countDocuments({type: 'hotel'});
        const apartment = await Hotel.countDocuments({type: 'apartment'});
        const resorts = await Hotel.countDocuments({type: 'resorts'});
        const villa = await Hotel.countDocuments({type: 'villa'});
        const cabin = await Hotel.countDocuments({type: 'cabin'});

        
        res.status(200).json([
            {type: 'hotel', count: hotel},
            {type: 'apartment', count: apartment},
            {type: 'resorts', count: resorts},
            {type: 'villa', count: villa},
            {type: 'cabin', count: cabin}
        ])
    } catch (err) {
        next(err)
    }
}