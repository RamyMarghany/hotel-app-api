const jsf = require ('json-schema-faker');
const hotelsList = require('./app-files/hotels');
const roomsList = require('./app-files/rooms');

jsf.extend('faker', () => require ('faker'));
module.exports = () =>{
    let hotels = jsf.generate(hotelsList);
    let rooms = []
    let confirmation = []
    hotels.forEach(hotel => {
        let hotelRooms = jsf.generate(roomsList(hotel.id))
        rooms.push(...hotelRooms);
    });
    return {hotels, rooms, confirmation}
}