var mongoose = require('mongoose')
    ,Schema = mongoose.Schema
    , _ = require('underscore')


/**
 * Timeslot Schema
 */

var TimeslotSchema = new Schema(

    {
		startTime: { type: Date },
		endTime: { type: Date },
		description: { type:String, default: '' },
		employeeID: { type:String, default: '' }, 
		customer: { type:String, default: '' }

    }

)


module.exports = mongoose.model('Timeslot', TimeslotSchema)

