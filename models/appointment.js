var mongoose = require('mongoose')
    ,Schema = mongoose.Schema
    , _ = require('underscore')


/**
 * Business Schema
 */

var AppointmentSchema = new Schema(

    {
        business: { type: String, default:''},//business associated with appointment
        email: { type: String, default: '' }, //contact email
        phoneNumber: { type: String, default: ''}, //contact phone number
        employee: {type: String}, //db ids of employees working for this business
        service: {type: [String]} //services added by the business owner


    }

)




module.exports = mongoose.model('Business', BusinessSchema)

