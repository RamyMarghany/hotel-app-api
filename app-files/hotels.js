const {hotelNames} = require ('../helper');
const hotelNamesFormat = hotelNames.join('|');
const {amenities} = require('../helper');
const amenitiesFormat = amenities.join('|')
module.exports = {
    type: 'array',
    minItems:4,
    maxItems:30,
    uniqueItem:true,
    items:{
        type:'object',
        properties:{
            id:{
                type:'string',
                faker: 'random.uuid'
            },
            name:{
                type:'string',
                pattern:hotelNamesFormat,
                minItems:1,
                maxItems:1,
                uniqueItem:true
            },
            description: {
                type: 'string',
                faker: 'lorem.paragraphs'
            },
            distance_to_venue: {
                type: 'number',
                minimum: 100,
                maximum: 5000,
                multipleOf: 100
            },
            rating: {
                type: 'number',
                minimum: 0,
                maximum: 5,
                multipleOf: 0.1
            },
            price_category: {
                type: 'string',
                pattern: 'low|medium|high',
                minItems: 1,
                maxItems: 1,
            },
            amenities: {
                type: 'array',
                items: {
                    pattern: amenitiesFormat
                },
                minItems: 1,
                maxItems: 7,
                uniqueItems: true
            },
            images: {
                type: 'array',
                items: {
                    type: 'integer',
                    minimum: 1,
                    maximum: 20
                },
                minItems: 2,
                maxItems: 8,
                uniqueItems: true
            }
        },
        required: [
            'id',
            'name',
            'description',
            'distance_to_venue',
            'rating',
            'price_category',
            'amenities',
            'images'
        ]
    }

}