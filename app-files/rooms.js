const {roomTypes} = require ('../helper');
const roomTypesFormat = roomTypes.join(" Room|");
module.exports = hotelId =>{
    return{
        type: 'array',
        minItems: 2,
        maxItems: 6,
        uniqueItems: true,
        items: {
            type: "object",
            properties: {
                hotelId: {
                    type: 'string',
                    pattern: `${hotelId}`
                },
                id:{
                    type: 'string',
                    faker: 'random.uuid'
                },
                name:{
                    type: 'string',
                    pattern: roomTypesFormat,
                    minItems: 1,
                    maxItems: 1,
                    uniqueItem:true
                },
                description: {
                    type: 'string',
                    faker: 'lorem.paragraphs'
                },
                max_occupancy: {
                    type: 'number',
                    minimum: 1,
                    maximum: 5,
                    multipleOf: 1
                },
                price_in_usd: {
                    type: 'number',
                    minimum: 100,
                    maximum: 2500,
                    multipleOf: 1
                },
                image: {
                    type: 'number',
                    minimum: 1,
                    maximum: 15,
                    multipleOf: 1
                }
            },
            required: [
                "hotelId", 
                "id", 
                "name", 
                "description", 
                "max_occupancy", 
                "price_in_usd", 
                "image"
            ]
        }
    }
}